import { ElementProps } from "types";

export interface AnchorProps extends ElementProps {
  href: string;
  target?: string;
  title?: string;
  role?: string;
}