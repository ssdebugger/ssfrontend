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

export const CustomerReviews = () => {
    return (
        <CustomerReviewContainer>
            <Heading3>What our customers have to say</Heading3>

            <ReviewMain>
                <ColumnLeft>
                    <ProductRating />

                    <Keywords />
                </ColumnLeft>

                <ColumnRight>
                    <ReviewContainer>
                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />

                        <CustomerReview
                            rating={4}
                            username={'Baburao'}
                            postedOn="30th Feb 2020"
                            reviewTitle="Durable Product"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
							egestas est nunc suspendisse suspendisse sed pellentesque
							hendrerit. Velit, curabitur etiam nisi, semper sed sit eu. Diam
							velit"
                            images={[
                                'https://m.media-amazon.com/images/I/71RGAQutaJL._AC_UX385_.jpg',
                                'https://m.media-amazon.com/images/I/71Oud3Qg5XL._AC_UX385_.jpg',
                            ]}
                        />
                    </ReviewContainer>
                </ColumnRight>
            </ReviewMain>
        </CustomerReviewContainer>
    )
}
