import { MainProps } from "./types";
import "./Main.scss";

export function Main(props: MainProps) {
  const { id, className, children } = props;

  return (
    <main id={id} className={className}>
      {children}
    </main>
  );
}
