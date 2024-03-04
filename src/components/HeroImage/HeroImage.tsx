import React from "react";
import styled, { css } from "styled-components";

export type HeroImageProps = {
  src: string;
  alt: string;
  disabled?: boolean;
};

const HeroImageContainer = styled.img<HeroImageProps>`
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

const HeroImage: React.FC<HeroImageProps> = ({ src, alt, disabled }) => {
  return <HeroImageContainer src={src} alt={alt} disabled={disabled} />;
};

export default HeroImage;
