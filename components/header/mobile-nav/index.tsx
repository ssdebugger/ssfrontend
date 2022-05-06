import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArrowUpRight, ChevronDown, LogOut, X } from 'react-feather'
import { useAuth, useAuthLogout } from '@/context/auth'
import { useClearCart } from '@/context/cart'

import { HyperLink } from '../'
import { Paragraph } from '@/components/typography/paragraph'

import {
    NavLink,
    LinksContainer,
    MobileNavContainer,
    NavCloseBtn,
    NavLinkContent,
    JoinUsSection,
    JoinUsLinks,
    LogoutBtn,
    NavSublinks,
    NavSublink,
} from './mobile-nav.style'

type Props = {
    showNav: boolean
    toggleNavFn: () => void
}

export const MobileNav: React.FC<Props> = ({ showNav, toggleNavFn }) => {
    const [username, setUsername] = useState('')
    const [showDropdown, setShowdropdown] = useState('')
    const isLoggedIn = useAuth()
    const logout = useAuthLogout()
    const clearCart = useClearCart()
    const router = useRouter()

    const logoutFn = () => {
        logout()
        localStorage.clear()
        sessionStorage.clear()
        clearCart()
        router.replace('/')
    }

    const handleShowDropdown = (dropDownId: string) => {
        if (showDropdown === dropDownId) {
            setShowdropdown('')
        } else {
            setShowdropdown(dropDownId)
        }
    }

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [])

    useEffect(() => {}, [showDropdown])

    const navToProfile = () => {
        const user = window.localStorage.getItem('useremail')
        router.replace({ pathname: './profile', query: { email: user } })
    }

    return (
        <MobileNavContainer showNav={showNav}>
            <NavCloseBtn onClick={toggleNavFn}>
                <X />
            </NavCloseBtn>

            <LinksContainer>
                {isLoggedIn && (
                    <NavLink profileLink onClick={navToProfile}>
                        <NavLinkContent>
                            <span>Hi {username}</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </NavLink>
                )}

                <NavLink>
                    <NavLinkContent onClick={() => handleShowDropdown('shop')}>
                        <span>Shop</span>
                        <ChevronDown />
                    </NavLinkContent>

                    <NavSublinks show={showDropdown === 'shop'}>
                        <NavSublink>
                            <HyperLink href="/shop">
                                View all products
                            </HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=bowls">Bowls</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=tray">Tray</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=gloves">Gloves</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=bundles">Bundles</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=plates">Plates</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=cutlery">Cutlery</HyperLink>
                        </NavSublink>

                        <NavSublink onClick={toggleNavFn}>
                            <HyperLink href="/shop?name=container">
                                Container
                            </HyperLink>
                        </NavSublink>
                    </NavSublinks>
                </NavLink>

                <NavLink onClick={toggleNavFn}>
                    <HyperLink href="/about">
                        <NavLinkContent>
                            <span>About us</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink onClick={toggleNavFn}>
                    <HyperLink href="/sustainability">
                        <NavLinkContent>
                            <span>Sustainability</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink onClick={toggleNavFn}>
                    <HyperLink href="/impact">
                        <NavLinkContent>
                            <span>Impact</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink onClick={toggleNavFn}>
                    <HyperLink href="/blog">
                        <NavLinkContent>
                            <span>Blog</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink onClick={toggleNavFn}>
                    <HyperLink href="/contact-us">
                        <NavLinkContent>
                            <span>Contact Us</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>
            </LinksContainer>

            {!isLoggedIn && (
                <JoinUsSection onClick={toggleNavFn}>
                    <Paragraph>
                        Become a Sellsage memeber and help fight climate change.
                    </Paragraph>

                    <JoinUsLinks>
                        <HyperLink href="signup">Join Us</HyperLink>

                        <HyperLink href="signin">Sign in</HyperLink>
                    </JoinUsLinks>
                </JoinUsSection>
            )}

            {isLoggedIn && (
                <div onClick={toggleNavFn}>
                    <LogoutBtn onClick={logoutFn}>
                        <LogOut /> <span>Logout</span>
                    </LogoutBtn>
                </div>
            )}
        </MobileNavContainer>
    )
}
