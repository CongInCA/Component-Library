import React from "react";
import styled, { css } from "styled-components";

export type TableProps = {
  data: Array<{ [key: string]: string | number }>;
  headers: string[];
  disabled?: boolean;
};

const TableContainer = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.7;
    `}
`;

const Table: React.FC<TableProps> = ({ data, headers, disabled }) => {
  return (
    <TableContainer disabled={disabled}>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{row[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
export type { TableProps };
