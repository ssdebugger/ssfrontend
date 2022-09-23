import { limitDecimal } from '@/utils/limt-decimal'
import { useEffect,useState } from 'react'

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
    var [couponApplied,setCouponApplied] = useState(null)

    useEffect(() => {
        let coupon = JSON.parse(window.localStorage.getItem('coupon'))
        if(coupon!=null && coupon!=undefined){
            setCouponApplied(coupon['id'])
        }
    }, [discount])

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
            {couponApplied != 'none' && couponApplied!=null?  (
                <PriceContainer>
                    <span style={{ color: '#019875' }}>Coupon</span>
                    <span style={{ color: '#019875' }}>
                        {couponApplied}
                    </span>
                </PriceContainer>
            ):null}
          

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
        </PriceSectionContainer>
    )
}
