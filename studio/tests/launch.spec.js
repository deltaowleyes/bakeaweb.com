/* Launch-week discount: 50% Mon → 10% Fri, each day ending at midnight Eastern time. */
import { test, expect } from '@playwright/test';
import { launchDeal, salePrice } from '../src/lib/launch.js';
import { compareHtml } from '../src/lib/compare.js';

test('launch-week discount follows Eastern midnight', () => {
  const at = t => launchDeal(new Date(t));
  expect(at('2026-11-15T12:00:00Z')).toBeNull();
  expect(at('2026-11-16T18:40:00Z').pct).toBe(50);
  expect(at('2026-11-17T04:59:00Z').pct).toBe(50);   // 11:59 pm Monday ET
  expect(at('2026-11-17T05:01:00Z').pct).toBe(40);   // 12:01 am Tuesday ET
  expect(at('2026-11-18T15:00:00Z').pct).toBe(30);
  expect(at('2026-11-19T15:00:00Z').pct).toBe(20);
  expect(at('2026-11-20T15:00:00Z').pct).toBe(10);
  expect(at('2026-11-21T05:01:00Z')).toBeNull();
  expect(salePrice(350, at('2026-11-16T18:40:00Z'))).toBe(175);
  expect(salePrice(0, at('2026-11-16T18:40:00Z'))).toBe(0);
  expect(compareHtml(86, 250, n => '$' + n, { deal: { pct: 50 } })).toContain('$125 one time');
});
