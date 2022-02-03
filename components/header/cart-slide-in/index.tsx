import { Button } from '@/components/buttons'
import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { useAuth } from '@/context/auth'
import { useCart } from '@/context/cart'
import { useEffect, useMemo, useState } from 'react'
import { ShoppingBag, X } from 'react-feather'
import { HyperLink } from '..'
import { AlertBar } from '@/components/alert/alert-bar'
import { useAlert } from 'react-alert'

import {
    BagPrice,
    CloseBtn,
    CouponAlertContainer,
    CouponForm,
    CouponInput,
    CouponItem,
    CouponsContainer,
    CouponsList,
    EmptyCartContainer,
    PriceContainer,
    PriceSection,
    ProductsContainer,
    ProductsList,
    SlideInBg,
    SlideInContainer,
    SlideInContent,
} from './cart-slide-in.style'
import { CouponCard } from './coupon-card'
import { ProductCard } from './product-card'
import { AlertContainer } from '@/components/_pages/auth/auth.style'

interface Props {
    showBag: boolean
    toggleFn: () => void
}

export const CartSlideIn: React.FC<Props> = ({ showBag, toggleFn }) => {
    const { cart } = useCart()
    const alertstatus = useAlert()

    const [alert, setAlert] = useState('')
    const [originalPrice, setOriginalPrice] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [couponSelectecd, setCouponSelected] = useState('')
    const [customCoupon, setCustomCoupon] = useState({
        coupon_code: '',
        email: '',
        total: 0,
    })

    function handleCouponSelection(id: string) {
        setCouponSelected(id)
    }

    function handleCouponInput(e) {
        let userEmail = localStorage.getItem('useremail')
        let isGuestUser = userEmail === undefined || userEmail === null

        setAlert('')
        if (e.target.value.length > 3) {
            let couponData = {
                coupon_code: e.target.value,
                email: !isGuestUser ? userEmail : 'guest1@sellsage.com',
                total: originalPrice,
            }

            setCustomCoupon(couponData)
        }
    }

    async function handleCouponSubmit(e) {
        e.preventDefault()

        try {
            let couponResponse = await fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/applycoupon',
                {
                    method: 'POST',
                    // mode: 'no-cors',
                    body: JSON.stringify(customCoupon),
                }
            )
                .then((data) => data.json())
                .then((res) => res.body)

            if (couponResponse === "Didn't match the spend Criteria") {
                setAlert('Bag total did not match the spend Criteria')
            } else if (
                couponResponse.message === 'Coupon code does not exist'
            ) {
                setAlert('Coupon code does not exist')
            } else if (
                couponResponse === 'You have exhausted your redemption limit'
            ) {
                setAlert('You have exhausted your redemption limit')
            } else if (couponResponse.message === 'Available') {
                setAlert('')
                setDiscount(couponResponse.to_deduct)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // Check for changes in cart
    useEffect(() => {
        let totalBagPrice = 0

        cart.map((item) => {
            totalBagPrice += Number(item.quantity) * item.price
        })

        setOriginalPrice(
            Math.round((totalBagPrice + Number.EPSILON) * 100) / 100
        )

        if (cart.length === 0) {
            setAlert('')
            localStorage.removeItem('billDetails')
            localStorage.removeItem('coupon')
        }
    }, [cart])

    // Change the discount value when cart or coupon changes
    useEffect(() => {
        let existingCoupon = JSON.parse(localStorage.getItem('coupon'))

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

                    let finalDiscountValue =
                        Math.round((discountValue + Number.EPSILON) * 100) / 100

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
        let existingCoupon = JSON.parse(localStorage.getItem('coupon'))
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
            bagTotal:
                Math.round((originalPrice - discount + Number.EPSILON) * 100) /
                100,
            zipCode: null,
        }

        localStorage.setItem('billDetails', JSON.stringify(billDetails))

        setCustomCoupon((prevState) => ({ ...prevState, total: originalPrice }))
    }, [originalPrice, discount])

    useEffect(() => {
        let existingCoupon = JSON.parse(localStorage.getItem('coupon'))
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

                            <CouponForm onSubmit={(e) => handleCouponSubmit(e)}>
                                <CouponInput
                                    placeholder="Enter your CouponId"
                                    type={'text'}
                                    onChange={(e) => handleCouponInput(e)}
                                />
                                <Button varient="primary" fill type="submit">
                                    Apply
                                </Button>
                            </CouponForm>

                            <CouponsList>
                                <CouponItem>
                                    <CouponCard
                                        minSpend={50}
                                        couponId="welcome-40"
                                        discountAmount={40}
                                        discountType="percent"
                                        selectedId={couponSelectecd}
                                        handleSelection={handleCouponSelection}
                                    />
                                </CouponItem>

                                <CouponItem>
                                    <CouponCard
                                        minSpend={20}
                                        couponId="save-25"
                                        discountAmount={25}
                                        discountType="percent"
                                        selectedId={couponSelectecd}
                                        handleSelection={handleCouponSelection}
                                    />
                                </CouponItem>

                                <CouponItem>
                                    <CouponCard
                                        minSpend={15}
                                        couponId="big-20"
                                        discountAmount={10}
                                        discountType="percent"
                                        selectedId={couponSelectecd}
                                        handleSelection={handleCouponSelection}
                                    />
                                </CouponItem>
                            </CouponsList>
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
                                        price={Number(
                                            (
                                                product.price * product.quantity
                                            ).toFixed(2)
                                        )}
                                    />
                                ))}
                            </ProductsList>

                            <PriceSection>
                                <BagPrice>
                                    <PriceContainer>
                                        <span>Original Price</span>
                                        <span>${originalPrice}</span>
                                    </PriceContainer>

                                    <PriceContainer>
                                        <span style={{ color: '#019875' }}>
                                            Discount
                                        </span>
                                        <span style={{ color: '#019875' }}>
                                            ${discount}
                                        </span>
                                    </PriceContainer>

                                    <PriceContainer>
                                        <span>Bag Total</span>
                                        <span>
                                            $
                                            {Math.round(
                                                (originalPrice -
                                                    discount +
                                                    Number.EPSILON) *
                                                    100
                                            ) / 100}
                                        </span>
                                    </PriceContainer>
                                </BagPrice>

                                <HyperLink href="/checkout">
                                    <Button
                                        varient="primary"
                                        fill
                                        onClick={toggleFn}
                                    >
                                        Checkout
                                    </Button>
                                </HyperLink>
                            </PriceSection>
                        </ProductsContainer>
                    </>
                ) : (
                    <EmptyCartContainer>
                        <Heading4>My Bag</Heading4>

                        <ShoppingBag width={48} height={48} strokeWidth={1.5} />
                        <Heading4>Your Bag is empty.</Heading4>
                        <Paragraph>
                            Sounds like a good time to start shopping.
                        </Paragraph>
                    </EmptyCartContainer>
                )}
            </SlideInContent>
        </SlideInContainer>
    )
}
