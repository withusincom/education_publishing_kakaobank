import styled from 'styled-components';

export interface ImageProps {
  width?: number;
  height?: number;
  src?: string;
}

const Image = styled.img.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'height', 'marginT', 'marginR', 'marginL'].includes(prop),
})<ImageProps>`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};
  src: ${({ src }) => src};
`;

export default Image;
