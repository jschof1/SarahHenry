export const FORMSUBMIT_EMAIL = 'hello@sarahssignatureceremonies.co.uk';
export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export function buildEnquiryPayload({ pageName, formData }) {
  const ceremonyLabel = formData.ceremonyType || 'General';

  return {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    ceremonyType: formData.ceremonyType,
    date: formData.date,
    location: formData.location,
    message: formData.message,
    _subject: `New ${ceremonyLabel} enquiry from ${formData.name}`,
    _replyto: formData.email,
    _template: 'table',
    _captcha: 'true',
    _honey: '',
    _webhook: '',
    sourcePage: pageName,
  };
}

export async function submitEnquiryForm({ pageName, formData, fetchImpl = fetch }) {
  const payload = buildEnquiryPayload({ pageName, formData });
  const body = new URLSearchParams();

  for (const [key, value] of Object.entries(payload)) {
    body.set(key, value);
  }

  const response = await fetchImpl(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    },
    body: body.toString(),
  });

  const data = await response.json();
  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Unable to send your message right now.');
  }

  return data;
}
