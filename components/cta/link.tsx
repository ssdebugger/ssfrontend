import Link from 'next/link'
import styled from 'styled-components'
import {
    PrimaryCtaStyles,
    SecondaryCtaStyles,
    TeritaryCtaStyles,
} from './style'

interface StyleProps {
    linkType: 'primary' | 'secondary' | 'tertiary'
}

interface LinkProps {
    varient: StyleProps['linkType']
    href: string
    children: React.ReactChild
}

const StyledLink = styled.a<StyleProps>`
    ${(props) =>
        props.linkType === 'primary'
            ? PrimaryCtaStyles
            : props.linkType === 'secondary'
            ? SecondaryCtaStyles
            : TeritaryCtaStyles};
`

export const HyperLink: React.FC<LinkProps> = ({ varient, href, children }) => {
    return (
        <Link href={href} passHref>
            <StyledLink linkType={varient}>{children}</StyledLink>
        </Link>
    )
}
