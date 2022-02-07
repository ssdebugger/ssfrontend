import { useEffect, useState } from 'react'
import { X } from 'react-feather'

import { Heading4 } from '@/components/typography/heading'
import { useCart } from '@/context/cart'
import { AlertBar } from '@/components/alert/alert-bar'
import { HyperLink } from '..'

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
import { getFromLocal } from '@/utils/local-storage'
import { EmptyCart } from './empty-state'
import { PriceSection } from './price-section'

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

export const CartSlideIn: React.FC<Props> = ({ showBag, toggleFn }) => {
    const { cart } = useCart()

    const [alert, setAlert] = useState('')
    const [originalPrice, setOriginalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [couponSelectecd, setCouponSelected] = useState('')
    const [customCouponDetails, setCustomCouponDetails] = useState({
        coupon_code: '',
        email: '',
        total: 0,
    })

    function handleCouponSelection(id: string) {
        setCouponSelected(id)
    }

    // Check changes in cart
    useEffect(() => {
        let totalBagPrice = 0

        cart.map((item) => {
            totalBagPrice += Number(item.quantity) * item.price
        })

        setOriginalPrice(limitDecimal(totalBagPrice))

        if (cart.length === 0) {
            setAlert('')
            localStorage.removeItem('billDetails')
            localStorage.removeItem('coupon')
        }
    }, [cart])

    // Change the discount value when cart or coupon changes
    useEffect(() => {
        let existingCoupon = getFromLocal('coupon')

        if (existingCoupon !== null && existingCoupon !== undefined) {
            if (originalPrice > existingCoupon.minSpend) {
                setAlert('')

                if (existingCoupon.type === 'percent') {
                    let priceToDiscountOn = 0

                    for (let i = 0; i < cart.length; i++) {
                        if (
                            cart[i].sku === 'BNDL-CPBN-0710-0360' ||
                            cart[i].sku === 'BNDL-SHBD-0710-0360'
                        ) {
                            continue
                        }

                        priceToDiscountOn +=
                            Number(cart[i].quantity) * cart[i].price
                    }

                    let discountValue =
                        priceToDiscountOn * (existingCoupon.amount / 100)

                    let finalDiscountValue = limitDecimal(discountValue)

                    setDiscount(finalDiscountValue)
                } else {
                    setDiscount(existingCoupon.amount)
                }
            } else {
                setAlert(
                    `Original Price should be more than $${existingCoupon.minSpend}`
                )
                setCouponSelected('')
                localStorage.removeItem('coupon')
            }
        }
    }, [cart, couponSelectecd])

    // Set Bill details and customCoupon total value when originalPrice or discount value changes
    useEffect(() => {
        let existingCoupon = getFromLocal('coupon')
        let couponExist =
            existingCoupon !== null && existingCoupon !== undefined

        let billDetails = {
            originalPrice: originalPrice,
            discount: {
                discountId: couponExist ? existingCoupon.id : null,
                type: couponExist ? existingCoupon.type : null,
                discountValue: couponExist ? existingCoupon.amount : 0,
                totalDiscount: couponExist ? discount : 0,
            },
            bagTotal: limitDecimal(originalPrice - discount),
            zipCode: null,
        }

        localStorage.setItem('billDetails', JSON.stringify(billDetails))

        setCustomCouponDetails((prevState) => ({
            ...prevState,
            total: originalPrice,
        }))
    }, [originalPrice, discount])

    useEffect(() => {
        let existingCoupon = getFromLocal('coupon')
        let couponExist =
            existingCoupon !== null && existingCoupon !== undefined

        if (couponExist) {
            setCouponSelected(existingCoupon.id)
        }
    }, [])

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
                                currentCouponId={couponSelectecd}
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
