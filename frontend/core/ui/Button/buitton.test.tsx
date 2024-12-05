import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { ButtonProps } from './types';

describe('Button Component', () => {
  it('renders correctly with children', () => {
    const props: ButtonProps = {
      children: 'Click Me',
    };

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  it('applies additional props correctly', () => {
    const props: ButtonProps = {
      children: 'Submit',
      className: 'custom-class',
      disabled: true,
    };

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /submit/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('custom-class');
    expect(buttonElement).toBeDisabled();
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    const props: ButtonProps = {
      children: 'Press Me',
      onClick: handleClick,
    };

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /press me/i });
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('renders correctly with dynamic attributes', () => {
    const props: ButtonProps = {
      children: 'Dynamic',
      'aria-label': 'dynamic button',
    };

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /dynamic/i });
    expect(buttonElement).toHaveAttribute('aria-label', 'dynamic button');
  });

  it('does not throw an error if optional props are omitted', () => {
    const props: ButtonProps = {
      children: 'No Props',
    };

    render(<Button {...props} />);

    const buttonElement = screen.getByRole('button', { name: /no props/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).not.toHaveAttribute('disabled');
    expect(buttonElement).not.toHaveClass();
  });
});
