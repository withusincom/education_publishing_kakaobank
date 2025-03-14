import type React from 'react';
import styled from 'styled-components';

export interface TextProps {
  bold?: number;
  color?: React.CSSProperties['color'];
  size?: number;
  height?: number;
  align?: string;
}

const Text = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['bold', 'size', 'color', 'height', 'align'].includes(prop),
})<TextProps>`
  font-weight: ${({ bold }) => `${bold}`};
  font-size: ${({ size }) => `${size}px`};
  color: ${({ color }) => `${color}`};
  line-height: ${({ height }) => `${height}`};
  text-align: ${({ align }) => align};
`;

export default Text;
