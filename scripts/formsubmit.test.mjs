import test from 'node:test';
import assert from 'node:assert/strict';

import {
  FORMSUBMIT_ENDPOINT,
  buildEnquiryPayload,
} from '../src/lib/formsubmit.js';

test('FORMSUBMIT_ENDPOINT targets the celebrant inbox', () => {
  assert.equal(
    FORMSUBMIT_ENDPOINT,
    'https://formsubmit.co/ajax/hello@peteryoungindependantcelebrant.co.uk',
  );
});

test('buildEnquiryPayload includes enquiry fields and FormSubmit metadata', () => {
  const payload = buildEnquiryPayload({
    pageName: 'Contact Page',
    formData: {
      name: 'Peter Young',
      email: 'peter@example.com',
      phone: '07544036487',
      ceremonyType: 'Wedding',
      date: '2026-06-01',
      location: 'Kent',
      message: 'I would love to chat about our ceremony.',
    },
  });

  assert.deepEqual(payload, {
    name: 'Peter Young',
    email: 'peter@example.com',
    phone: '07544036487',
    ceremonyType: 'Wedding',
    date: '2026-06-01',
    location: 'Kent',
    message: 'I would love to chat about our ceremony.',
    _subject: 'New Wedding enquiry from Peter Young',
    _replyto: 'peter@example.com',
    _template: 'table',
    _captcha: 'true',
    _honey: '',
    _webhook: '',
    sourcePage: 'Contact Page',
  });
});

test('buildEnquiryPayload falls back to a general subject when no ceremony type is given', () => {
  const payload = buildEnquiryPayload({
    pageName: 'Homepage',
    formData: {
      name: 'Alex',
      email: 'alex@example.com',
      phone: '',
      ceremonyType: '',
      date: '',
      location: '',
      message: 'Just saying hello.',
    },
  });

  assert.equal(payload._subject, 'New General enquiry from Alex');
  assert.equal(payload.sourcePage, 'Homepage');
});
