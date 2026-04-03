/* @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FAQPage from './FAQPage';

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

describe('FAQPage', () => {
  it('uses the updated same-sex weddings answer and emphasis styling', () => {
    render(
      <MemoryRouter>
        <FAQPage />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByRole('button', { name: /do you perform same-sex weddings/i }));

    const answer = screen.getByText('Absolutely!! Love is love right?');
    expect(answer).toBeInTheDocument();
    expect(answer).toHaveClass('font-semibold', 'text-lg', 'sm:text-xl');
  });
});
