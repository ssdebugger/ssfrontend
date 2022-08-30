import { Heading3 } from '@/components/typography/heading'

import { CustomerReview } from '@/components/card/customer-review'
import { ProductRating } from './product-rating'
import { Keywords } from './keywords'

import {
    CustomerReviewContainer,
    ReviewMain,
    ReviewContainer,
    ColumnLeft,
    ColumnRight,
} from './styles'

export interface CustomerReviewProps {
    username: string
    postedOn: string
    reviewTitle: string
    rating: number
    images?: string[]
    description: string
}

export const CustomerReviews = ({ reviews }) => {
    console.log('reviews', reviews)
    return (
        <CustomerReviewContainer>
           <Heading3 style={{textAlign:'center'}}>What our customers have to say</Heading3>

            <ReviewMain>
                {/* <ColumnLeft>
                    <ProductRating />

                    <Keywords />
                </ColumnLeft> */}

                <ColumnRight>
                    <ReviewContainer>
                        {reviews.map((review,key) => (
                            <CustomerReview
                                rating={review['rating']['N']}
                                username={review['username']['S']}
                                postedOn={review['date']['S']}
                                reviewTitle="Durable Product"
                                description={review['review']['S']}
                                images={review['review_images']}
                                key={key}
                            />
                        ))}
                    </ReviewContainer>
                </ColumnRight>
            </ReviewMain>
        </CustomerReviewContainer>
    )
}
