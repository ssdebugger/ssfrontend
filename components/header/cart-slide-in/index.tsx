import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { X } from 'react-feather'

import { Heading4 } from '@/components/typography/heading'
import { useCart } from '@/context/cart'
import { AlertBar } from '@/components/alert/alert-bar'

import {
    CloseBtn,
    CouponAlertContainer,
    CouponsContainer,
    PriceContainer,
    ProductsContainer,
    ProductsList,
    SlideInBg,
    SlideInContainer,
    SlideInContent,
} from './cart-slide-in.style'
import { ProductCard } from './product-card'
import { AlertContainer } from '@/components/_pages/auth/auth.style'
import { Button } from '@/components/buttons'
import { CouponList } from './coupons/coupon-list'
import { CustomCoupon } from './coupons/custom-coupon'
import { limitDecimal } from '@/utils/limt-decimal'
import { getFromLocal, setToLocal } from '@/utils/local-storage'
import { EmptyCart } from './empty-state'
import { PriceSection } from './price-section'
import { CartItem } from '@/types/cart'
import { Coupon } from '@/types/coupon'

const defaultCouponData = [
    {
        minSpend: 50,
        id: 'welcome-40',
        amount: 40,
        type: 'percent',
    },
    {
        minSpend: 20,
        id: 'save-25',
        amount: 25,
        type: 'percent',
    },
    {
        minSpend: 15,
        id: 'big-20',
        amount: 10,
        type: 'percent',
    },
]

interface Props {
    showBag: boolean
    toggleFn: () => void
}

const initialCouponValue = { id: '', minSpend: 0, amount: 0, type: '' }

export const CartSlideIn: React.FC<Props> = ({ showBag, toggleFn }) => {
    const { cart } = useCart()
    const [alert, setAlert] = useState('')
    const [originalPrice, setOriginalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [couponSelected, setCouponSelected] =
        useState<Coupon>(initialCouponValue)
    const [customCouponDetails, setCustomCouponDetails] = useState({
        coupon_code: '',
        email: '',
        total: 0,
    })

    function handleCouponSelection(coupon: Coupon) {
        if (coupon.minSpend >= originalPrice) {
            setCouponSelected(initialCouponValue)
            setToLocal('coupon', initialCouponValue)
            setAlert(`Original price should be more than $${coupon.minSpend}`)
            console.log('inside handle coupon if')
            console.log(coupon.minSpend, originalPrice)
            return
        }

        setAlert('')
        setToLocal('coupon', coupon)
        setCouponSelected(coupon)
    }

    useEffect(() => {
        console.log('alert', alert)
    }, [alert])

    function getTotalOriginalPrice(cart: Array<CartItem>) {
        let totalValue = 0
        cart.forEach(
            (item) => (totalValue += Number(item.price) * item.quantity)
        )

        return limitDecimal(totalValue)
    }

    function getUserCoupon() {
        let coupon: Coupon = getFromLocal('coupon')

        if (coupon === null || coupon === undefined || coupon.amount === 0) {
            return initialCouponValue
        }

        return coupon
    }

    function getDiscountValue(coupon: Coupon, originalCartValue: number) {
        if (coupon.minSpend >= originalCartValue) {
            return 0
        }

        let discountValue = originalCartValue * (coupon.amount / 100)
        return limitDecimal(discountValue)
    }

    function setTotalOriginalPrice(
        cart: Array<CartItem>,
        setBagValue: Dispatch<SetStateAction<number>>
    ) {
        let bagValue = getTotalOriginalPrice(cart)
        setBagValue(bagValue)

        return bagValue
    }

    function setDiscountValue(
        originalPrice: number,
        setBagDiscount: Dispatch<SetStateAction<number>>
    ) {
        let coupon = getUserCoupon()
        // when coupon does not exist
        if (coupon.minSpend === 0) {
            setBagDiscount(0)
            return
        }

        let discount = getDiscountValue(coupon, originalPrice)
        setBagDiscount(discount)

        return discount
    }

    function setBillDetails(originalPrice: number, discountValue: number) {
        let existingCoupon = getUserCoupon()

        let billDetails = {
            originalPrice: originalPrice,
            discount: {
                discountId:
                    existingCoupon.minSpend === 0 ? existingCoupon.id : null,
                type:
                    existingCoupon.minSpend === 0 ? existingCoupon.type : null,
                discountValue:
                    existingCoupon.minSpend === 0 ? existingCoupon.amount : 0,
                totalDiscount:
                    existingCoupon.minSpend === 0 ? discountValue : 0,
            },
            bagTotal: limitDecimal(originalPrice - discountValue),
            zipCode: null,
        }

        setToLocal('billDetails', billDetails)
    }

    useEffect(() => {
        setTotalOriginalPrice(cart, setOriginalPrice)
    }, [cart])

    useEffect(() => {
        setBillDetails(originalPrice, discount)
        setDiscountValue(originalPrice, setDiscount)

        if (
            couponSelected.minSpend > 0 &&
            couponSelected.minSpend > originalPrice
        ) {
            setCouponSelected(initialCouponValue)
        }
    }, [originalPrice, couponSelected])

    return (
        <SlideInContainer showBag={showBag}>
            <SlideInBg onClick={toggleFn} />

            <CloseBtn onClick={toggleFn}>
                <X />
            </CloseBtn>

            <SlideInContent showBag={showBag}>
                {cart.length > 0 ? (
                    <>
                        <CouponsContainer>
                            <Heading4>Coupons</Heading4>

                            <CouponAlertContainer>
                                {alert.length > 0 && (
                                    <AlertContainer>
                                        <AlertBar
                                            alertMessage={alert}
                                            alertType="red"
                                        />
                                    </AlertContainer>
                                )}
                            </CouponAlertContainer>

                            <CustomCoupon
                                setAlert={setAlert}
                                setDiscount={setDiscount}
                                originalBagValue={originalPrice}
                                customCouponDetails={customCouponDetails}
                                setCustomCouponDetails={setCustomCouponDetails}
                            />

                            <CouponList
                                currentCouponId={couponSelected.id}
                                couponData={defaultCouponData}
                                handleSelection={handleCouponSelection}
                            />
                        </CouponsContainer>

                        <ProductsContainer>
                            <Heading4>My Bag</Heading4>

                            <ProductsList>
                                {cart.map((product) => (
                                    <ProductCard
                                        key={product.sku}
                                        sku={product.sku}
                                        title={product.title}
                                        quantity={product.quantity}
                                        productid={product.productid}
                                        img={product.img}
                                        discountAmount={couponSelected.amount}
                                        price={limitDecimal(
                                            product.price * product.quantity
                                        )}
                                    />
                                ))}
                            </ProductsList>

                            <PriceSection
                                originalPrice={originalPrice}
                                discount={discount}
                            />
                        </ProductsContainer>
                    </>
                ) : (
                    <EmptyCart />
                )}
            </SlideInContent>
        </SlideInContainer>
    )
}
