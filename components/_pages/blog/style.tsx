import styled from 'styled-components'

export const BlogPageContainer = styled.main``

export const Section = styled.div`
    padding: 0 1.25rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 2rem;
    }
`

export const Container = styled.div`
    max-width: 1440px;
    margin: 4rem 0 2rem;
    padding: 1rem 0;

    h2 {
        font-weight: 800;
        font-size: 1.5rem;
        margin-bottom: 0.875rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 4rem auto;

        h2 {
            font-size: 2rem;
            font-weight: 800;
            margin-bottom: 1.25rem;
        }
    }
`

export const SaveIcon = styled.p`
    background-color: black;
    border-radius: 10%;
    position: absolute;
    right: 1%;
    top: 1%;
    padding: 0.5rem;
    display: none;
    color: white;
`

export const FeaturedHolder = styled.div`
    width: 100%;
    background: #0a1a16;
    height: 470px;
    padding: 1rem;
    overflow-y: none;
    overflow-x: scroll;
`

export const FeaturedImage = styled.img``

export const BlogImage = styled.img`
    width: 100%;
    height: 30vh;
    object-fit: fill;
    border-radius: 1rem;
`

export const BlogContainer = styled.div`
    position: relative;
    border: 1px solid #ccc;
    padding-bottom: 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
    width: 100%;
    box-shadow: 5px 10px #ccc;
    margin-top: 5%;
    height: 55vh;

    &: hover ${SaveIcon} {
        display: block;
    }
    &: hover ${BlogImage} {
        opacity: 0.6;
    }
    @media (max-width: 600px) {
        margin-top: 10%;
    }
`

export const BlogTitle = styled.p`
    font-weight: 600;
    font-size: 1.5rem;
    margin: 1rem;
`
