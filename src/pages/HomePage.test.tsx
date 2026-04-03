/* @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './HomePage';

const { submitEnquiryForm } = vi.hoisted(() => ({
  submitEnquiryForm: vi.fn(),
}));

vi.mock('../hooks/useScrollReveal', () => ({
  useScrollReveal: () => ({ current: null }),
}));

vi.mock('../lib/formsubmit.js', () => ({
  FORMSUBMIT_EMAIL: 'hello@peteryoungindependantcelebrant.co.uk',
  submitEnquiryForm,
}));

class MockIntersectionObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  configurable: true,
  value: MockIntersectionObserver,
});

afterEach(() => {
  cleanup();
  submitEnquiryForm.mockReset();
});

describe('HomePage', () => {
  it('keeps the original hero voice and lead CTA', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Peter Young, Independent Celebrant' }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/welcome, and thank you for visiting/i),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: /explore my services/i }),
    ).toBeInTheDocument();
  });

  it('uses dedicated wrappers for the larger hero stack and cta spacing', () => {
    const { container } = render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    const heroTitle = screen.getByRole('heading', { name: 'Peter Young, Independent Celebrant' });
    expect(heroTitle.closest('.hero-stack')).not.toBeNull();
    expect(container.querySelector('.hero-actions')).not.toBeNull();
  });

  it('uses a simpler services layout and gives weddings an image-led feature', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole('heading', { name: /my services/i }),
    ).toBeInTheDocument();
    expect(screen.getByText('Commitment Ceremonies')).toBeInTheDocument();
    expect(screen.getByText('Christenings / Baptisms')).toBeInTheDocument();
    expect(
      screen.getByAltText(/wedding ceremony inspiration/i),
    ).toBeInTheDocument();
  });

  it('shows the enquiry confirmation after a successful submit', async () => {
    submitEnquiryForm.mockResolvedValue({ success: true });

    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    fireEvent.change(screen.getByLabelText(/your name/i), {
      target: { value: 'Alex Rivers' },
    });
    fireEvent.change(screen.getByLabelText(/email address/i), {
      target: { value: 'alex@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/your message/i), {
      target: { value: 'We are planning a ceremony in September.' },
    });

    fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));

    await waitFor(() => {
      expect(screen.getByText(/thank you for your message/i)).toBeInTheDocument();
    });

    expect(submitEnquiryForm).toHaveBeenCalledTimes(1);
  });

  it('keeps a single send me a message heading in the home contact form', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    );

    expect(screen.getAllByText(/send me a message/i)).toHaveLength(1);
  });
});
