import { Logo } from "@components/atoms/Logo/Logo";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { IconHeart, IconSearch, IconShoppingBag, IconUser } from "@tabler/icons-react";
import { Anchor } from "core/ui";
import { Menu } from "./components/Menu/menu";

import "./header.scss";

export function Header() {
  return (
    <header id="app-header" className="app-header">
      <div className="header-container">
        <div className="header-logo">
          <Anchor href="/">
            <Logo />
          </Anchor>
        </div>
        <div className="header-navigation">
          <Menu />
        </div>
        <div className="header-icons">
          <div className="main-search">
            <IconSearch />
          </div>
          <div className="login-actions">
            <IconUser />
          </div>
          <div className="shopping-wish">
            <IconHeart />
            <div className="wish-count">
              <TextFormatter>5</TextFormatter>
            </div>
          </div>
          <div className="shopping-cart">
            <IconShoppingBag />
            <div className="bag-count">
              <TextFormatter>1</TextFormatter>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}