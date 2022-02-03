import styled from 'styled-components'

export const QueriesContainer = styled.div`
    display: flex;
    position: relative;
`

export const QueryHeadingsContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: none;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: block;
        flex-basis: 35%;
        padding: 2rem 0;
        height: max-content;
    }
`

export const QueryLinks = styled.div`
    padding: 0 0 1rem;

    a:hover {
        color: ${(props) => props.theme.cream500};
    }
`

export const QueryLink = styled.span<{ activeLink; currentLink }>`
    cursor: pointer;

    position: relative;

    &::after {
        opacity: ${(props) =>
            props.activeLink === props.currentLink ? 1 : '0'};
        content: '';
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -3px;
        left: 0;
        background: ${(props) => props.theme.cream500};
        transition: ${(props) => props.theme.transition};
    }
`

export const QueryContent = styled.div`
    max-width: 400px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 65%;
        padding: 2rem 0;
    }
`

export const QueryContainer = styled.div`
    margin: 0 0 2rem;

    h3 {
        font-family: ${(props) => props.theme.serif};
        font-weight: 500;
        font-size: ${(props) => props.theme.heading4};
    }
`
