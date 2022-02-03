import { SectionHeading, GridContainer, GridItem } from '../homepage/style'
import { Typography } from './index.style'
import { Paragraph } from '../../typography/paragraph'
import {
    MainHeading,
    SubHeading,
    Heading3,
    Heading4,
} from '../../typography/heading'
import { Container } from '../../container/regular'
import Rating from './rating'
import Reviewimage from './reviewimage'

const Review = () => {
    return (
        <Container>
            <SubHeading margin="1rem 0 0 0">Reviews</SubHeading>
            <GridContainer>
                <GridItem sm={100} md={100} lg={100}>
                    <Rating />
                    <Paragraph style={{ fontWeight: 1000, margin: '0 0' }}>
                        Kids love them!!{' '}
                        <span style={{ fontWeight: 200, marginLeft: '20px' }}>
                            {' '}
                            &#183; Daniel James
                        </span>
                    </Paragraph>
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <Reviewimage />
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <Paragraph>
                        Bought these for a party and the kids absolutely loved
                        them
                    </Paragraph>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem sm={100} md={100} lg={100}>
                    <Rating />
                    <Paragraph style={{ fontWeight: 1000, margin: '0 0' }}>
                        Very elegantly designed and very easy to use!{' '}
                        <span style={{ fontWeight: 200, marginLeft: '20px' }}>
                            &#183; Thomas Tuchel
                        </span>
                    </Paragraph>
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <Paragraph>Best use as regular table ware</Paragraph>
                </GridItem>
            </GridContainer>
        </Container>
    )
}

export default Review
