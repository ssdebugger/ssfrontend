import styled from 'styled-components'

export const MainContainer = styled.main`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        height: calc(100vh - 60px);
        display: flex;
        overflow: hidden;
    }
`

export const ContentSection = styled.section`
    padding: 3rem 1.5rem 0;

    @media (max-width: ${(props) => props.theme.screenXs}) {
        padding: 3rem 1rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 45%;
        overflow-y: auto;
        margin-left: 5%;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-left: 2rem;
    }
`

export const DetailsContainer = styled.div`
    max-width: 260px;
    margin-bottom: 3.5rem;

    h3 {
        margin-bottom: 1rem;
    }

    @media (max-width: ${(props) => props.theme.screenXs}) {
        margin-bottom: 3rem;

        h3 {
            margin-bottom: 0.75rem;
        }
    }
`
export const Detail = styled.div<{ readonly bold?: boolean }>`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    color: ${(props) => (props.bold ? '#101010' : '#404040')};
    font-weight: ${(props) => props.bold && 600};
    font-size: 1.2rem;

    p {
        line-height: 155%;
        font: inherit;
    }

    @media (max-width: ${(props) => props.theme.screenXs}) {
        font-size: 1rem;
    }
`
export const DetailHeading = styled.div`
    flex-basis: 50%;
    font: inherit;
`
export const DetailsContent = styled.span`
    flex-basis: 50%;
    font: inherit;

    a {
        color: ${(props) => props.theme.linkColor};
        text-decoration: underline;
        cursor: pointer;
    }
`

export const ProductSection = styled.section`
    padding: 2rem 1.5rem;
    background: #f5f5f5;

    @media (max-width: ${(props) => props.theme.screenXs}) {
        padding: 2rem 1rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 55%;
        overflow-y: auto;
        padding-left: 5%;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
    }
`

export const OrderedProducts = styled.div`
    margin-bottom: 6rem;
`

export const ProductsList = styled.div`
    margin: 2rem 0;
`

export const Product = styled.div`
    display: flex;
    margin-bottom: 2.5rem;

    h4 {
        font-family: ${(props) => props.theme.secondaryFont} !important;
        font-size: ${(props) => props.theme.large};
        margin-bottom: 0.5rem;
    }
`

export const ProductImage = styled.img`
    width: 80px;
    height: 80px;
`

export const ProductItemDetails = styled.div`
    padding-left: 1.5rem;
    display: flex;
    flex-direction: column;
`

export const ProductValue = styled.span`
    color: #404040;
    margin-bottom: 1.125rem;
`
export const ProductButton = styled.button`
    background: #d39b75;
    color: #0e0e0e;
    width: 140px;
    padding: 0.35rem;
    border-radius: 6px;

    font-size: ${(props) => props.theme.small};
`

export const RecommendedFromUs = styled.div``

export const CancelOrderBtn = styled.button`
    background: #e11d48;
    color: #fff;
    width: 200px;
    height: 44px;
    border-radius: 4px;
    margin-bottom: 5rem;
    transition: ${(props) => props.theme.transition};

    &:hover {
        background: #be123cl;
    }
`
