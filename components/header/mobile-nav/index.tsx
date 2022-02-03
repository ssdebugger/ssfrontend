import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ArrowUpRight, LogOut, X } from 'react-feather'

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
} from './mobile-nav.style'

type Props = {
    showNav: boolean
    toggleNavFn: () => void
}

export const MobileNav: React.FC<Props> = ({ showNav, toggleNavFn }) => {
    const [username, setUsername] = useState('')
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

    useEffect(() => {
        setUsername(localStorage.getItem('username'))
    }, [])

    return (
        <MobileNavContainer showNav={showNav} onClick={toggleNavFn}>
            <NavCloseBtn>
                <X />
            </NavCloseBtn>

            <LinksContainer>
                {isLoggedIn && (
                    <NavLink profileLink>
                        <HyperLink href="/profile">
                            <NavLinkContent>
                                <span>Hi {username}</span>
                                <ArrowUpRight />
                            </NavLinkContent>
                        </HyperLink>
                    </NavLink>
                )}

                <NavLink>
                    <HyperLink href="/shop">
                        <NavLinkContent>
                            <span>Shop</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink>
                    <HyperLink href="/about">
                        <NavLinkContent>
                            <span>About us</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink>
                    <HyperLink href="/sustainability">
                        <NavLinkContent>
                            <span>Sustainability</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink>
                    <HyperLink href="/impact">
                        <NavLinkContent>
                            <span>Impact</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink>
                    <HyperLink href="/blog">
                        <NavLinkContent>
                            <span>Blog</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>

                <NavLink>
                    <HyperLink href="/contact-us">
                        <NavLinkContent>
                            <span>Contact Us</span>
                            <ArrowUpRight />
                        </NavLinkContent>
                    </HyperLink>
                </NavLink>
            </LinksContainer>

            {!isLoggedIn && (
                <JoinUsSection>
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
                <LogoutBtn onClick={logoutFn}>
                    <LogOut /> <span>Logout</span>
                </LogoutBtn>
            )}
        </MobileNavContainer>
    )
}
