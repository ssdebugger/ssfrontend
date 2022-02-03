import styled from 'styled-components'

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 250px;
    padding: 1.125rem;
    background: #f9fafb;

    h1 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`

export const AsideLinks = styled.ul`
    padding: 0.5rem 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const Link = styled.li<{ isActive?: boolean }>`
    margin: 0.25rem 0;
    border-radius: 0.25rem;
    transition: ${(props) => props.theme.transition};
    background: ${(props) => props.isActive && '#d1fae5 !important'};
    color: ${(props) => props.isActive && '#065f46'};
    font-weight: ${(props) => props.isActive && 500};

    &:hover {
        background: rgba(229, 231, 235, 0.8);
    }

    &:last-child {
        margin-top: auto;

        &:hover {
            background: #fee2e2;

            button {
                color: #b91c1c;
            }
        }
    }

    a,
    button {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.75rem;

        svg {
            width: 20px;
            height: 20px;
            stroke-width: 2;
            margin-right: 0.5rem;
        }
    }
`
