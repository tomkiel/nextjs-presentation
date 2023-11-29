import { NavigationItem } from "./components";
import { NavigationProps } from "./types";

export function Navigation(props: NavigationProps) {
  const { menuItems } = props;
  return (
    <nav>
      <ul className="navigation-menu">
        {menuItems.map((menuItem, index) => (
          <NavigationItem key={index} label={menuItem.label} subitems={menuItem.subitems} />
        ))}
      </ul>
    </nav>
  );
}