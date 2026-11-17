# bake-pay: e-Transfer in → website live on rezsite.com

When a prospect buys from their preview link (`bakeaweb.com/preview.html?p=…`), they get a **pay code** like `BAKE-ML9P` and send an Interac e-Transfer to **leah@rezsite.com** with the code in the message. bake-pay does the rest:

```
Interac email → leah@rezsite.com (Cloudflare Email Routing)
   → bake-pay Email Worker (pay/worker/worker.js)
        1. forwards EVERY email to Leah's Gmail (ermatinger.leah@gmail.com), first, always
        2. if it's from an interac.ca address, sends the raw email to ↓
   → bake-pay Supabase Edge Function (pay/function/index.ts)
        checks Interac's DKIM signature → finds the order by pay code → checks "deposited" and the amount
        → builds the site from the pitch (studio's own builder) → uploads it → pagename.rezsite.com is live
```

The prospect's preview page checks every 20 seconds and shows **"Your website is live"** with the link.

## Safety
- **A fake "Interac" email can't publish anything.** The function only acts on emails with a passing DKIM signature from `interac.ca` that matches the From address. Email signatures are checked against Interac's public keys (DNS, looked up over HTTPS).
- The Worker holds **no secrets**. The function trusts the email's signature, never the caller.
- The price is fixed on the server when the pay code is made (`order_shared_pitch()`), so it can't be changed in the browser. The payment must be **at least** the order amount.
- Only **deposited** money counts (Autodeposit). If an e-Transfer still needs a click to deposit, it waits in BAKER Admin.
- Every Interac email is logged in the Supabase table **`bake_payments`** (never the bank details: only sender name, amount, pay code and result).
- Still reconcile against the bank statement weekly.

## Where to see what happened
**BAKER Admin** (`bakeaweb.com/?v=baker#admin`) → **e-Transfer orders**: each order shows *Paid automatically* or the error. Below it, **"Interac emails that need a look"** lists anything bake-pay couldn't finish on its own (no pay code, wrong amount, not deposited, publishing failed). Fix it, click **Payment received → publish** on the order, then **Mark handled**.

## Parts
| Part | What | Deployed by |
|---|---|---|
| `worker/worker.js`, `worker/wrangler.toml` | Cloudflare Email Worker `bake-pay` | GitHub Actions → **BAKE Host** (on every push that changes `pay/worker/`) |
| `worker/setup-route.mjs` | Points the `leah@rezsite.com` routing rule at the Worker | Same workflow, after the deploy |
| `function/index.ts`, `function/parse.js` | Supabase Edge Function `bake-pay` (`verify_jwt` off: it checks DKIM itself) | Claude (Supabase connector), or `supabase functions deploy bake-pay --no-verify-jwt` |
| `bundle.mjs` → `docs/assets/site-builder.js` | The studio's site builder as one file. Made on **every studio build**, so the function always builds with the live templates | `npm run build` (studio) |

`POST https://gpwxuunutljcauoknhrh.supabase.co/functions/v1/bake-pay?selftest=1` checks the DKIM checker, the parser, DNS over HTTPS and the builder (it builds the newest pitch without publishing). It touches no data.

## If Leah's email ever stops arriving
In Cloudflare: **rezsite.com → Email → Email Routing → Routing rules → leah@rezsite.com → Edit**, set the action back to **Send to an email → ermatinger.leah@gmail.com** → **Save**. Payments then go back to the manual **Payment received → publish** button.
