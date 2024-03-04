import React from "react";
import styled, { css } from "styled-components";
import type { CardProps, CardContainerProps } from "./Card.types";

const CardContainer = styled.div<CardContainerProps>`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  width: 300px;

  ${(props) =>
    props.disabled &&
    css`
      background-color: #f0f0f0;
      color: #888888;
    `}
`;

const Card = ({ title, content, disabled }: CardProps) => {
  return (
    <CardContainer disabled={disabled}>
      <h2>{title}</h2>
      <p>{content}</p>
    </CardContainer>
  );
};

export default Card;
