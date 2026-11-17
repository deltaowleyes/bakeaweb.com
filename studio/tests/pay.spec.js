/* bake-pay (pay/README.md): reading Interac e-Transfer emails, the DKIM rule, and which emails the Worker passes on. */
import { test, expect } from '@playwright/test';
import { parseInterac, amountOf, depositedIn, interacSigned } from '../../pay/function/parse.js';
import { looksLikeInterac } from '../../pay/worker/worker.js';

test('reads an Autodeposit email', () => {
  const r = parseInterac({ subject: 'INTERAC e-Transfer: Jane Smith sent you money.', text: 'Hi Leah Courteaux,\nJane Smith sent you $300.00 (CAD) and the money has been automatically deposited into your bank account.\nMessage: bake-ml9p thanks!' });
  expect(r).toEqual({ code: 'BAKE-ML9P', amount: 300, sender: 'Jane Smith', deposited: true, cancelled: false });
});
test('amounts, French and deposit wording', () => {
  expect(amountOf('Amount: $1,250.00 (CAD)')).toBe(1250);
  expect(amountOf('Montant : 1 250,00 $')).toBe(1250);
  expect(amountOf('sent you $45 today')).toBe(45);
  expect(depositedIn('To deposit your money, click here')).toBe(false);
  expect(depositedIn("L'argent a été déposé automatiquement")).toBe(true);
  expect(parseInterac({ html: '<p>Message: <b>BAKE-7K3Q</b></p><p>$200.00</p>' }).code).toBe('BAKE-7K3Q');
  expect(parseInterac({ text: 'Message: BAKE-0O1I' }).code).toBe(null);   // 0, O, 1, I are never used in pay codes
});
test('only a passing interac.ca signature counts', () => {
  const pass = d => ({ signingDomain: d, status: { result: 'pass' } });
  expect(interacSigned([pass('payments.interac.ca')], ['notify@payments.interac.ca']).ok).toBe(true);
  expect(interacSigned([pass('evil.com')], ['notify@payments.interac.ca']).ok).toBe(false);
  expect(interacSigned([{ signingDomain: 'payments.interac.ca', status: { result: 'neutral' } }], ['notify@payments.interac.ca']).ok).toBe(false);
  expect(interacSigned([pass('payments.interac.ca')], ['someone@gmail.com']).ok).toBe(false);
  expect(interacSigned([], ['notify@payments.interac.ca']).ok).toBe(false);
});
test('the Worker passes on only Interac emails', () => {
  expect(looksLikeInterac('"Interac e-Transfer" <notify@payments.interac.ca>')).toBe(true);
  expect(looksLikeInterac('catch@payments.interac.ca')).toBe(true);
  expect(looksLikeInterac('Jane <jane@gmail.com>')).toBe(false);
  expect(looksLikeInterac('fake <notify@payments.interac.ca.evil.com>')).toBe(false);
});
