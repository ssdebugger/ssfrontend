import styled from 'styled-components'

export const MainContainer = styled.main`
    max-width: ${(props) => props.theme.screenLg};
    margin: 0 auto;

    h1 {
        font-family: ${(props) => props.theme.marcellus};
        font-size: ${(props) => props.theme.heading1};
        font-weight: 400;
        margin: 0 0 0.25rem;
    }

    h2,
    h3 {
        margin: 3rem 0 1rem;
        font-family: ${(props) => props.theme.primaryFont};
        font-weight: 400;
    }

    p,
    span,
    li {
        font-family: ${(props) => props.theme.secondaryFont};
        color: #000;
    }

    ol {
        margin: 1.5rem;
    }

    li {
        margin: 0 0 0.85rem 1.5rem;
    }

    ul {
        margin: 1.5rem 0;
        li::before {
            content: '—';
            margin-right: 0.75rem;
        }
    }
`

export const PageHeading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100px;
    margin: 0 auto;
    max-width: ${(props) => props.theme.screenXl};
    padding: 2rem 1rem 0;
`

export const MainContent = styled.div`
    padding: 1rem 0 2rem;

    h3 {
        font-weight: 500;
    }
`

export const Content = styled.div`
    margin: 0 auto;
    max-width: ${(props) => props.theme.screenXl};

    padding: 2rem 0;
`
