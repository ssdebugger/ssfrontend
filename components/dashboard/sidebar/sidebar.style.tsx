import styled from 'styled-components'

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;

    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 220px;
    padding: 1.25rem 1rem;
    background: #f5f5f4;
    border-right: 1px solid #e7e5e4;
`

export const BrandIcon = styled.div`
    display: flex;
    align-items: center;
    margin: 0.75rem 0 1.5rem;

    img {
        width: 32px;
        height: 32px;
    }

    h1 {
        font-size: 1.25rem;
        font-weight: 500;
        margin: 0 0 0 0.5rem;
    }
`

export const AsideLinks = styled.ul`
    padding: 0.5rem 0;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const AsideLink = styled.li<{ isActive?: boolean }>`
    margin: 0.25rem 0;
    border-radius: 0.25rem;
    transition: 0.2s ease;
    background: ${(props) => props.isActive && '#d1fae5 !important'};
    color: ${(props) => props.isActive && '#065f46'};
    font-weight: ${(props) => props.isActive && 500};

    &:hover {
        background: #e7e5e4;
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
