import styled from 'styled-components'

// Container Styles
export const Container = styled.div`
    margin: 0 1rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenXl}) {
        margin: 0 113px;
    }
`

// Main Styles
export const Main = styled.main`
    position: relative;
    margin: 1rem auto 2rem;
    padding: 2rem 0;

    h2 {
        padding: 0 0 1rem;
    }
`

export const SearchAndFilterContaienr = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-right: -1rem;
    border: 1px solid #d4d4d4;
    margin-bottom: 1.5rem;
    position: sticky;
    top: 0;
    background: #fff;
    transition: ${(props) => props.theme.transition};
    box-shadow: 0px 0px 6px transparent;
    z-index: 50;

    &:focus-within {
        box-shadow: 0px 0px 6px rgba(0, 114, 87, 0.4);
        border-color: rgba(0, 114, 87, 0.7);
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 auto 1.5rem;
        width: 100%;
    }
`

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    flex: 1;
`
export const SearchBar = styled.input`
    border: none;
    padding: 1rem 10px;
    width: 100%;
`

export const FilterButton = styled.button`
    display: flex;
    padding: 1rem 1.125rem;
    border-left: 1px solid #d4d4d4;

    svg {
        margin-right: 0.75rem;
    }
`

export const OrderOptionsContainer = styled.div`
    width: calc(100% + 2rem);
    overflow: hidden;
    margin: 0 -1rem 3rem;
`

export const OrderOptions = styled.div`
    display: flex;
    overflow: auto;
    padding-bottom: 1rem;
`

export const OrderOption = styled.button`
    color: ${(props) => props.theme.primary};
    background: rgba(42, 172, 114, 0.2);
    padding: 0.75rem 1.125rem;
    border-radius: 4px;
    margin: 0 2rem 0 1rem;
    min-width: max-content;

    &.selected {
        color: #fff;
        background: ${(props) => props.theme.primaryShade1};
    }
`
