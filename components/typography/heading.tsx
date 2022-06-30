import styled, { css } from 'styled-components'

interface CommonProps {
    color?: string
    textAlign?: string
    margin?: string
    fontSize?: string
    fontWeight?: number
}

const CommonStyles = css<CommonProps>`
    line-height: 1.35;
    color: ${(props) => props.color && props.color};

    text-align: ${(props) => props.textAlign && props.textAlign};
    margin: ${(props) => (props.margin ? props.margin : '0 0 1.2rem')};
    font-weight: ${(props) => props.fontWeight && props.fontWeight};
    font-size: ${(props) => props.fontSize && props.fontSize};
`

// Old heading code
// -------------------------
// Heading 1
export const MainHeading = styled.h1<CommonProps>`
    ${CommonStyles}

    font-size: ${(props) =>
        props.fontSize ? props.fontSize : props.theme.heading2};
    margin: ${(props) => (props.margin ? props.margin : '0 0 1.25rem')};

    font-weight: ${(props) => props.fontWeight && props.fontWeight};
    text-transform:capitalize;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        font-size: ${(props) =>
            props.fontSize ? props.fontSize : props.theme.heading1};
    }
`

// Heading 2
export const SubHeading = styled.h2<CommonProps>`
    font-size: ${(props) =>
        props.fontSize ? props.fontSize : props.theme.heading3};
    ${CommonStyles}

    @media (min-width: ${(props) => props.theme.screenMd}) {
        font-size: ${(props) =>
            props.fontSize ? props.fontSize : props.theme.heading2};
    }
`

// Heading 3
export const Heading3 = styled.h3<CommonProps>`
    text-transform:capitalize;
    font-size:  ${(props) =>
        props.fontSize ? props.fontSize : props.theme.heading3};
    ${CommonStyles}
`

// Heading 4
export const Heading4 = styled.h4<CommonProps>`
    font-size: ${(props) => props.theme.heading4};
    ${CommonStyles}
`
