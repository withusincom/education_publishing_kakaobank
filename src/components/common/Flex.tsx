import styled from 'styled-components'
import type React from 'react'

export interface IFlexProps {
    vertical?: boolean
    justify?: React.CSSProperties['justifyContent']
    align?: React.CSSProperties['alignItems']
    gap?: number
}

const Flex = styled.div.withConfig({
    shouldForwardProp: prop =>
        !['vertical', 'justify', 'align', 'gap'].includes(prop),
    })<IFlexProps>`
    display: flex;
    flex-direction: ${({vertical}) => (vertical ? 'column' : 'row')};
    justify-content: ${({justify}) => justify || 'flex-start'};
    align-items: ${({align}) => align || 'stretch'};
    gap: ${({gap}) => `${gap || 0}px`};
`

export default Flex