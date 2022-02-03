import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

import {
    RatingContainer,
    ProductRatingContainer,
    OverallRating,
    PercentageRating,
    PercentContainer,
    PercentBar,
    LivePercent,
    PercentBarBg,
    RatingCircle,
} from './styles/product-rating'

export const ProductRating = () => {
    return (
        <RatingContainer>
            <ProductRatingContainer>
                <Heading4 margin="0 0 2rem">Product Rating</Heading4>

                <OverallRating>
                    <RatingContainer>
                        <RatingCircle>
                            <Heading4>4.9</Heading4>
                            <Paragraph>of 5</Paragraph>
                        </RatingCircle>

                        <PercentageRating>
                            <PercentContainer>
                                <Paragraph>5 start</Paragraph>
                                <PercentBar>
                                    <PercentBarBg />
                                    <LivePercent percentage={80} />
                                </PercentBar>
                                <Paragraph>90%</Paragraph>
                            </PercentContainer>

                            <PercentContainer>
                                <Paragraph>4 start</Paragraph>
                                <PercentBar>
                                    <PercentBarBg />
                                    <LivePercent percentage={15} />
                                </PercentBar>
                                <Paragraph>15%</Paragraph>
                            </PercentContainer>

                            <PercentContainer>
                                <Paragraph>3 start</Paragraph>
                                <PercentBar>
                                    <PercentBarBg />
                                    <LivePercent percentage={5} />
                                </PercentBar>
                                <Paragraph>5%</Paragraph>
                            </PercentContainer>

                            <PercentContainer>
                                <Paragraph>2 start</Paragraph>
                                <PercentBar>
                                    <PercentBarBg />
                                    <LivePercent percentage={0} />
                                </PercentBar>
                                <Paragraph>0%</Paragraph>
                            </PercentContainer>

                            <PercentContainer>
                                <Paragraph>1 start</Paragraph>
                                <PercentBar>
                                    <PercentBarBg />
                                    <LivePercent percentage={0} />
                                </PercentBar>
                                <Paragraph>0%</Paragraph>
                            </PercentContainer>
                        </PercentageRating>
                    </RatingContainer>
                </OverallRating>

                <Paragraph>Based on 40 customer ratings.</Paragraph>
            </ProductRatingContainer>
        </RatingContainer>
    )
}
