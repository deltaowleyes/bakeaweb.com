// pitch-photo-copy: copies every outside photo a pitch links to (redesign_pitches.photos, base_project,
// redesigns) into the public Storage bucket "pitch-photos" (random folder per pitch, readable only by exact
// link, not listable), strips JPEG metadata (EXIF/GPS), and points the pitch at the copies.
// Why: previews are drawn into a picture in the browser, and most business websites don't allow that (no CORS),
// so hotlinked photos had to be laid over the picture and could cover headings. Copies in our bucket draw normally.
// Called by the database trigger redesign_pitches_copy_photos (pg_net) with header x-bake-key, body {"id": <pitch id>}.
import { createClient } from "npm:@supabase/supabase-js@2";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
const BUCKET = "pitch-photos";
const OURS = /(bakeaweb\.com|rezsite\.com|bakedby\.me|bakedbya\.pro|supabase\.co)/i;
const IMG = /https?:\/\/[^"\\\s]+?\.(?:jpe?g|png|webp|gif)(?:\?[^"\\\s]*)?/gi;
const MAX = 15 * 1024 * 1024;

function stripJpeg(b: Uint8Array): Uint8Array {
  // drop APP1 (EXIF/XMP, holds GPS) and APP13 segments; keep everything else
  if (b[0] !== 0xff || b[1] !== 0xd8) return b;
  const out: number[] = [0xff, 0xd8];
  let i = 2;
  while (i + 4 <= b.length) {
    if (b[i] !== 0xff) break;
    const m = b[i + 1];
    if (m === 0xda) { for (let j = i; j < b.length; j++) out.push(b[j]); return new Uint8Array(out); }
    const len = (b[i + 2] << 8) | b[i + 3];
    if (m !== 0xe1 && m !== 0xed) for (let j = i; j < i + 2 + len; j++) out.push(b[j]);
    i += 2 + len;
  }
  return b;
}

async function sha(s: string) {
  const h = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(h)).slice(0, 10).map((x) => x.toString(16).padStart(2, "0")).join("");
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("POST only", { status: 405 });
  const key = req.headers.get("x-bake-key") || "";
  const ok = await sb.rpc("pitch_photo_copy_key_ok", { k: key });
  if (ok.error || ok.data !== true) return new Response("no", { status: 401 });
  const { id } = await req.json().catch(() => ({}));
  if (!Number.isInteger(id)) return new Response("id?", { status: 400 });

  const { data: row, error } = await sb.from("redesign_pitches")
    .select("id, photos, base_project, redesigns, photo_folder").eq("id", id).single();
  if (error || !row) return new Response("not found", { status: 404 });

  const folder = row.photo_folder || crypto.randomUUID().replace(/-/g, "");
  const text = JSON.stringify([row.photos, row.base_project, row.redesigns]);
  const urls = [...new Set((text.match(IMG) || []).filter((u) => !OURS.test(u)))];
  const map: Record<string, string> = {}, failed: Record<string, string> = {};

  for (const u of urls) {
    try {
      const r = await fetch(u, { headers: { "user-agent": "Mozilla/5.0 (BAKE pitch photo copy)", "accept": "image/*" }, redirect: "follow" });
      const type = (r.headers.get("content-type") || "").split(";")[0].trim();
      if (!r.ok || !/^image\/(jpeg|png|webp|gif)$/.test(type)) { failed[u] = `HTTP ${r.status} ${type}`; continue; }
      let b = new Uint8Array(await r.arrayBuffer());
      if (b.length > MAX) { failed[u] = "too big"; continue; }
      if (type === "image/jpeg") b = stripJpeg(b);
      const ext = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif" }[type];
      const path = `${folder}/${await sha(u)}.${ext}`;
      const up = await sb.storage.from(BUCKET).upload(path, b, { contentType: type, upsert: true, cacheControl: "31536000" });
      if (up.error) { failed[u] = up.error.message; continue; }
      map[u] = sb.storage.from(BUCKET).getPublicUrl(path).data.publicUrl;
    } catch (e) { failed[u] = String(e).slice(0, 120); }
  }

  const swap = (v: unknown) => {
    if (v == null) return v;
    let s = JSON.stringify(v);
    for (const [a, b] of Object.entries(map)) s = s.split(JSON.stringify(a).slice(1, -1)).join(b);
    return JSON.parse(s);
  };
  // photos keep the original address as "from" (where it came from) and point "src" at the copy
  const photos = Array.isArray(row.photos)
    ? row.photos.map((p: Record<string, string>) => map[p.src] ? { ...p, src: map[p.src], from: p.src } : p)
    : row.photos;
  const upd = { photos, base_project: swap(row.base_project), redesigns: swap(row.redesigns), photo_folder: folder, photos_copied_at: new Date().toISOString() };
  if (Object.keys(map).length || !row.photo_folder) {
    const u = await sb.from("redesign_pitches").update(upd).eq("id", id);
    if (u.error) return Response.json({ id, error: u.error.message }, { status: 500 });
  }
  return Response.json({ id, found: urls.length, copied: Object.keys(map).length, failed });
});
