import styled from 'styled-components'

export const Container = styled.div<{ maxWidth?: string }>`
    max-width: 1600px;
    margin: 0 auto;
    margin-top: 70px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin-top: 0;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 2rem;
    }
`
