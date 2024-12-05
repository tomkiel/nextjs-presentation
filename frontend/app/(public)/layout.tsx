import { Main } from "@components/atoms";
import { TopHeader } from "@components/molecules";
import { Footer } from "@components/organisms";
import { PublicLayoutProps } from "types";

import "./style.scss";
import { Header } from "core/components";

export default function PublicLayout(props: PublicLayoutProps) {
  const { children } = props;
  return (
    <div id="public-component" className="public-content">
      <TopHeader />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}