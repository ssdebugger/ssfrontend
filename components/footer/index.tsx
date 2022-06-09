import {
    FooterContainer,
    SocialIconHolder,
    EmailInput,
    RegButton,
    AccrIcons,
    IconsHolder,
    Copyright,
    FooterWrapper,
} from './style'
import Link from 'next/link'
import { GridContainer, GridItem } from '../_pages/homepage/style'
import { Typography } from '../_pages/product/index.style'
import { Instagram, Copy } from 'react-feather'
import { HyperLink } from '../header'

import { Facebook } from '../svg/facebook'
import { LinkedIn } from '../svg/linkedin'
import { Pinterest } from '../svg/pinterest'
import { Paragraph } from '../typography/paragraph'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <GridContainer>
                    <GridItem className="gridItem" lg={25} md={25} sm={100}>
                        <Typography
                            color="#fff"
                            fontWeight="500"
                            fontSize="19px"
                        >
                            Company
                        </Typography>

                        <HyperLink href="/faq">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Faqs
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/legal/privacy-policy">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Privacy Policy
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/legal/terms-and-conditions">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Terms And Conditions
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/legal/acceptable-use">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Acceptable User Policy
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/legal/shipping-and-return-policy">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Shipping & Return Policy
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/legal/cookie-policy">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Cookie Policy
                            </Typography>
                        </HyperLink>
                    </GridItem>

                    <GridItem className="gridItem" lg={25} md={25} sm={100}>
                        <Typography
                            color="#fff"
                            fontWeight="500"
                            fontSize="19px"
                        >
                            About SellSage
                        </Typography>

                        <HyperLink href="/about">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Our Story
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/sustainability">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Sustainability
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/impact">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Impact
                            </Typography>
                        </HyperLink>

                        <HyperLink href="/contact-us">
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Contact Sellsage
                            </Typography>
                        </HyperLink>

                        <a href="/brochure/catalog.pdf" download>
                            <Typography
                                color="#fff"
                                fontWeight="400"
                                fontSize="14px"
                            >
                                Download brochure
                            </Typography>
                        </a>

                        <div style={{ marginTop: '1rem', display: 'flex' }}>
                            <SocialIconHolder>
                                <a
                                    target="_blank"
                                    rel='noreferrer'
                                    href="https://www.instagram.com/sellsage/"
                                >
                                    <Instagram
                                        strokeWidth="2px"
                                        strokeOpacity="0.9"
                                        color="#fff"
                                    />
                                </a>
                            </SocialIconHolder>

                            <SocialIconHolder>
                                <a
                                    target="_blank"
                                    rel='noreferrer'
                                    href="https://www.facebook.com/sellsage"
                                >
                                    <Facebook fill="#fff" />
                                </a>
                            </SocialIconHolder>

                            <SocialIconHolder>
                                <a
                                    target="_blank"
                                    rel='noreferrer'
                                    href="https://www.linkedin.com/company/sellsage/"
                                >
                                    <LinkedIn fill="#fff" />
                                </a>
                            </SocialIconHolder>

                            <SocialIconHolder>
                                <a
                                    target="_blank"
                                    rel='noreferrer'
                                    href="https://www.pinterest.com/sellsage/"
                                >
                                    <Pinterest />
                                </a>
                            </SocialIconHolder>
                        </div>
                    </GridItem>

                    <GridItem className="gridItem" lg={25} md={25} sm={100}>
                        <Typography
                            color="#fff"
                            fontWeight="500"
                            fontSize="19px"
                        >
                            Certifications
                        </Typography>

                        <IconsHolder>
                            <AccrIcons
                                loading="lazy"
                                src="/certificates/nmsdc-transparent.webp"
                                alt='image'
                            />
                            <AccrIcons
                                loading="lazy"
                                src="/certificates/bpi.png"
                                alt='image'
                            />
                            <AccrIcons
                                loading="lazy"
                                src="/certificates/usda.png"
                                alt='image'
                            />
                        </IconsHolder>
                    </GridItem>
                    <GridItem className="gridItem" lg={25} md={25} sm={100}>
                        <Typography
                            color="#fff"
                            fontWeight="500"
                            fontSize="19px"
                        >
                            Subscribe to the newsletter
                        </Typography>

                        <Typography
                            color="#fff"
                            fontWeight="400"
                            fontSize="14px"
                        >
                            Subscribe now to get 10% off your first order and to make your inbox greener with monthly sustainable tips!
                        </Typography>

                        <EmailInput placeholder="Email" />
                        <RegButton>COUNT ME IN</RegButton>
                    </GridItem>

                    <Copyright>
                        <Paragraph>
                            &copy; 2021 Sellsage. All Rights Reserved. SellSage
                            is a minority owned company.
                        </Paragraph>
                    </Copyright>
                </GridContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
