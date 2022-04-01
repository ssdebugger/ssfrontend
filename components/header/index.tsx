import { useEffect, useState, useRef } from 'react'
import Link from 'next/link'
import { ShoppingBag, Menu, X, Heart } from 'react-feather'

import { Search } from './search'

import {
    BrandContainer,
    BrandIcon,
    BrandNameIcon,
    ButtonGroup,
    HeaderButton,
    HeaderContainer,
    HeaderContent,
    HeaderWrapper,
    Nav,
    QuantityIndicator,
    SearchAndButtonGroup,
} from './style'

import { Paragraph } from '../typography/paragraph'
import { TopBar } from './top-bar'
import { DesktopNav } from './desktop-nav'
import { useAuth } from 'context/auth'
import { useRouter } from 'next/router'
import { MobileNav } from './mobile-nav'
import { CartSlideIn } from './cart-slide-in'
import { useCart } from '@/context/cart'

const NavLinksData = [
    {
        name: 'About Us',
        href: '/about',
        subLinks: [
            {
                sectionHeading: 'About Sellsage',
                links: [
                    { name: 'Our Story', href: '/about' },
                    { name: 'Sustainability', href: '/sustainability' },
                    { name: 'Impact', href: '/impact' },
                    { name: 'Contact Sellsage', href: '/contact-us' },
                ],
            },
        ],
    },
    {
        name: 'Shop',
        href: '/shop',
        subLinks: [
            {
                sectionHeading: 'Shop ',
                links: [
                    { name: 'Bowls', href: '/shop/bowls' },
                    { name: 'Plates', href: '/shop/plates' },
                    { name: 'Tray', href: '/shop/tray' },
                    { name: 'Cutlery', href: '/shop/cutlery' },
                    { name: 'Gloves', href: '/shop/gloves' },
                    { name: 'Container', href: '/shop/container' },
                    { name: 'Bundles', href: '/shop/bundles' },
                ],
            },
        ],
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact-us' },
]

export const HyperLink = ({
    children,
    href,
}: {
    children: React.ReactNode
    href: string
}) => {
    return (
        <Link href={href} passHref>
            <a>{children}</a>
        </Link>
    )
}

export const Header = () => {
    const router = useRouter()
    const { cart } = useCart()
    const isLoggedIn = useAuth()
    const [showNav, setShowNav] = useState(false)
    const [showBag, setShowBag] = useState(false)
    const [cartLength, setCartLength] = useState(0)

    const toggleBag = () => {
        setShowBag((prevState) => !prevState)
    }

    const toggleMobileNav = () => {
        setShowNav((prevState) => !prevState)
    }

    const wishlistroute = () => {
        const email = window.localStorage.getItem('useremail')

        router.push({
            pathname: '/wishlist',
            query: {
                email: email,
            },
        })
    }

    useEffect(() => {
        if (showBag) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [showBag])

    useEffect(() => {
        let oldValue = 0
        let newValue = 0

        window.addEventListener('scroll', (e) => {
            newValue = window.pageYOffset

            if (newValue > 250) {
                if (oldValue < newValue) {
                    // user is scrolling up
                    document
                        .querySelector('.header-container')
                        .classList.add('is-hidden')
                } else if (oldValue > newValue) {
                    // user is scrolling down
                    document
                        .querySelector('.header-container')
                        .classList.remove('is-hidden')
                }
            }

            if (newValue > 380) {
                if (oldValue < newValue) {
                    // user is scrolling up
                    document
                        .querySelector('.header-container')
                        .classList.add('is-fixed')
                }
            }

            if (newValue < 150) {
                document
                    .querySelector('.header-container')
                    .classList.remove('is-fixed')
            }

            oldValue = newValue
        })
    }, [])

    // calcualte the total items in cart.
    useEffect(() => {
        if (cart.length > 0) {
            let updatedCartLength = cart
                .map((item) => Number(item.quantity))
                .reduce((a, b) => a + b)

            setCartLength(updatedCartLength)
        }
    }, [cart])

    return (
        <HeaderContent className="header-container">
            <TopBar />

            <HeaderContainer>
                <HeaderWrapper>
                    <BrandContainer>
                        <HyperLink href="/">
                            <BrandIcon
                                src="/favicon-01.svg"
                                alt="Sellsage Brand Icon"
                            />

                            <BrandNameIcon
                                src="/pngsellsage.png"
                                alt="Sellsage Brand Name Icon"
                            />
                        </HyperLink>
                    </BrandContainer>

                    <Nav>
                        <DesktopNav NavLinksData={NavLinksData} />

                        <MobileNav
                            showNav={showNav}
                            toggleNavFn={toggleMobileNav}
                        />
                    </Nav>

                    <SearchAndButtonGroup>
                        <Search />

                        <ButtonGroup>
                            {isLoggedIn && (
                                <HeaderButton>
                                    <Heart onClick={wishlistroute} />
                                </HeaderButton>
                            )}

                            <HeaderButton onClick={toggleBag}>
                                {cart.length > 0 && (
                                    <QuantityIndicator>
                                        {cartLength}
                                    </QuantityIndicator>
                                )}
                                <ShoppingBag />
                            </HeaderButton>

                            <HeaderButton mobileOnly onClick={toggleMobileNav}>
                                <Menu />
                            </HeaderButton>
                        </ButtonGroup>
                    </SearchAndButtonGroup>
                </HeaderWrapper>
            </HeaderContainer>

            <CartSlideIn showBag={showBag} toggleFn={toggleBag} />
        </HeaderContent>
    )
}
