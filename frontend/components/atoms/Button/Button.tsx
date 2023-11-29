import React from "react";
import { ButtonProps } from "./types";
import "./Button.scss";

export function Button(props: ButtonProps) {
  const { id, onClick, type, appearance, className, disabled, children } = props;

  return (
    <button
      id={id}
      onClick={onClick}
      type={type}
      className={`${appearance} ${className}`}
      disabled={disabled}>
      {children}
    </button>
  )
}
