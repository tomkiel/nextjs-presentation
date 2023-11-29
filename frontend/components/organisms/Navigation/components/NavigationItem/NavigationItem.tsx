import { IconArrowDown } from "@tabler/icons-react";
import { NavigationItemProps } from "./types";
import { Wrapper } from "@components/organisms/Wrapper/Wrapper";

export function NavigationItem(props: NavigationItemProps) {
  const { label, subitems } = props;
  return (
    <li>
      {label}
      {subitems && (
        <Wrapper className="menu-subitems">
          <IconArrowDown />
          <ul>
            {subitems.map((subitem, index) => (
              <NavigationItem key={index} label={subitem.label} subitems={subitem.subitems} />
            ))}
          </ul></Wrapper>
      )}
    </li>
  );
}