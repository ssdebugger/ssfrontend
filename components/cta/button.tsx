import styled from 'styled-components'
import { PrimaryCtaStyles, SecondaryCtaStyles } from './style'

interface StyleProps {
    varient: 'primary' | 'secondary'
}

export const Button = styled.button<StyleProps>`
    ${(props) =>
        props.varient === 'primary' ? PrimaryCtaStyles : SecondaryCtaStyles}
`
