import styled from 'styled-components'

export const OfferBannerContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.25rem;
    background: ${(props) => props.theme.primaryDarkTint1};
    color: #fff;
    margin-top: 2rem;
    margin-bottom: 2rem;

    @media (min-width: ${(props) => props.theme.screenSm}) {
        height: 200px;
        flex-direction: row;
        max-width: ${(props) => props.theme.screenLg};
        margin: 2rem auto;
    }
`

export const IllustraionContainer = styled.div`
    width: 100%;
    margin: 0 auto 1.5rem;

    @media (min-width: ${(props) => props.theme.screenSm}) {
        width: max-content;
        margin: 0;
        height: 100%;
        min-width: 280px;
    }
`

export const Illustration = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;

    @media (min-width: ${(props) => props.theme.screenSm}) {
        height: 100%;
        margin: 0 auto;
    }
`

export const ContentContainer = styled.div`
    @media (min-width: ${(props) => props.theme.screenSm}) {
        padding: 0 3rem;
    }
`

export const BrandContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.25rem;
`

export const Thumbnail = styled.img``

export const HighlightText = styled.span`
    font-weight: 500;
`
