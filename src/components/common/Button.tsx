import type React from 'react';
import styled from 'styled-components';

export interface ButtonProps {
  width?: number;
  height?: number;
  color?: React.CSSProperties['color'];
  radius?: number;
  gap?: number;
}

const Button = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'height', 'color', 'radius'].includes(prop),
})<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: ${({ width }) => `${width || 0}px`};
  height: ${({ height }) => `${height || 0}px`};
  background-color: ${({ color }) => `${color || '#f6f6f6'}`};
  border-radius: ${({ radius }) => `${radius || 10}px`};
  gap: ${({ gap }) => `${gap || 0}px`};
`;

export default Button;
