import { LinkProps } from 'next/link';

export interface AnchorProps extends LinkProps {
  role?: 'button' | 'anchor';
  className?: string;
  children: React.ReactNode;
}
