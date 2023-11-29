import { TextProps } from './types';
import './Heading.scss';

export function Heading(props: TextProps) {
  const { children, id, className, level } = props;
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={`heading heading-${level} ${className}`} id={id}>{children}</Tag>;
}
