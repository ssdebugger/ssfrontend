import styled from 'styled-components'
import { Star } from 'react-feather'

import { CustomerReviewProps } from '@/components/_pages/product/customer-review'

import { Heading4 } from '../typography/heading'
import { Paragraph } from '../typography/paragraph'

export const CustomerReview: React.FC<CustomerReviewProps> = ({
    username,
    postedOn,
    reviewTitle,
    images,
    description,
    rating,
}) => {
    const ReviewContainer = styled.div`
        margin: 0 0 2rem;
        padding: 0 0 1rem;
        h4 {
            font-size: ${(props) => props.theme.textLarge};
            margin: 0 0 0.5rem;
        }
    `

    const RatingContainer = styled.div`
        display: flex;
        align-items: center;
        margin: 0 0 1rem;

        p {
            color: ${(props) => props.theme.blueGray400};
        }
    `

    const Rating = styled.div`
        svg {
            width: 16px;
            height: 16px;
            margin: 0 0.25rem 0 0;
        }
    `

    const Image = styled.img`
        margin: 0 2rem 0 0;
        max-width: 235px;
        height: auto;

        &:last-child {
            margin: 0;
        }
    `

    const ImagesContainer = styled.div`
        margin: 0 0 1rem;
        width: 100%;
        overflow-x: auto;
        display: flex;
        align-items: center;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            display: none;
        }
    `
    console.log(reviewTitle, username, postedOn, 'customer card')
    return (
        <ReviewContainer>
            {/* <Heading4>{reviewTitle}</Heading4> */}
            <RatingContainer>
                <Rating>
                    {[...Array(Number(rating))].map((e,i) => <Star key={i} fill="#000"/>)} 
                    {[...Array(Number(5-Number(rating)))].map((e,i) => <Star />)} 
                </Rating>
                <Paragraph margin="0 0 0 1rem">
                    {username} - {postedOn}
                </Paragraph>
            </RatingContainer>

            {images?.length > 0 && (
                <ImagesContainer>
                    {images?.map((link) => (
                        <Image alt="eco products" key={link} src={link} />
                    ))}
                </ImagesContainer>
            )}
            <Paragraph>{description}</Paragraph>
        </ReviewContainer>
    )
}
