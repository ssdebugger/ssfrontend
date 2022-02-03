import styled from 'styled-components'

export const MobileNavContainer = styled.div<{ showNav: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 15;
    background: #fff;
    width: 100%;
    height: 100vh;
    padding: 1.5rem 1.75rem 5rem;
    overflow-y: auto;
    transform: ${(props) =>
        props.showNav ? 'translateX(0)' : 'translateX(100%)'};
    transition: ${(props) => props.theme.transition};
    @media (min-width: ${(props) => props.theme.screenLg}) {
        display: none;
    }
`
export const NavCloseBtn = styled.div`
    text-align: right;
`

export const LinksContainer = styled.ul`
    margin: 1.25rem 0;
`

export const NavLink = styled.li<{ readonly profileLink?: boolean }>`
    margin: ${(props) => props.profileLink && ' 0 0 1.25rem'};
    font-weight: ${(props) => props.profileLink && '500'};
`

export const NavLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;

    span {
        font-size: 1.5rem;
        color: #000;
        text-transform: capitalize;
    }

    svg {
        stroke: ${(props) => props.theme.blueGray700};
        stroke-width: 1.5;
    }
`

export const JoinUsSection = styled.div`
    p {
        font-size: 1.125rem;
        line-height: 1.4;
        padding: 1.5rem 0 0.5rem;
        color: ${(props) => props.theme.blueGray500};
    }
`

export const JoinUsLinks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5rem;

    a {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        height: 44px;

        max-width: 140px;

        &:first-child {
            background: ${(props) => props.theme.green500};
            color: #fff;
        }

        &:last-child {
            border: 1px solid ${(props) => props.theme.green300};
        }
    }
`

export const LogoutBtn = styled.button`
    display: flex;
    align-items: center;
    margin-top: 3rem;

    span {
        margin-left: 1rem;
        font-size: 1.5rem;
    }
`
