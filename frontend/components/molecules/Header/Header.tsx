import { Anchor } from "@components/atoms/Anchor/Anchor";
import { Logo } from "@components/atoms/Logo/Logo";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { Wrapper } from "@components/organisms/Wrapper/Wrapper";
import { IconHeart, IconSearch, IconShoppingBag, IconUser } from "@tabler/icons-react";

import "./Header.scss";

export function Header() {
  return (
    <header id="app-header" className="app-header">
      <Wrapper className="header-container">
        <Wrapper className="header-logo">
          <Anchor href="/">
            <Logo />
          </Anchor>
        </Wrapper>
        <Wrapper className="header-navigation">

        </Wrapper>
        <Wrapper className="header-icons">
          <Wrapper className="main-search">
            <IconSearch />
          </Wrapper>
          <Wrapper className="login-actions">
            <IconUser />
          </Wrapper>
          <Wrapper className="shopping-wish">
            <IconHeart />
            <Wrapper className="wish-count">
              <TextFormatter>5</TextFormatter>
            </Wrapper>
          </Wrapper>
          <Wrapper className="shopping-cart">
            <IconShoppingBag />
            <Wrapper className="bag-count">
              <TextFormatter>1</TextFormatter>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </header>
  )
}