import React  from "react";
// import styled, { css } from "styled-components";
// import { css } from "styled-components";

interface ButtonProps {
  size?: string;
  color?: string;
  children?: any;
}

export const CSSPropButton = (props: ButtonProps) => (
  <button
    css={`
      background: mediumseagreen;
      color: ${props => {
        console.log(props)
        return props.color || "grey";
      }};
      border: none;
      border-radius: 3px;
      padding: 10px 30px;
    `}
  >
    {props.children}
  </button>
);

/* export const CSSPropButton = () => (
  <button
    css={`
      color: papayawhip;
      background: palevioletred;
    `}
  >
    Click me!
  </button>
) */
