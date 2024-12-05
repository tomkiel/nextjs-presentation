import { ButtonProps } from './types';

import './button.scss';

export function Button(props: ButtonProps) {
  const { children } = props;

  return (
    <button {...props}>
      {children}
    </button>
  );
}
