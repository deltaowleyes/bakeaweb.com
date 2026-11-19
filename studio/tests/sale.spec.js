/* Pitch prices and the pitch sale: 50% off for 24 hours after the pitch is emailed, 10% less every 24 hours. */
import { test, expect } from '@playwright/test';
import { pitchDeal, pitchPriceFor, salePrice } from '../src/lib/sale.js';
import { compareHtml } from '../src/lib/compare.js';

test('pitch prices follow the grade (CAD)', () => {
  expect([80, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100].map(pitchPriceFor))
    .toEqual([50, 50, 50, 60, 70, 85, 100, 125, 150, 175, 200, 250, 300, 450, 600, 800, 800]);
});

test('the sale starts when the pitch is emailed and drops 10% every 24 hours', () => {
  const sent = '2026-11-19T15:00:00Z', h = n => new Date(Date.parse(sent) + n * 3600000);
  expect(pitchDeal(null, h(1))).toBeNull();
  expect(pitchDeal(sent, h(-1))).toBeNull();
  expect(pitchDeal(sent, h(0)).pct).toBe(50);
  expect(pitchDeal(sent, h(23.9)).pct).toBe(50);
  expect(pitchDeal(sent, h(24.1)).pct).toBe(40);
  expect(pitchDeal(sent, h(50)).pct).toBe(30);
  expect(pitchDeal(sent, h(73)).pct).toBe(20);
  expect(pitchDeal(sent, h(97)).pct).toBe(10);
  expect(pitchDeal(sent, h(120.1))).toBeNull();
  expect(pitchDeal(sent, h(1)).next).toBe(40);
  expect(salePrice(250, pitchDeal(sent, h(1)))).toBe(125);
  expect(salePrice(0, pitchDeal(sent, h(1)))).toBe(0);
  expect(compareHtml(95, 250, n => '$' + n, { deal: { pct: 50 } })).toContain('$125 one time');
});
