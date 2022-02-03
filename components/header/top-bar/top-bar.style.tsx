import styled from 'styled-components'

export const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background: #fbf5f1;
    padding: 0.5rem 1.125rem;
    position: relative;
    z-index: 2;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 5rem;
    }
`

export const TopBarOffer = styled.div`
    flex: 1;

    h4 {
        display: inline-block;
        font-size: 0.875rem;
        margin: 0 0.5rem 0 0;
        font-weight: 500;
    }

    p {
        display: inline-block;
        font-size: 0.875rem;
        margin: 0;
        color: ${(props) => props.theme.blueGray900};
    }
`

export const TopBarLinksContainer = styled.div`
    display: none;
    align-items: center;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: flex;
    }
`

export const TopBarLink = styled.div`
    display: flex;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0.25rem;
        font-size: 0.875rem;
    }

    svg {
        margin-right: 0.5rem;
    }
`

export const TopBarLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 0.25rem;

    > span {
        display: block;
        font-size: inherit;
        margin-left: 0.5rem;
        margin: 0 0.25rem;
    }

    &:last-child {
        > span {
            display: none;
        }
    }
`
