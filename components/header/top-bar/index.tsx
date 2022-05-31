import { User } from 'react-feather'
import { useAuth } from 'context/auth'

import {
    TopBarContainer,
    TopBarOffer,
    TopBarLinksContainer,
    TopBarLink,
    TopBarLinkWrapper,
} from './top-bar.style'
import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { HyperLink } from '@/components/header'
import { UserDropdown } from '../user-dropdown'

export const TopBar = () => {
    const isLoggedIn = useAuth()

    return (
        <TopBarContainer>
            <TopBarOffer>
                <Heading4>Free Delivery:</Heading4>
                <Paragraph>Applies to orders of $35 and above.</Paragraph>
            </TopBarOffer>

            <TopBarLinksContainer>
                <TopBarLinkWrapper>
                    <TopBarLink>
                        <HyperLink href="/faq">Help</HyperLink>

                        <span>|</span>
                    </TopBarLink>
                </TopBarLinkWrapper>

                <TopBarLinkWrapper>
                    <TopBarLink>
                        {isLoggedIn ? (
                            <UserDropdown />
                        ) : (
                            <HyperLink href="/signin">
                                <User width={16} height={16} />
                                <span>Sign In</span>
                            </HyperLink>
                        )}
                    </TopBarLink>
                    <span>|</span>
                </TopBarLinkWrapper>
            </TopBarLinksContainer>
        </TopBarContainer>
    )
}
