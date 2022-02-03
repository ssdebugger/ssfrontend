import styled from 'styled-components'

export const ProductRatingContainer = styled.div`
    margin: 1.5rem 0;
    p {
        margin: 1.25rem 0 0;
        text-align: center;
        color: ${(props) => props.theme.blueGray500};
    }
`
export const OverallRating = styled.div``

export const RatingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`

export const RatingCircle = styled.div`
    width: 130px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${(props) => props.theme.green400};
    margin: 0 2rem 0 0;
    color: #fff;

    h4 {
        margin: 0 0 0.25rem;
        font-size: ${(props) => props.theme.heading2};
    }

    p {
        margin: 0;
        color: inherit;
    }
`

export const PercentageRating = styled.div``

export const PercentContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0.5rem;

    p {
        margin: 0;
        color: ${(props) => props.theme.blueGray900};
    }
`
export const PercentBar = styled.div`
    position: relative;
    min-width: 80px;
    height: 4px;
    margin: 0 0.75rem;
`
export const PercentBarBg = styled.span`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    background: ${(props) => props.theme.blueGray300};
`

export const LivePercent = styled.span<{ percentage: number }>`
    position: absolute;
    width: ${(props) => props.percentage + '%'};
    height: 100%;
    border-radius: 6px;
    background: ${(props) => props.theme.green400};
`
