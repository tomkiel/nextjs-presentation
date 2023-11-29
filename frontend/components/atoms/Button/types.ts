import { ElementProps } from "types";

export interface ButtonProps extends ElementProps {
  appearance?: "primary" | "neutral" | "stealth" | "transparent";
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  onClick?: () => void;
}