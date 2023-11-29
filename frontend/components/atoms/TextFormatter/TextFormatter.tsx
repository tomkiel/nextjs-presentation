import { TextFormatterProps } from './types';
import './TextFormatter.scss';

export function TextFormatter(props: TextFormatterProps) {
  const { children, bold, italic, underline } = props;

  const styles: React.CSSProperties = {
    fontWeight: bold ? 'bold' : 'normal',
    fontStyle: italic ? 'italic' : 'normal',
    textDecoration: underline ? 'underline' : 'none',
  };

  return <span style={styles}>{children}</span>
}

