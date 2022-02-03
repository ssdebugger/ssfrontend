import styled from 'styled-components'

export const Container = styled.div`
    padding: 2rem 1rem;

    @media (min-width: 768px) {
        padding: 2.5rem 2rem;
    }

    @media (min-width: 1024px) {
        padding: 2.5rem 5%;
    }
`

const Paragraph = styled.p`
    margin-bottom: 2.5rem;
    color: #414e48;

    @media (min-width: 768px) {
        font-size: 1.125rem;
    }
`

const BlockHeadingStyles = styled.h2`
    font-size: 2rem;
    color: #00160d;
    line-height: 135%;

    @media (min-width: 768px) {
        font-size: 2.5rem;
        line-height: 130%;
    }

    @media (min-width: 1200px) {
        font-size: 2.8rem;
    }
`

export const BrandPageContainer = styled.div``

/**
 * Styles For to Billboard Block
 */

export const Billboard = styled(Container)`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 70vh;
        padding-bottom: 0;
        overflow: hidden;
    }
`
export const BillboardContent = styled.div`
    margin-bottom: 2rem;
    max-width: 624px;

    @media (min-width: 768px) {
        width: 54%;
    }
`

export const BillboardHeading = styled(BlockHeadingStyles)`
    font-size: 2.25rem;
    margin-bottom: 1.125rem;

    @media (min-width: 768px) {
        font-size: 2.65rem;
        margin-bottom: 1.25rem;
    }

    @media (min-width: 1200px) {
        font-size: 3.125rem;
    }
`

export const BillboardDesc = styled(Paragraph)`
    max-width: 500px;
`

export const BillboardCta = styled.a`
    display: inline-block;
    background: rgba(1, 122, 94, 1);
    padding: 0.75rem 1.5rem;
    height: 45px;
    color: #fff;
    border-radius: 50px;
    transition: 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 20px 0 rgba(1, 122, 94, 0.4);
    cursor: pointer;

    &:hover,
    &:focus {
        background: #1a2f26;
        box-shadow: 0 0 30px 0 rgba(41, 72, 47, 0.4),
            0 0 8px 0 rgba(41, 72, 47, 0.3);
    }
`

export const BillboardImg = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    max-width: 600px;
    max-height: 500px;
    display: block;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 45%;
    }
`
/**
 * Styles For to About brand Block
 */

export const AboutBrandContainer = styled(Container)`
    display: flex;
    flex-direction: column-reverse;
    background: #faf8ef;

    @media (min-width: 1024px) {
        flex-direction: row;
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
`

export const AboutBrandContent = styled.div`
    @media (min-width: 1024px) {
        width: 50%;
        padding: 0 3rem 0 0;
    }
`
export const AboutBrandHeading = styled(BlockHeadingStyles)`
    margin: 1.5rem 0;
    color: #019875;
`
export const AboutBrandDesc = styled(Paragraph)`
    margin-bottom: 1.5rem;
`

export const BrandImage = styled.img`
    display: block;
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1.5rem;

    @media (min-width: 1024px) {
        max-width: 600px;
        width: 50%;
        padding: 0 1rem;
        margin-left: auto;
    }
`

/**
 * Styles For to Features Block
 */

export const FeatureBlock = styled(Container)`
    @media (min-width: 1024px) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`

export const BlockHeading = styled(BlockHeadingStyles)`
    text-align: center;
    margin-bottom: 0.875rem;
    color: #019875;
`

export const BlockDesc = styled(Paragraph)`
    text-align: center;
    max-width: 400px;
    margin: 0 auto 2.5rem;
    padding-bottom: 1rem;

    @media (min-width: 768px) {
        padding-bottom: 2rem;
    }
`

export const FeaturesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

export const Feature = styled.div`
    max-width: 300px;
    padding: 2.5rem 1rem;
    margin: 0 1rem 2rem 0;
    border-radius: 0.875rem;
    background: rgba(0, 27, 16, 0.9);
    color: #fff;
    box-shadow: 0 4px 20px 0 rgba(0, 27, 16, 0.5);
    cursor: pointer;
    transition: 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    &:hover,
    &:focus {
        background: #1a2f26;
        box-shadow: 0 0 30px 0 rgba(41, 72, 47, 0.4),
            0 0 8px 0 rgba(41, 72, 47, 0.3);
        transform: translateY(-10px);
    }

    @media (max-width: 1100px) {
        max-width: 280px;
    }
`

export const FeatureIcon = styled.div`
    width: 6rem;
    height: 6rem;

    margin: 0 auto 1.5rem;

    * {
        width: 100%;
        height: 100%;
    }
`

export const FeatureContent = styled.div``

export const FeatureHeading = styled.h3`
    text-align: center;
    font-size: 1.35rem;
    margin-bottom: 1.8rem;
`

export const FeatureDesc = styled(Paragraph)`
    text-align: center;
    color: #ccd1cf;
    font-size: 1.25rem;
    text-transform: lowercase;
`
