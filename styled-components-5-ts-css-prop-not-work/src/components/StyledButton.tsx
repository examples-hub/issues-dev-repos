import React, { FC } from "react";
import styled, { css } from "styled-components";


interface ButtonProps{
  size?:string;
  color?:string;
}

export const StyledButton2 = styled.button<ButtonProps>`
  background:  mediumseagreen;
  color: ${props => props.color||'grey'};
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  ${props => props.size==='lg' && css`padding: 15px 40px`}
  ${props => props.size==='sm' && css`padding: 5px 20px`}
`;
