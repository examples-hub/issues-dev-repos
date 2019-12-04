import React from "react";
import { HelloButton } from "./components/HelloButton";
import { StyledButton2 } from "./components/StyledButton";
import { StyledSystemStyledButton } from "./components/StyledSystemStyledButton";
import { CSSPropButton } from "./components/CSSPropButton";

export const App = () => (
  <div>

    <h2> 4. button using styled-comp css prop</h2>
    <CSSPropButton size={"sm"} color={'red'}>点我Click</CSSPropButton>

    <h2> 3. button using styled-system</h2>
    <StyledSystemStyledButton size={"lg"} color={'cyan'}>点我Click</StyledSystemStyledButton>

    <h2> 2. button using styled-components styled</h2>
    <StyledButton2 size={"lg"} color={'white'}>点我Click</StyledButton2>

    <h2> 1. button using button tag </h2>
    <HelloButton size={"lg"}>点我Click</HelloButton>
  </div>
);
