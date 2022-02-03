import styled, { css } from 'styled-components'

export const ImpactContainerStyles = css`
    margin: 2rem 0;

    h2 {
        padding-top: 2rem;
        font-weight: 800;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 3rem 0;
        padding: 3rem 3rem 0;

        p {
            font-size: ${(props) => props.theme.textLarge};
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin: 4rem 0;
        padding: 5rem 5rem 0;
    }
`

export const ImpactContainer = styled.div`
    max-width: ${(props) => props.theme.screenXl};
    margin: 0 auto;
`
