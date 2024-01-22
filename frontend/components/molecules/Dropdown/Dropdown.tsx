"use client"

import { useState } from "react";
import { TextFormatter } from "@components/atoms/TextFormatter/TextFormatter";
import { Wrapper } from "@components/organisms/Wrapper/Wrapper";
import { IconChevronDown } from "@tabler/icons-react";
import { DropdownProps } from "./types";
import "./Dropdown.scss";
import { Button } from "@components/atoms";

export function Dropdown(props: DropdownProps) {
  const { id, title, items } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownTitle, setDropDownTitle] = useState(title);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper id={id} className={`dropdown ${isOpen ? 'open' : ''}`}>
      <Button className="dropdown-header" appearance="transparent" onClick={toggleDropdown} type="button">
        <TextFormatter>{dropdownTitle}</TextFormatter>
        <IconChevronDown className="dropdown-icon" />
      </Button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item, index) => (
            <li key={index}>
              <Button appearance="transparent" onClick={() => { setDropDownTitle(item), setIsOpen(!isOpen) }} type="button">
                {item}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  )
}