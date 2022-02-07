import { ShoppingBag } from 'react-feather'

import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

import { EmptyCartContainer } from './cart-slide-in.style'

export const EmptyCart = () => {
    return (
        <EmptyCartContainer>
            <Heading4>My Bag</Heading4>

            <ShoppingBag width={48} height={48} strokeWidth={1.5} />
            <Heading4>Your Bag is empty.</Heading4>
            <Paragraph>Sounds like a good time to start shopping.</Paragraph>
        </EmptyCartContainer>
    )
}
