import { WrapperProps } from "./types";

export function Wrapper(props: WrapperProps) {
  const { id, className, children } = props;

  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}
