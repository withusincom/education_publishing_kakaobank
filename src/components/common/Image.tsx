import styled from 'styled-components';

export interface ImageProps {
  width?: number;
  height?: number;
  marginT?: number;
  marginR?: number;
  marginL?: number;
  src?: string;
}

const Image = styled.img.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'height', 'marginT', 'marginR', 'marginL'].includes(prop),
})<ImageProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};
  margin-top: ${({ marginT }) => `${marginT || 0}px`};
  margin-right: ${({ marginR }) => `${marginR || 0}px`};
  margin-left: ${({ marginL }) => `${marginL || 0}px`};
  src: ${({ src }) => src};
`;

export default Image;
