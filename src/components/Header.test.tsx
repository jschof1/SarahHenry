/* @vitest-environment jsdom */
import '@testing-library/jest-dom/vitest';
import { act } from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

function setScrollY(value: number) {
  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value,
    writable: true,
  });
}

afterEach(() => {
  cleanup();
});

describe('Header', () => {
  it('renders the logo on the homepage', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText("Sarah's Signature Ceremonies");
    expect(logo).toHaveAttribute('src', '/logo.png');
  });

  it('shows solid background after scrolling', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    act(() => {
      setScrollY(100);
      window.dispatchEvent(new Event('scroll'));
    });

    const header = screen.getByRole('banner');
    expect(header.className).toContain('bg-brand-dark');
  });

  it('shows solid background on inner pages', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>,
    );

    const header = screen.getByRole('banner');
    expect(header.className).toContain('bg-brand-dark');
  });

  it('renders services dropdown links', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    expect(screen.getAllByText('Weddings').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Funerals & Memorials').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Naming Ceremonies').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('Vow Renewals').length).toBeGreaterThanOrEqual(1);
  });
});
