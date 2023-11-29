import { ReactNode } from "react";

export interface TextFormatterProps {
  children: ReactNode;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}