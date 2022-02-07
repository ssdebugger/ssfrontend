import styled from 'styled-components'
import { Background } from '../desktop-nav/desktop-nav.style'

// Input styles
export const SearchCloseBtn = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 32px;
    min-height: 32px;
    padding: 0.25rem;
    border-radius: 100px;
    background: rgba(0, 0, 0, 0.3);
    opacity: 0;
    pointer-events: none;
    transition: ${(props) => props.theme.transition};
    cursor: pointer;

    svg {
        stroke: #fff !important;
    }
`

export const SearchInputWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    margin: 0 0 0 auto;
    background: ${(props) => props.theme.blueGray200};
    transition: ${(props) => props.theme.transition};

    position: absolute;
    top: 100%;
    left: 0;
    height: 50px;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        width: 300px;
        position: relative;
        height: 100%;
    }

    &:focus-within {
        ${SearchCloseBtn} {
            opacity: 1;
            pointer-events: all;
        }
    }
`
export const SearchInput = styled.input`
    padding: 0.5rem 0;
    width: 100%;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0;
    }
`

// Search Results
export const SearchResultsWrapper = styled.div`
    position: absolute;
    top: 110px;
    left: 0;

    display: flex;
    flex-direction: column;
    overflow: auto;

    padding: 3rem 1.25rem;
    width: 100%;
    height: calc(100vh - 114px);
    background: ${(props) => props.theme.cream100};
    z-index: 41;

    transform: scaleY(0);
    transition: transform 0.2s ease, opacity 0ms linear 0.2s,
        visibility 0ms linear 0.2s;
    transform-origin: top center;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex-direction: row;
        top: 100%;
        height: auto;
        max-height: 100vh;
        padding: 3rem 5rem;
    } ;
`

export const SearchSuggestionsContainer = styled.div`
    margin: 0 0 2rem;

    h4 {
        font-size: 1rem;
        font-weight: 500;
        color: ${(props) => props.theme.blueGray500};
    }
`
export const SearchSuggestions = styled.div`
    a {
        display: block;
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: ${(props) => props.theme.blueGray400};

        span {
            font: inherit;
        }
    }
`

export const HighlightSuggestion = styled.span`
    color: ${(props) => props.theme.blueGray900};
`

export const SearchResultContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-basis: 100%;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 2rem;

        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
    }
`

export const SearchResult = styled.div`
    width: calc(50% - 1rem);
    opacity: 1;
    transition-delay: 0s;
    tranform: translateY(-20px);
    transition: transform 0.1s, opacity 0.2s;
    margin: 0 2rem 2rem 0;

    &:nth-child(2n) {
        margin: 0;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: auto;
        margin: 0;
    }
`

export const SearchContainer = styled.div`
    flex: 1;
    margin-right: 0.5rem;
    z-index: 1;

    svg {
        stroke: ${(props) => props.theme.blueGray500};
    }

    input {
        border: 0;
        background: transparent;
        height: 100%;
        margin-left: 0.5rem;

        &::placeholder {
            color: ${(props) => props.theme.blueGray500};
        }
    }

    &:focus-within {
        ${Background} {
            opacity: 1;
            visibility: visible;
            pointer-events: all;
        }

        ${SearchInputWrapper} {
            width: 100%;
        }

        ${SearchResultsWrapper} {
            transition: transform 0.25s ease, opacity 0ms, visibility 0ms;
            visibility: visible;
            opacity: 1;
            transform: scaleY(1);
        }

        ${SearchResult} {
            opacity: 1;
            transition-delay: 2s;
            transform: translateY(0);
            transition: transform 0.3s ease, opacity 0.3s linear;
        }
    }
`
