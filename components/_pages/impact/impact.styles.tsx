import styled from 'styled-components'

export const Main = styled.main`
    position: relative;
    display: flex;
`

export const FixedCol = styled.div`
    position: sticky;
    top: 0;
    height: 100vh;
    flex: 0 0 50%;
    padding: 3rem 5rem;
    background: ${(props) => props.theme.cream100};

    display: none;
    visibility: hidden;

    h2 {
        font-size: 3.5rem;
        font-weight: 800;
        line-height: 1.3;
        letter-spacing: -0.022;
    }

    p {
        letter-spacing: 0.2rem;
        font-weight: 500;
        margin-bottom: 1.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        visibility: visible;
    } ;
`

export const ScrollableCol = styled.div`
    padding: 2rem 1.25rem;
    overflow: hidden;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex: 0 0 50%;
        padding: 3rem 4rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 5rem;
    }
`
export const ImgContainer = styled.div`
    position: relative;
    margin: 2rem -1.25rem;
    height: max-content;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 -4rem 0 -3rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin: 0 -8rem 0 -7rem;
    }
`
export const HeaderImg = styled.img`
    width: 100%;
    height: 60vh;
    aspect-raito: 2/3;
    object-fit: cover;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        height: auto;
        aspect-raito: 16/9;
    }
`

export const HeaderImgContent = styled.div`
    position: absolute;
    bottom: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background: linear-gradient(180deg, transparent, #000000be 100%);
    color: #fff;
    padding: 0 1.25rem 2rem;

    p {
        color: inherit;
        letter-spacing: 0.2rem;
        margin-bottom: 0.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: none;
        visibility: hidden;
    }
`

export const ContentSection = styled.div`
    margin: 2rem 0;
    padding: 0.5rem 0;

    h3 {
        font-size: 1.5rem;
        font-weight: 800;
        margin-bottom: 1.25rem;
    }

    p {
        color: ${(props) => props.theme.blueGray900};
    }

    iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        margin: 1rem 0 1.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 3rem 0;
        padding: 1rem 0;

        h3 {
            font-size: 1.8rem;
        }
    }
`

export const BulletPointsContainer = styled.ul`
    margin: 2.5rem 0 0;
`

export const BulletPoint = styled.li`
    margin-bottom: 2rem;

    h4 {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
    }

    p {
        max-width: 500px;
    }
`
