import Link from 'next/link';
import { AnchorProps } from './types';

import './anchor.scss';

export function Anchor(props: AnchorProps) {
  const { href, role, children, className } = props;
  return (
    <Link href={href} role={role} className={className}>
      {children}
    </Link>
  );
}
