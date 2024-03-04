import React from "react";
import styled, { css } from "styled-components";

export type ImgProps = {
  src: string;
  alt: string;
  disabled?: boolean;
};

const ImgContainer = styled.img<ImgProps>`
  width: 100%;
  max-width: 100%;
  height: auto;
  border: none;
  display: block;

  ${(props) =>
    props.disabled &&
    css`
      filter: grayscale(100%);
      cursor: not-allowed;
    `}
`;

const Img: React.FC<ImgProps> = ({ src, alt, disabled }) => {
  return <ImgContainer src={src} alt={alt} disabled={disabled} />;
};

export default Img;
