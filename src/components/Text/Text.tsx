import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  color: ${(props) => props.color || "black"};
  font-size: ${(props) => props.fontSize || "16px"};
`;

const Text: React.FC<TextProps> = ({ content, color, fontSize }) => {
  return (
    <StyledText color={color} fontSize={fontSize}>
      {content}
    </StyledText>
  );
};

export default Text;
