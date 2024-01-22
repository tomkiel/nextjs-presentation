import { Anchor } from "@components/atoms/Anchor/Anchor";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { Wrapper } from "@components/organisms/Wrapper/Wrapper";
import { IconMail, IconWorld } from "@tabler/icons-react";
import { Dropdown } from "../Dropdown/Dropdown";

import "./TopHeader.scss";

export function TopHeader() {
  const currencyOptions: String[] = ["USD $", "CAD $", "BRL R$"];
  const localeOptions: String[] = ["English", "Portugues", "Français"]
  return (
    <Wrapper id="top-header" className="top-header">
      <Wrapper className="top-header-left">
        <Anchor href="/" className="link">
          <IconMail />
          <TextFormatter>
            Support
          </TextFormatter>
        </Anchor>
        <Anchor href="/" className="link">
          <IconWorld />
          <TextFormatter>
            Store Location
          </TextFormatter>
        </Anchor>
      </Wrapper>
      <Wrapper className="top-header-center">
        <TextFormatter>
          Sale Up To 15% OFF
        </TextFormatter>
        -
        <Anchor href="" className="link">Shop Now</Anchor>
      </Wrapper>
      <Wrapper className="top-header-right">
        <Dropdown title="USD $" items={currencyOptions} />
        <Dropdown title="English" items={localeOptions} />
      </Wrapper>
    </Wrapper>
  );
}