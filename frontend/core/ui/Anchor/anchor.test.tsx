import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Anchor } from './anchor';
import { AnchorProps } from './types';

describe('Anchor Component', () => {
  it('renders correctly with required props', () => {
    const props: AnchorProps = {
      href: '/home',
      children: 'Home',
    };

    render(<Anchor {...props} />);

    const linkElement = screen.getByRole('link', { name: /home/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/home');
  });

  it('applies additional props such as className and role', () => {
    const props: AnchorProps = {
      href: '/about',
      role: 'button',
      className: 'custom-class',
      children: 'About Us',
    };

    render(<Anchor {...props} />);

    const linkElement = screen.getByRole('button', { name: /about us/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveClass('custom-class');
    expect(linkElement).toHaveAttribute('href', '/about');
  });

  it('renders children correctly', () => {
    const props: AnchorProps = {
      href: '/contact',
      children: <span>Contact Us</span>,
    };

    render(<Anchor {...props} />);

    const linkElement = screen.getByRole('link', { name: /contact us/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toContainHTML('<span>Contact Us</span>');
  });

  it('does not throw an error if optional props are not provided', () => {
    const props: AnchorProps = {
      href: '/services',
      children: 'Services',
    };

    render(<Anchor {...props} />);

    const linkElement = screen.getByRole('link', { name: /services/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).not.toHaveAttribute('role');
    expect(linkElement).not.toHaveClass();
  });
});
