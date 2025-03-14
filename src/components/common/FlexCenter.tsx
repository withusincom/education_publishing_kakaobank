import type React from 'react'
import styled from 'styled-components';
import Flex from './Flex';

export interface IFlexCenterProps extends React.ComponentProps<typeof Flex> {
  center?: boolean
  centerX?: boolean
  centerY?: boolean
}

const FlexCenter = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['vertical', 'justify', 'align', 'gap', 'center', 'centerX', 'centerY'].includes(prop),
})<IFlexCenterProps>`
  display: flex;
  justify-content: ${({ center, centerX, justify }) =>
    center || centerX ? 'center' : justify || 'flex-start'};
  align-items: ${({ center, centerY, align }) =>
    center || centerY ? 'center' : align || 'stretch'};
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
`;

export default FlexCenter