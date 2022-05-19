import Head from 'next/head'

import { Header, HyperLink } from '@/components/header'
import {
    BulletPoint,
    BulletPointsContainer,
    ContentSection,
    FixedCol,
    HeaderImg,
    HeaderImgContent,
    ImgContainer,
    Main,
    ScrollableCol,
} from '@/components/_pages/impact/impact.styles'
import { Heading3, Heading4, SubHeading,MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import Footer from '@/components/footer'

const AboutUsPage = () => {
    return (
        <>
            <Head>
            <meta name='title' content='About Us | Sustainable Company | Eco Friendly Products'>            
                       </meta>
                        <meta
                            name="description"
                            content="SellSage is a minority owned business with a mission to make sustainable living convenient & accessible. Our disposable products are compostable & elegant"
                        ></meta>
                <title>About Us - Sellsage</title>
            </Head>

            <Header />

            <Main>
                <FixedCol>
                    <div>
                        {/* <Paragraph>18•12•2021</Paragraph> */}
                        <MainHeading>
                            Impacting business and individuals for a green
                            tomorrow.
                        </MainHeading>
                    </div>
                </FixedCol>

                <ScrollableCol>
                    <ImgContainer>
                        <HeaderImg src="/impact-header.jpg" alt='Sustainable img' />

                        <HeaderImgContent>
                            {/* <Paragraph>18•12•2021</Paragraph> */}

                            <MainHeading>
                                Impacting business and individuals for a green
                                tomorrow.
                            </MainHeading>
                        </HeaderImgContent>
                    </ImgContainer>

                    <ContentSection>
                        <Heading3>Who we are?</Heading3>

                        <Paragraph>
                            We are a young group of individuals passionate about
                            environmental change. Our goal is to promote
                            sustainable living and make it the norm. We wish to
                            enlighten and inform you along the way so we can all
                            be a little kinder towards our planet. We hope you
                            enjoy this journey of sustainability with us.
                        </Paragraph>
                    </ContentSection>

                    {/* Making E-commerce Eco-friendly */}
                    <ContentSection>
                        <Heading3>Making E-commerce Eco-friendly</Heading3>

                        <Paragraph>
                            With everyone buying online, we knew there was a way
                            to make it sustainable for ourselves and the planet!
                            From making sure our raw materials are
                            earth-friendly to sourcing our products from
                            factories that follow good manufacturing practices
                            to ensuring workers in the supply chain are treated
                            fairly, we are eco-conscious and transparent at
                            every stage. We only sell products that have been
                            tested and meet some of the most stringent
                            requirements to gain the approval of the
                            environmental community.
                        </Paragraph>
                    </ContentSection>

                    <ContentSection>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/B41F3V4xfyo?controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </ContentSection>

                    <ContentSection>
                        <Heading3>We are...</Heading3>

                        <BulletPointsContainer>
                            <BulletPoint>
                                <Heading4>
                                    Strongly against animal testing
                                </Heading4>

                                <Paragraph>
                                    We believe that animal testing is cruel. We
                                    respect animals and believe that every life
                                    matters.
                                </Paragraph>
                            </BulletPoint>

                            <BulletPoint>
                                <Heading4>
                                    Firm believers in fair trade
                                </Heading4>

                                <Paragraph>
                                    We make sure all the people who come
                                    together to bring you the product are
                                    respected and their rights are not violated
                                    in any way.
                                </Paragraph>
                            </BulletPoint>

                            <BulletPoint>
                                <Heading4>
                                    A certified minority-owned business
                                </Heading4>

                                <Paragraph>
                                    We possess an NMCDC certificate (National
                                    Minority Supplier Development Council, Inc.)
                                </Paragraph>
                            </BulletPoint>

                            <BulletPoint>
                                <Heading4>
                                    Advocates for scientific testing
                                </Heading4>

                                <Paragraph>
                                    We obtain relevant certifications for our
                                    products to build credibility after they are
                                    properly tested. Please check out our
                                    products and the certifications under them.
                                </Paragraph>
                            </BulletPoint>
                        </BulletPointsContainer>
                    </ContentSection>

                    {/* Causes we support */}
                    <ContentSection>
                        <Heading3>Causes we support</Heading3>

                        <Paragraph>
                            We believe creating awareness of critical issues is
                            the first step towards positive action. This is
                            precisely why we have weekly blog posts on topics
                            related to climate change, sustainability,
                            lifestyle, and the environment. Make sure you
                            <b> subscribe </b> to receive our weekly posts and
                            follow us on our social media handles for more.
                        </Paragraph>

                        <Paragraph>
                            Do you have a cause that you think deserves support?
                            Would you like to volunteer with us? or are you in
                            need of clean-up equipment? We are happy to
                            collaborate with you. Please reach out to us at
                            <b>
                                {' '}
                                <a href="mailto:connect@sellsage.com">
                                    connect@sellsage.com
                                </a>
                            </b>
                            .
                        </Paragraph>
                    </ContentSection>
                </ScrollableCol>
            </Main>

            <Footer />
        </>
    )
}

export default AboutUsPage
