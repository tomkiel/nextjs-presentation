import { Main } from "@components/atoms";
import { Header, TopHeader } from "@components/molecules";
import { Footer, Wrapper } from "@components/organisms";
import { PublicLayoutProps } from "types";

import "./style.scss";

export default function PublicLayout(props: PublicLayoutProps) {
  const { children } = props;
  return (
    <Wrapper id="public-component" className="public-content">
      <TopHeader />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}