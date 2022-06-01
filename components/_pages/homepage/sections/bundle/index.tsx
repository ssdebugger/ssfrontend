import { useEffect } from 'react'

import { Heading3, Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

import Link from 'next/link'
import {
    BrandCard,
    BrandImgContainer,
    BrandImg,
    BrandContent,
    BundleContainer,
    HeadingContainer,
    BundleCardContainer,
    Text,
} from './bundle.style'
import { HyperLink } from '@/components/header'

export const Bundle = () => {
    useEffect(() => {
        let options: IntersectionObserverInit = {
            rootMargin: '0px',
            threshold: 1,
        }

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                } else {
                    entry.target.classList.remove('show')
                }
            })
        }, options)

        observer.observe(document.querySelector('#bundleHeading'))
        observer.observe(document.querySelector('#bundleDesc'))

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <BundleContainer>
            <BundleCardContainer id="bundleCardContainer">
                <BrandCard>
                    <Text>
                        <Heading3 id="bundleHeading">
                            Let&#39;s refresh the earth together
                        </Heading3>

                        <Paragraph id="bundleDesc">
                        In our world, avoiding plastic can be challenging, 
                        and not a moment too soon for a plastic-choked planet.
                         Relax while Sell Sage offers you some sustainable living inspiration.
                        </Paragraph>
                    </Text>
                </BrandCard>

                <BrandCard>
                    <BrandImgContainer>
                        <BrandImg src="/brands/gloveup.jpg" alt="image" />
                    </BrandImgContainer>

                    <BrandContent>
                        <Heading4>Glove up for self-protection</Heading4>
                        <Paragraph>
                        Compostable plant-based biopolymer gloves are to protect yourself on the go.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Gloveup</HyperLink>
                    </BrandContent>
                </BrandCard>

                <BrandCard>
                    <BrandImgContainer>
                        <BrandImg src="/brands/plantry.jpg" alt="image" />
                    </BrandImgContainer>

                    <BrandContent>
                        <Heading4>Eco-friendly with Plantry</Heading4>
                        <Paragraph>
                        Classy and environment-friendly products for your house and loved ones.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Plantry</HyperLink>
                    </BrandContent>
                </BrandCard>
            </BundleCardContainer>
        </BundleContainer>
    )
}
