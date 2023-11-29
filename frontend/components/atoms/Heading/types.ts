import { ElementProps } from "types";

enum HeadingLevel {
  h1 = 1,
  h2 = 2,
  h3 = 3,
  h4 = 4,
  h5 = 5,
  h6 = 6
}

export interface TextProps extends ElementProps {
  level: HeadingLevel
}