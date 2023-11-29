import Link from "next/link";
import { AnchorProps } from "./types";
import "./Anchor.scss";

export function Anchor(props: AnchorProps) {
  const { href, id, className, children, target, role } = props;
  return (
    <Link href={href} id={id} className={className} target={target} role={role}>
      {children}
    </Link>
  );
}
