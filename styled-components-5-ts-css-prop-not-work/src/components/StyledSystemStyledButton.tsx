import React, { FC } from "react";
import styled, { css } from "styled-components";
import { color } from 'styled-system'


interface ButtonProps{
  size?:string;
  color?:string;
}

export const StyledSystemStyledButton = styled.button<ButtonProps>`
  background:  mediumseagreen;
  /* color: ${props => props.color||'yellow'}; */
  border: none;
  border-radius: 3px;
  padding: 10px 30px;
  ${color}
  ${props => props.size==='lg' && css`padding: 15px 40px`}
  ${props => props.size==='sm' && css`padding: 5px 20px`}
`;
