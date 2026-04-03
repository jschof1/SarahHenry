export const FORMSUBMIT_EMAIL: string;
export const FORMSUBMIT_ENDPOINT: string;

export interface EnquiryFormData {
  name: string;
  email: string;
  phone: string;
  ceremonyType: string;
  date: string;
  location: string;
  message: string;
}

export function buildEnquiryPayload(input: {
  pageName: string;
  formData: EnquiryFormData;
}): Record<string, string>;

export function submitEnquiryForm(input: {
  pageName: string;
  formData: EnquiryFormData;
  fetchImpl?: typeof fetch;
}): Promise<unknown>;
