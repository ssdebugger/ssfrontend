import styled from 'styled-components'
import Head from 'next/head'

import Footer from '@/components/footer'
import { LandingLayout } from '@/components/layout/landing'
import { Paragraph } from '@/components/typography/paragraph'
import { Banner } from './sections/banner'
import { Collabrations } from './sections/collabrations'
import { CommonGrid } from './sections/common-grid'
import { IntroVideo } from './sections/intro-video'
import { ImpactContainer, ImpactContainerStyles } from './impact.style'



const Data = [
    {
        sectionTitle: 'Research and development',
        description: `We are investing in research and development of new
                        sustainable products. From conducting our own life cycle
                        assessment on our <b>Plantry</b> disposable tableware
                        brand to identifying and acquiring stringent
                        environmental and quality control certificates; we are
                        striving to earn your trust.`,
    },

    {
        sectionTitle: 'Scientific Testing',
        description: `We would like you to verify your trust in us. All our products have been methodically tested in advanced laboratories. Detailed certification information can be found in our catalogs. `,
    },
]

const IntroText = styled.div`
    ${ImpactContainerStyles}

    p {
        margin: 0 auto;
        max-width: 500px;
        color: ${(props) => props.theme.blueGray900};
        font-size: ${(props) => props.theme.textLarge};
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        p {
            font-size: ${(props) => props.theme.heading3};
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        p {
            max-width: 800px;
        }
    }
`

const Sustainability = () => {
    return (
        <>
            <Head>
                <meta
                    name="title"
                    content="Sustainability | Plastic-Free & Compostable for the Future"
                ></meta>
                <meta
                    name="description"
                    content="Ethically sourced, plastic-free & sustainable is our motto! Reduce your waste, choose compostable with our palm leaf plates & dinnerware. Make the world greener"
                ></meta>
                <title>
                    Sustainability | Plastic-Free & Compostable for the Future
                </title>
            </Head>

            <LandingLayout>
                <ImpactContainer>
                    <Banner />

                    <IntroVideo />

                    <IntroText>
                        <Paragraph>
                            We at SellSage, want to help divert waste from these
                            landfills to compost. As of mid-2021, we have helped
                            divert 10 tons of waste from landfills and hope for
                            more in the future. This is about the same weight as
                            a small aircraft or a military tanker.
                        </Paragraph>
                    </IntroText>

                    <Collabrations />

                    {/* {Data.map((item) => (
                        <CommonGrid
                            key={item.description}
                            sectionTitle={item.sectionTitle}
                            description={item.description}
                        />
                    ))} */}
                </ImpactContainer>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default Sustainability
