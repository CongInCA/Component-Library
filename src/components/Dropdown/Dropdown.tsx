import React, { useState } from "react";

interface DropdownProps {
  options: string[];
  disabled?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ options, disabled }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <select
      value={selectedOption || ""}
      onChange={(e) => handleSelect(e.target.value)}
      disabled={disabled}
    >
      {!disabled && (
        <option value="" disabled>
          Select an option
        </option>
      )}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
