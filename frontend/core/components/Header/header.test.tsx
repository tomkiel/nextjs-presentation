import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Header } from './header';

describe('Header Component', () => {
  it('renders the header element with the correct ID and class', () => {
    render(<Header />);

    const headerElement = screen.getByRole('banner');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHaveClass('app-header');
    expect(headerElement).toHaveAttribute('id', 'app-header');
  });

  it('renders the logo with a link to the home page', () => {
    render(<Header />);

    const logoLink = screen.getByRole('link', { name: '' }); // Assuming no alt text in the Logo component
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  it('renders the navigation menu', () => {
    render(<Header />);

    const menuElement = screen.getByRole('navigation');
    expect(menuElement).toBeInTheDocument();
  });

  it('renders the search icon', () => {
    render(<Header />);

    const searchIcon = screen.getByRole('img', { name: /search/i }); // Assuming accessible name for IconSearch
    expect(searchIcon).toBeInTheDocument();
  });

  it('renders the user login icon', () => {
    render(<Header />);

    const userIcon = screen.getByRole('img', { name: /user/i }); // Assuming accessible name for IconUser
    expect(userIcon).toBeInTheDocument();
  });

  it('renders the wishlist icon with a count', () => {
    render(<Header />);

    const heartIcon = screen.getByRole('img', { name: /heart/i }); // Assuming accessible name for IconHeart
    expect(heartIcon).toBeInTheDocument();

    const wishCount = screen.getByText('5');
    expect(wishCount).toBeInTheDocument();
  });

  it('renders the shopping bag icon with a count', () => {
    render(<Header />);

    const bagIcon = screen.getByRole('img', { name: /shopping bag/i }); // Assuming accessible name for IconShoppingBag
    expect(bagIcon).toBeInTheDocument();

    const bagCount = screen.getByText('1');
    expect(bagCount).toBeInTheDocument();
  });
});
