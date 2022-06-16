import { GridContainer, GridItem } from '../homepage/style'

import { Paragraph } from '../../typography/paragraph'
import {
    SubHeading,
    Heading4,
} from '../../typography/heading'
import { Container } from '../../container/regular'

const Description = () => {
    return (
        <Container>
            <SubHeading>Product Info</SubHeading>
            <Paragraph>
                Individually Composed High Quality Compostable Golves.
                Plant-based, easy-to-use,disposable and latex/BPA free. Contains
                100 Gloves. A complete Glove set.
            </Paragraph>
            <SubHeading>Our Advantages</SubHeading>
            <GridContainer>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">CHEMICAL FREE</Heading4>
                    <GridItem>
                        <Paragraph>
                            Completely free from harmful chemicals like
                            pesticides,was,preservatives or colors.
                        </Paragraph>
                    </GridItem>
                </GridItem>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">100% BIODEGRADABLE</Heading4>
                    <GridItem>
                        <Paragraph>
                            Produced from natural raw materials
                        </Paragraph>
                    </GridItem>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">PARTY PERFECT</Heading4>
                    <GridItem>
                        <Paragraph>
                            An eco-friendly and green alternative for
                            brunches,events,camping,festivals and picnics
                        </Paragraph>
                    </GridItem>
                </GridItem>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">STURDY DESIGN</Heading4>
                    <GridItem>
                        <Paragraph>
                            {' '}
                            With sturdy and elegant design , every product is
                            unique.
                        </Paragraph>
                    </GridItem>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">LEAK PROOF</Heading4>
                    <GridItem>
                        <Paragraph>
                            Upto 12 hrs,making them ideal for consuming food
                            without risk of absorption and leak
                        </Paragraph>
                    </GridItem>
                </GridItem>
                <GridItem sm={100} md={50} lg={50}>
                    <Heading4 margin="0 0 0 0">EASILY DECOMPOSTABLE</Heading4>
                    <GridItem>
                        <Paragraph>
                            Turns to soil in less than 45 days
                        </Paragraph>
                    </GridItem>
                </GridItem>
            </GridContainer>
            <style jsx>{`
                .imgdesc {
                    display: none;
                }
                @media only and screen (min-width: 600px) {
                    .imgdesc {
                        display: inline;
                    }
                }
            `}</style>
        </Container>
    )
}

export default Description
