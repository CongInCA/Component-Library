import React from "react";
import styled, { css } from "styled-components";

export type ButtonProps = {
  label: string;
  primary?: boolean; // 新增 primary 属性
  backgroundColor?: string; // 新增 backgroundColor 属性
  size?: "small" | "medium" | "large"; // 新增 size 属性
  disabled?: boolean;
  onClick?: () => void;
};

const ButtonContainer = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  ${(props) =>
    props.primary &&
    css`
      background-color: ${props.backgroundColor || "#007bff"};
      color: #ffffff;
    `}

  ${(props) =>
    props.size === "small" &&
    css`
      padding: 5px 10px;
      font-size: 14px;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      padding: 15px 30px;
      font-size: 18px;
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: #dddddd;
      color: #888888;
      cursor: not-allowed;
    `}
`;

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <ButtonContainer {...props}>{label}</ButtonContainer>;
};

export default Button;
