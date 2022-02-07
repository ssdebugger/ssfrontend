import styled from 'styled-components'

export const HeaderContent = styled.div`
    z-index: 15;
    width: 100%;
    transition: opacity 0.2s ease, transform 0.3s ease;
    transform-origin: top;

    &.is-hidden {
        opacity: 0;
        transition: transform 0.2s ease-in-out, opacity 0.3s ease-in-out;
        pointer-events: none;
    }

    &.is-fixed {
        position: fixed;
        top: 0;
        left: 0;
        transition: transform: 0.2s ease, opacity 0.25s ease;
    }
`

export const HeaderContainer = styled.header`
    position: relative;
    background: #fff;
`
export const HeaderWrapper = styled.div`
    height: 60px;
    padding: 0 1.25rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.blueGray200};

    @media (min-width: ${(props) => props.theme.scrrenLg}) {
        padding: 0 5rem;
    }
`

// BrandIcon
export const BrandContainer = styled.div`
    a {
        display: flex;
        align-items: center;
    }

    h1 {
        font-size: 1rem;
        font-weight: 500;
        margin: 0 0 0 0.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        h1 {
            font-size: 1.25rem;
        }
    }
`
export const BrandIcon = styled.img`
    width: 2.5rem;
    height: 2.75rem;
`

export const BrandNameIcon =  styled.img`
    width:8rem;
    height:3rem;
`


// Nav
export const Nav = styled.nav`
    flex: 1;
    height: 100%;
    overflow-x: hidden;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin: 0 1.25rem;
    }
`

export const SearchAndButtonGroup = styled.div`
    display: flex;
    align-items: center;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        flex: 1;
        justify-content: flex-end;
    }
`

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
`

export const HeaderButton = styled.button<{ mobileOnly?: boolean }>`
    position: relative;
    padding: 1rem 0.75rem;
    margin: 0 0.25rem;

    &:last-child {
        margin-right: 0;
        padding-right: 0;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: ${(props) => props.mobileOnly && 'none'};
    }
`

export const QuantityIndicator = styled.span`
    position: absolute;
    top: 10px;
    right: 0;
    width: 20px;
    height: 20px;
    padding: 1px 0;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
    background: ${(props) => props.theme.green500};
`
