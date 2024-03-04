import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};
`;

const Label: React.FC<LabelProps> = ({ text, color, fontSize }) => {
  return (
    <StyledLabel color={color} fontSize={fontSize}>
      {text}
    </StyledLabel>
  );
};

export default Label;
