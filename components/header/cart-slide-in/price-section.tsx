import { Button } from '@/components/buttons'
import { limitDecimal } from '@/utils/limt-decimal'
import Link from 'next/link'

import {
    BagPriceContainer,
    PriceContainer,
    PriceSectionContainer,
} from './cart-slide-in.style'

interface Props {
    originalPrice: number
    discount: number
}

const BagPrice: React.FC<Props> = ({ originalPrice, discount }) => {
    return (
        <BagPriceContainer>
            <PriceContainer>
                <span>Original Price</span>
                <span>${originalPrice}</span>
            </PriceContainer>

            <PriceContainer>
                <span style={{ color: '#019875' }}>Discount</span>
                <span style={{ color: '#019875' }}>${discount}</span>
            </PriceContainer>

            <PriceContainer>
                <span>Bag Total</span>
                <span>${limitDecimal(originalPrice - discount)}</span>
            </PriceContainer>
        </BagPriceContainer>
    )
}

export const PriceSection: React.FC<Props> = ({ originalPrice, discount }) => {
    return (
        <PriceSectionContainer>
            <BagPrice originalPrice={originalPrice} discount={discount} />

            <Link href="/checkout" passHref>
                <Button varient="primary" fill>
                    Checkout
                </Button>
            </Link>
        </PriceSectionContainer>
    )
}
