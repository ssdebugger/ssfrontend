import { useEffect } from 'react'

import { Heading3, Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import Image from 'next/image'
import {
    DisposableBrandCard,
    DisposableBrandImgContainer,
    DisposableBrandContent,
    DisposableBundleContainer,
    DisposableBundleCardContainer,
    DisposableText,
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

        observer.observe(document.querySelector('#disposable-dinnerware-heading'))
        observer.observe(document.querySelector('#disposable-dinnerware-description'))

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <DisposableBundleContainer>
            <DisposableBundleCardContainer id="DisposableBundleCardContainer">
                <DisposableBrandCard>
                    <DisposableText>
                        <Heading3 id="disposable-dinnerware-heading">
                            Let&#39;s refresh the earth together
                        </Heading3>

                        <Paragraph id="disposable-dinnerware-description">
                        In our world, avoiding plastic can be challenging, 
                        and not a moment too soon for a plastic-choked planet.
                         Relax while Sell Sage offers you some sustainable living inspiration.
                        </Paragraph>
                    </DisposableText>
                </DisposableBrandCard>

                <DisposableBrandCard>
                    <DisposableBrandImgContainer>
                        <Image style={{aspectRatio:'16/9'}} src="/brands/disposable_gloves_brand.jpg" alt="Disposable gloves" height="60%" 
                         width="100%" objectFit='contain' layout='responsive'/>
                    </DisposableBrandImgContainer>

                    <DisposableBrandContent>
                        <Heading4>Glove up for self-protection</Heading4>
                        <Paragraph>
                        Compostable plant-based biopolymer gloves are to protect yourself on the go.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Gloveup</HyperLink>
                    </DisposableBrandContent>
                </DisposableBrandCard>

                <DisposableBrandCard>
                    <DisposableBrandImgContainer>
                    <Image style={{aspectRatio:'16/9'}} src="/brands/disposable_dinnerware_brand.jpg" alt="Disposable dinnerware set" height="60%" 
                         width="100%" objectFit='contain' layout='responsive'/>
                    </DisposableBrandImgContainer>

                    <DisposableBrandContent>
                        <Heading4>Eco-friendly with Plantry</Heading4>
                        <Paragraph>
                        Classy and environment-friendly products for your house and loved ones.
                        </Paragraph>

                        <HyperLink href="/shop">Shop Plantry</HyperLink>
                    </DisposableBrandContent>
                </DisposableBrandCard>
            </DisposableBundleCardContainer>
        </DisposableBundleContainer>
    )
}
