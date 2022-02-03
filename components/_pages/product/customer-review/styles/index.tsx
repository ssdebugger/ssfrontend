import styled from 'styled-components'

export const CustomerReviewContainer = styled.div`
    margin: 2rem 0;
    padding: 2rem 0;

    h3 {
        font-family: ${(props) => props.theme.serif};
        font-weight: 500;
        margin: 0 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        h3 {
            font-size: ${(props) => props.theme.heading2};
        }
    }
`

export const ReviewMain = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
    }
`
export const ColumnLeft = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 30%;
        position: sticky;
        top: 0;
        left: 0;
        height: max-content;
    }
`
export const ColumnRight = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 70%;
        max-width: 800px;
        padding: 1.5rem 0 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 1.5rem 0 0 5rem;
    }
`

export const ReviewContainer = styled.div``
