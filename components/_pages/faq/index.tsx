import { useState } from 'react'

import { CollapseButton } from '@/components/collapse-button'
import { LandingLayout } from '@/components/layout/landing'
import { Heading3 } from '@/components/typography/heading'
import Head from 'next/head'

import {
    QueriesContainer,
    QueryContainer,
    QueryContent,
    QueryHeadingsContainer,
    QueryLink,
    QueryLinks,
} from './index.style'

import { TopBanner } from './top-banner'
import Footer from '@/components/footer'
import { scrollToElement } from '@/utils/scrollToElement'
import { HyperLink } from '@/components/header'

const FaqPage = () => {
    const [activeLink, setActiveLink] = useState('general')

    const data = [
        {
            sectionHeading: 'General',
            sectionId: 'general',
            qa: [
                {
                    q: 'What is unique about SellSage?',
                    a: [
                        "SellSage doesn't do sustainability as a business, but rather a conscious business is a part of our sustainability goals. Even in the face of disproportionate odds, we strive to do the right thing.",
                    ],
                },
                {
                    q: 'How can I stay up to date on your blog?',
                    a: [
                        'You can sign-up on our website to receive weekly blog posts on climate awareness, sustainability and more. You can also follow us on social media.',
                    ],
                },
                {
                    q: 'What certifications do you have?',
                    a: [
                        'Our certificates are industry and product-specific (e.g.: Leaping bunny, BPI, USDA). Please check our product pages for information or download catalogue to find out detailed testing and product infromation.',
                    ],
                },
                {
                    q: 'Can I collaborate with SellSage as a business?',
                    a: [
                        'We enable customer and other business alike in this fight to save the environment and increasing access to sustainable products.',
                        'If you are a business and would like to collaborate with us please email us on connect@sellsage.com or call us on +1 734 331 9766. ',
                    ],
                },
            ],
        },
        {
            sectionHeading: 'Product',
            sectionId: 'product',
            qa: [
                {
                    q: 'Can I trust product descriptions on eco-friendliness and sustainability?',
                    a: [
                        'We ensure all our products are scientifically lab tested and sustainable to back all the claims we make in the product description. Some of the tests include ASTM D6400, ASTM D6868 and ASTM D6866 compliances for the applicable products to get USDA, BPI and FDA certifications.',
                    ],
                },
                {
                    q: 'Can I get additional information on your products?',
                    a: [
                        'If you need any additional information other than that already mentioned in the product description please feel free to reach out to us at connect@sellsage.com.',
                    ],
                },
                {
                    q: 'How should I dispose of my products at the end of their life?',
                    a: [
                        "Most of our products are suitable for backyard composting. If the product has a 'commercially compostable' label, you need to check if there is a commercial composting facility near where you live. You could collect all your compostable plastic waste and deliver it to the facility or call them to check if they have pick-up services. Our other packaging can be recycled. ",
                    ],
                },
            ],
        },
        {
            sectionHeading: 'Shipping',
            sectionId: 'shipping',
            qa: [
                {
                    q: 'How long does it take to receive orders?',
                    a: [
                        'The usual delivery time is 2-4 business days depending on the time of order and your location.',
                    ],
                },
                {
                    q: 'Is there an option for the next day or expedited delivery?',
                    a: [
                        'In these cases please contact us through mail or phone. We will let you know if the request can be accommodated.',
                    ],
                },
            ],
        },
        {
            sectionHeading: 'Bulk order',
            sectionId: 'buld-order',
            qa: [
                {
                    q: 'Can I get a custom quote for bulk orders?',
                    a: [
                        'In these cases please contact us. We love bulk order since help us reduce transport carbon footprint and we can offer you the best rates. ',
                    ],
                },
                {
                    q: 'Where can I find more information on bulk products and quantities?  ',
                    a: [
                        'If you need any additional information other than that already mentioned in the product description, please feel free to reach out to us at connect@sellsage.com.',
                    ],
                },
            ],
        },
        {
            sectionHeading: 'Returns and Refunds',
            sectionId: 'returns-and-refunds',
            qa: [
                {
                    q: 'How do I cancel my order?',
                    a: [
                        'You can cancel your order only before shipping. After shipment and update of tracking information, please wait for delivery to initiate return and refund.',
                    ],
                },
                {
                    q: 'Do you take returns and provide a refund?',
                    a: [
                        'We do accept returns and provide refunds as per our Shipping and Return Policy.',
                    ],
                },
            ],
        },
    ]

    const handleClick = (id: string) => {
        setActiveLink(id)
        scrollToElement(id)
    }

    return (
        <>
            <Head>
                <title>FAQ - Sellsage </title>
            </Head>
            <LandingLayout>
                <TopBanner />

                <QueriesContainer>
                    <QueryHeadingsContainer>
                        {data.map((item) => (
                            <QueryLinks key={item.sectionHeading}>
                                <QueryLink
                                    activeLink={activeLink}
                                    currentLink={item.sectionId}
                                    onClick={() => handleClick(item.sectionId)}
                                >
                                    {item.sectionHeading}
                                </QueryLink>
                            </QueryLinks>
                        ))}
                    </QueryHeadingsContainer>

                    <QueryContent>
                        {data.map((item) => (
                            <QueryContainer key={item.sectionHeading}>
                                <Heading3 id={item.sectionId} margin="0 0 1rem">
                                    {item.sectionHeading}
                                </Heading3>

                                {item.qa.map((qa) => (
                                    <CollapseButton
                                        key={qa.q}
                                        heading={qa.q}
                                        content={qa.a}
                                    />
                                ))}
                            </QueryContainer>
                        ))}
                    </QueryContent>
                </QueriesContainer>
            </LandingLayout>
            <Footer />
        </>
    )
}

export default FaqPage
