import { Wrapper } from "@components/organisms";
import "./HeaderMainMenu.scss";
import { Anchor } from "@components/atoms";

export async function HeaderMainMenu() {
  const res = await fetch(`${process.env.API_URL}/common/header-main-menu`, {
    cache: 'force-cache',
  });
  const { menu_items: data } = await res.json();

  return <Wrapper className="header-main-menu">
    <ul className="navigation-menu">
      {[...data].sort((a, b) => a.order - b.order).map((item, index) => (
        <li key={index} id={`${item.title}-${item.id}`}>
          <Anchor href={item.url} className="link">
            {item.title.toUpperCase()}
          </Anchor>
        </li>
      ))}
    </ul>
  </Wrapper>
}