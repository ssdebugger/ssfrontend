import styled from 'styled-components'

export const PostsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1.5rem;
    padding: 0.75rem 0;
    margin-bottom: 2rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
        padding: 2rem 0;
    }
`
