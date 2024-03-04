import React from "react";
import styled, { css } from "styled-components";

export type RadioButtonProps = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
};

const RadioButtonContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.disabled &&
    css`
      color: #888888;
      cursor: not-allowed;
    `}
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}) => {
  const handleOnChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <RadioButtonContainer disabled={disabled}>
      <RadioInput
        type="radio"
        checked={checked}
        onChange={handleOnChange}
        disabled={disabled}
      />
      {label}
    </RadioButtonContainer>
  );
};

export default RadioButton;
