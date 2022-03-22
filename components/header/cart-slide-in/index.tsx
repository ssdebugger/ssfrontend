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
    const [shouldClickCoupon, setShouldClickCoupon] = useState(false)
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

            return
        }

        if (shouldClickCoupon) {
            setAlert('')
            setToLocal('coupon', coupon)
            setCouponSelected(coupon)
        } else {
            setAlert('Coupon not applicable on selected items.')
        }
    }

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
            console.log('making coupon zero', originalCartValue, coupon)
            return 0
        }

        let cartValue = originalCartValue

        // for (let i = 0; i < cart.length; i++) {
        //     if (
        //         cart[i].sku === 'BNDL-CPBN-0710-0360' ||
        //         cart[i].sku === 'BNDL-SHBD-0710-0360'
        //     ) {
        //         cartValue -= cart[i].price*cart[i].quantity
        //     }
        // }

        console.log(cartValue, 'in discount')
        let discountValue = cartValue * (coupon.amount / 100)
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
            setBillDetails(originalPrice, 0)
            return
        }

        let discount = getDiscountValue(coupon, originalPrice)
        setBagDiscount(discount)
        setBillDetails(originalPrice, discount)
        return discount
    }

    function setBillDetails(originalPrice: number, discountValue: number) {
        let existingCoupon = getUserCoupon()
        console.log(
            'in bill details',
            existingCoupon,
            originalPrice,
            discountValue
        )
        let billDetails = {
            originalPrice: originalPrice,
            discount: {
                discountId:
                    existingCoupon.minSpend !== 0 ? existingCoupon.id : null,
                type:
                    existingCoupon.minSpend !== 0 ? existingCoupon.type : null,
                discountValue:
                    existingCoupon.minSpend !== 0 ? existingCoupon.amount : 0,
                totalDiscount:
                    existingCoupon.minSpend !== 0 ? discountValue : 0,
            },
            bagTotal: limitDecimal(originalPrice - discountValue),
            zipCode: null,
        }

        setToLocal('billDetails', billDetails)
    }

    useEffect(() => {
        setTotalOriginalPrice(cart, setOriginalPrice)
        let coupon = getUserCoupon()
        if (coupon.minSpend > 0) {
            setCouponSelected(coupon)
            setToLocal('coupon', coupon)
            setAlert('')
        }
        var productcheck = false
        for (let i = 0; i < cart.length; i++) {
            if (
                cart[i].sku !== 'BNDL-CPBN-0710-0360' &&
                cart[i].sku !== 'BNDL-SHBD-0710-0360'
            ) {
                setShouldClickCoupon(true)
                productcheck = true
            }
        }
        if (!productcheck) {
            setShouldClickCoupon(false)
            setCouponSelected(initialCouponValue)
            // setToLocal('coupon', initialCouponValue)
        }
    }, [cart])

    useEffect(() => {
        console.log('in original price useeffect')
        setDiscountValue(originalPrice, setDiscount)
        if (
            couponSelected.minSpend > 0 &&
            couponSelected.minSpend > originalPrice
        ) {
            console.log('in if loop')
            setCouponSelected(initialCouponValue)
            setToLocal('coupon', initialCouponValue)
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
                                        inStockQuantity={
                                            product.inStockQuantity
                                        }
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
