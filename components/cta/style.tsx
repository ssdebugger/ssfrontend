import { css } from 'styled-components'

const CommonStyles = css`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border-radius: 50px;
    transition: ${(props) => props.theme.transition};
    box-shadow: 0 4px 20px 0 rgba(1, 122, 94, 0.4);
    cursor: pointer;

    &:hover,
    &:focus {
        color: #fff;
        border-color: ${(props) => props.theme.primary};
        background: ${(props) => props.theme.primaryDark};
        box-shadow: 0 0 30px 0 rgba(41, 72, 47, 0.4),
            0 0 8px 0 rgba(41, 72, 47, 0.3);
    }
`

export const PrimaryCtaStyles = css`
    ${CommonStyles}
    background: ${(props) => props.theme.primary};
    color: #fff;
    border: 1px solid ${(props) => props.theme.primary};
`

export const SecondaryCtaStyles = css`
    ${CommonStyles}
    border: 1px solid ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
`

export const TeritaryCtaStyles = css`
    color: ${(props) => props.theme.textLight};
`
