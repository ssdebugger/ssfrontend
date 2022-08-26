import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: ${(props) => (props.color ? props.color : 'white')};
    min-width: 30%;
    margin: 0.5rem 1.5%;
    padding: 1rem 1rem;
    @media (max-width: 1000px) {
        min-width: 100%;
    }
    
`

export const TestimonialContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap ;
    overflow:hidden;
    @media (max-width: 500px) {
        overflow:scroll;
    }
`
export const UserText = styled.p`
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
`

export const TestimonialHolder = styled.div`
    background: ${(props) => (props.color ? props.color : 'white')};
    padding: 1rem 1rem;
    text-align: center;

`

export const TestimonialTextHolder = styled.div`
    min-height: 200px;
`
export const TestimonialText = styled.p`
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 2rem;
    word-spacing: 1px;
    color: ${(props) => (props.color ? props.color : 'black')};
`

export const TestimonialQuoteHolder = styled.span``
export const TestimonialQuote = styled.img`
    width: 50px;
    filter: ${(props) =>
        props.color
            ? 'invert(5%) sepia(2%) saturate(108%) hue-rotate(254deg) brightness(119%) contrast(90%)'
            : 'invert(56%) sepia(7%) saturate(3185%) hue-rotate(113deg) brightness(107%) contrast(110%);'};
`
