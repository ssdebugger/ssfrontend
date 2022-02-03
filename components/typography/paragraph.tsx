import styled from 'styled-components'

interface ParagraphProps {
    fontSize?: 'small' | 'base' | 'medium'
    color?: string
    textAlign?: string
    maxWidth?: string
    margin?: string
    padding?: string
}

export const Paragraph = styled.p<ParagraphProps>`
    line-height: 1.7;

    text-align: ${(props) => props.textAlign && props.textAlign};
    color: ${(props) => (props.color ? props.color : props.theme.textLight)};

    max-width: ${(props) => props.maxWidth && props.maxWidth};
    margin: ${(props) => (props.margin ? props.margin : '0 0 1.25rem')};

    padding: ${(props) => props.padding && props.padding};

    font-size: ${(props) =>
        props.fontSize == 'small'
            ? props.theme.small
            : props.fontSize === 'medium'
            ? props.theme.medium
            : props.theme.base};
`
