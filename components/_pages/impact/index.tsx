import Head from 'next/head'

import { Header, HyperLink } from '@/components/header'
import {
    ContentSection,
    FixedCol,
    HeaderImg,
    HeaderImgContent,
    ImgContainer,
    Main,
    ScrollableCol,
} from './impact.styles'
import { Heading3, SubHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import Footer from '@/components/footer'

const Impact = () => {
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
                <title>Impact - Sellsage</title>
            </Head>
            <Header />
            <Main>
                <FixedCol>
                    {/* <Paragraph>18•12•2021</Paragraph> */}

                    <SubHeading>
                        The future is shaped by our actions today.
                    </SubHeading>
                </FixedCol>

                <ScrollableCol>
                    <ImgContainer>
                        <HeaderImg
                            src="/impact-header.jpg"
                            alt="impact image"
                        />

                        <HeaderImgContent>
                            {/* <Paragraph>18•12•2021</Paragraph> */}

                            <SubHeading>
                                The future is shaped by our actions today.
                            </SubHeading>
                        </HeaderImgContent>
                    </ImgContainer>

                    <ContentSection>
                        <Heading3>Where do we come in?</Heading3>

                        <Paragraph>
                            In line with our mission and vision, environmental
                            sustainability is important to us. Being an
                            eco-conscious company in today`&#39;`s consumerist
                            society is as tough as it gets. However, we at
                            SellSage want to stay true to our goals and want to
                            promote sustainable living through our products and
                            our blogs so it becomes a part of your lifestyle.
                        </Paragraph>

                        <Paragraph>
                            We realize the need for some of the products is
                            always going to be there. So, what if we replace the
                            products we would inevitably use with an
                            alternative, less harmful to the planet?
                        </Paragraph>
                    </ContentSection>

                    {/* Ethical sourcing */}
                    <ContentSection>
                        <Heading3>Ethical Sourcing and Trade</Heading3>

                        <Paragraph>
                            Our supply chain enables local communities to thrive
                            with a fair share of product income. The raw
                            materials we use are ethically sourced to be
                            processed in Good Manufacturing Practices (GMP)
                            certified facilities.
                        </Paragraph>

                        <Paragraph>
                            We are proud to play a part in empowering these
                            local communities through our fair wage policies and
                            thankful for their commitment to crafting
                            high-quality products for customers.
                        </Paragraph>
                    </ContentSection>

                    {/* Donations */}
                    <ContentSection>
                        <Heading3>Donations</Heading3>

                        <Paragraph>
                            We consolidated our business commitment to give back
                            by contributing 90,000+ bars of soap to EcoSoaps
                            Bank to further health and hygiene efforts in Sierra
                            Leone. For every six bars of soap sold, we also
                            donate one to EcoSoaps Bank.
                        </Paragraph>

                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/B41F3V4xfyo?controls=0"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                        <Paragraph>
                            We believe in transparency and accountability every
                            step of the way. Since we are a fairly young
                            company, we are only able to do so much as of now
                            but we hope to do more as we grow.
                        </Paragraph>
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
                            <b> subscribe </b> to us to receive our weekly posts
                            and follow us on our social media handles for more.
                        </Paragraph>

                        <Paragraph>
                            Do you have a cause that you think deserves support?
                            Would you like to volunteer with us? or are you in
                            need of clean-up equipment? We are happy to
                            collaborate with you. Please reach out to us at
                            <b>
                                <a href="mailto:connect@sellsage.com">
                                    connect@sellsage.com
                                </a>
                            </b>
                            .
                        </Paragraph>
                    </ContentSection>

                    {/* Visions for the future	 */}
                    <ContentSection>
                        <Heading3>Visions for the future </Heading3>

                        <Paragraph>
                            We are driven by the passion of creating awareness
                            of eco-friendly goods and making them accessible to
                            the larger part of the world. SellSage is actively
                            making efforts at both the business and consumer
                            levels to transform the world towards sustainable
                            living and inspire confidence through scientific
                            testing and validation.
                        </Paragraph>
                    </ContentSection>
                </ScrollableCol>
            </Main>

            <Footer />
        </>
    )
}

export default Impact
