import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background: #14342c;
    padding: 1rem;
`

export const FooterWrapper = styled.div`
    p {
        margin-left: 0;
    }

    .gridItem {
        margin: 0 0 1rem;
        padding: 0 0 0.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 1rem 2rem;
        max-width: ${(props) => props.theme.screen2Xl};
        margin: 0 auto;
    }
`

export const SocialIconHolder = styled.div`
    margin: 0 0.25rem;

    &:first-child {
        margin-left: 0;
    }

    a {
        display: block;
        padding: 0.5rem;
        cursor: pointer;
    }
`

export const EmailInput = styled.input`
    background: transparent;
    color: #fff;
    padding-left: 1rem;
    height: 40px;
    border: 1px solid #fff;

    margin-top: 1rem;
    width: 80%;

    &::placeholder {
        color: #fff;
    }
`

export const RegButton = styled.button`
    background: #fbf8f6d9;
    width: 65%;
    height: 40px;
    margin-top: 1rem;
    color: #14342c;
`

export const AccrIcons = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 2rem;
    display: inline;
    @media screen and (min-width: 600px) {
        width: 60px;
        height: 60px;
        margin-right: 3rem;
    }
`

export const IconsHolder = styled.div`
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(2, 100px);
    grid-gap: 2rem 0.5rem;

    img {
        width: 70px;
        height: auto;
        aspect-ratio: 1/1;

        &:last-child {
            width: 100px;
            height: 55px;
        }
    }
`

export const Copyright = styled.div`
    margin: 1.5rem auto 1rem;
    padding: 1.5rem 0 0;

    p {
        font-size: 0.875rem;
        letter-spacing: 0.025rem;
        color: #fff;
        margin: 0;
    }
`
