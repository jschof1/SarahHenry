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
  it('uses the white logo at the top of the homepage', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText('Peter Young Independent Celebrant');
    expect(logo).toHaveAttribute('src', expect.stringContaining('white-logo'));
  });

  it('uses the standard logo after scrolling on the homepage', () => {
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

    const logo = screen.getByAltText('Peter Young Independent Celebrant');
    expect(logo).toHaveAttribute('src', expect.stringContaining('white-logo'));
  });

  it('uses the standard logo on inner pages', () => {
    setScrollY(0);

    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>,
    );

    const logo = screen.getByAltText('Peter Young Independent Celebrant');
    expect(logo).toHaveAttribute('src', expect.stringContaining('white-logo'));
  });
});
