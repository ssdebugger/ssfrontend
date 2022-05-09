import styled from 'styled-components'

export const MobileNavContainer = styled.div<{ showNav: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 55;
    background: #fff;
    width: 100%;
    min-width: 100vw;
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

export const NavLinkContent = styled.div<{ selected?: boolean }>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;

    span {
        font-size: 1.5rem;
        color: #000;
        text-transform: capitalize;
        font-weight: ${(props) => props.selected && 600600};
    }

    svg {
        stroke: ${(props) => props.theme.blueGray700};
        stroke-width: 1.5;
    }
`

export const NavSublinks = styled.ul<{ show: boolean }>`
    transform-origin: top center;
    opacity: ${(props) => (props.show ? 1 : 0)};
    height: ${(props) => (props.show ? '370px' : '0px')};
    transform: ${(props) =>
        props.show ? 'translateY(0)' : 'translateY(-100px)'};
    pointer-events: ${(props) => (props.show ? 'all' : 'none')};
    transition: ${(props) =>
        props.show
            ? 'height 0.2s ease, transform 0.3s ease 0.15s, opacity 0.2s ease 0.25s'
            : 'height 0.2s ease, transform 0.3s ease 0.3s, opacity 0.2s ease'};
`
export const NavSublink = styled.li`
    &:first-child {
        padding: 0.5rem 0 0;
    }

    &:last-child {
        padding: 0 0 1rem;
    }

    a {
        padding: 0.5rem 0.25rem;
        display: block;
        font-size: 1.25rem;
        color: #000;
        text-transform: capitalize;
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
