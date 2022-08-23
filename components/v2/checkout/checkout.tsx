import React from 'react'
import Head from 'next/head'
import { useAlert } from 'react-alert'

import * as Styles from './checkout.styles'

import { Accordin } from './checkout-accordion'
import { Input } from '@/components/input'
import { CheckoutOrderProduct } from './checkout-cards'
import { ChevronDown } from 'react-feather'
import { Button } from '@/components/buttons'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useCart, useClearCart } from '@/context/cart'
import { limitDecimal } from '@/utils/limt-decimal'
import { WarningText } from './checkout.styles'
// stripe
import {
    loadStripe,
    PaymentIntent,
    Stripe,
    StripeCardElementChangeEvent,
} from '@stripe/stripe-js'
import {
    CardElement,
    Elements,
    useElements,
    useStripe,
} from '@stripe/react-stripe-js'

//types
import { IOrderDetails, IPayment, IShipping } from './checkout.types'

import {
    generatePaymentIntent,
    getShippingTaxes,
    processPayment,
} from './checkout.utils'
import { useRouter } from 'next/router'
import { CheckoutHeader } from './checkout-header'

const Steps = ['a', 'b']

let stripePromise: Promise<Stripe>

stripePromise = loadStripe('pk_live_d2HzkdbXHfM31jQJbUsPZiMe00VrTpDvSg')

const CheckoutPageWrapper = () => {
    const stripe = useStripe()
    const { cart } = useCart()
    const clearCart = useClearCart()
    const router = useRouter()
    const alert = useAlert()
    const elements = useElements()
    const [errorMsg, setErrorMsg] = React.useState('')
    const [showOrderDetails, setShowOrderDetails] = React.useState(false)
    const [orderDetails, setOrderDetails] = React.useState<IOrderDetails>({
        originalPrice: 0,
        shippingAndTaxes: 0,
        discount: 0,
        total: 0,
    })

    const [openIndexes, setOpenIndexes] = React.useState(['a'])
    const [shipping, setShipping] = React.useState<IShipping>({
        firstName: '',
        lastName: '',
        address: '',
        aptSuite: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
    })
    const [warning, setWarning] = React.useState(false)
    const [zipwarning,setZipwarning] = React.useState(false)
    const [payment, setPayment] = React.useState<IPayment>({
        nameOnCard: '',
        email: '',
        phone: '',
        cardNum: '',
    })
    const [paymentIntent, setPaymentIntent] = React.useState<PaymentIntent>()
    const showOneAlways = (currentId: string) => {
        const closing = openIndexes.includes(currentId)
        const isLastIndex = openIndexes.length < 2

        if (closing && isLastIndex) return

        if (closing) {
            setOpenIndexes((prev) => prev.filter((i) => i !== currentId))
        } else {
            setOpenIndexes((prev) => [...prev, currentId])
        }
    }
    const handleInputChange = (type: 'shipping' | 'payment', data: Object) => {
        if (type === 'shipping') {
            setShipping((prev) => ({ ...prev, ...data }))
        } else {
            setPayment((prev) => ({ ...prev, ...data }))
        }
    }
    const handleCardInput = (e: StripeCardElementChangeEvent) => {
        if (e.error) {
            alert.show(e.error.message)
        }
        return
    }
  
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyDtDZuMfT96MQUfJvR4gRDK2VxoLPQYcao',
        options: {
            fields: ['address_components', 'geometry', 'name'],
            types: ['address'],
        },
        onPlaceSelected: (place) => {
            let address = (
                document.getElementById('Address') as HTMLInputElement
            ).value
            setShipping((prev) => ({
                ...prev,
                ...{
                    address: address,
                },
            }))

            place['address_components'].map((x, i) => {
                if (x['types'][0] === 'postal_code') {
                    ;(
                        document.getElementById(
                            'PostalCode'
                        ) as HTMLInputElement
                    ).value = x['long_name']
                    setShipping((prev) => ({
                        ...prev,
                        ...{
                            postalCode: x['long_name'],
                        },
                    }))
                } else if (x['types'][0] === 'country') {
                    ;(
                        document.getElementById('Country') as HTMLInputElement
                    ).value = x['long_name']
                    setShipping((prev) => ({
                        ...prev,
                        ...{
                            country: x['long_name'],
                        },
                    }))
                } else if (x['types'][0] === 'administrative_area_level_1') {
                    ;(
                        document.getElementById('State') as HTMLInputElement
                    ).value = x['long_name']
                    setShipping((prev) => ({
                        ...prev,
                        ...{
                            state: x['long_name'],
                        },
                    }))
                } else if (x['types'][0] === 'locality') {
                    ;(
                        document.getElementById('City') as HTMLInputElement
                    ).value = x['long_name']
                    setShipping((prev) => ({
                        ...prev,
                        ...{
                            city: x['long_name'],
                        },
                    }))
                }
            })
        },
    })

    const setShippingTaxes = async () => {
        let { shippingAndTaxes, total , errorCode } = await getShippingTaxes({
            originalPrice: orderDetails.originalPrice,
            discount: orderDetails.discount,
            postalCode: shipping.postalCode,
        })
        if(errorCode==400){
                setZipwarning(true)
        }
        else{
            setOpenIndexes(['b'])
            setZipwarning(false)
            let intent = await generatePaymentIntent({
                shipping,
                orderDetails: {
                    discount: orderDetails.discount,
                    originalPrice: orderDetails.originalPrice,
                    shippingAndTaxes: shippingAndTaxes,
                    total: total,
                },
            })
    
            setOrderDetails((prev) => ({ ...prev, shippingAndTaxes, total }))
            setPaymentIntent(intent)
        }
     
    }


    const handleProcessPayment = (e) => {
        try {
            e.target.innerHTML = 'Processing...'
            e.target.disabled = true
            processPayment({
                stripe: stripe,
                elements: elements,
                shippingDetails: shipping,
                orderDetails: orderDetails,
                paymentDetails: payment,
                paymentIntent: paymentIntent,
                router: router,
                showAlert: alert.show,
                clearCart: clearCart,
            }).then((res) => {
                e.target.innerHTML = 'Pay'
                e.target.disabled = false
            })
        } catch (error) {
            e.target.innerHTML = 'Pay'
            e.target.disabled = false
            alert.show(JSON.stringify('Something went wrong please try again.'))
        }
    }

    const handleSavePay = () => {
        if (
            shipping.firstName.trim() == '' ||
            shipping.lastName.trim() == '' ||
            shipping.address.trim() == '' ||
            shipping.postalCode.trim() == '' ||
            shipping.city.trim() == '' ||
            shipping.state.trim() == ''
        ) {
            setWarning(true)
        } else {
            setWarning(false)
            setShippingTaxes()
        }
    }

    React.useEffect(() => {
        document.body.style.overflow = 'auto'
    }, [])

    React.useEffect(() => {
        let timeout = setTimeout(() => {
            let billDetails = JSON.parse(localStorage.getItem('billDetails'))
            if (billDetails !== undefined) {
                let cartOriginalPrice = limitDecimal(
                    cart.reduce((total, item) => total + item.price, 0)
                )
                let originalPrice: number =
                    cartOriginalPrice === billDetails.originalPrice
                        ? cartOriginalPrice
                        : billDetails.originalPrice
                let discount: number = billDetails.discount.totalDiscount
                let total = limitDecimal(
                    originalPrice + orderDetails.shippingAndTaxes - discount
                )

                if (shipping.postalCode !== '') {
                    fetch(
                        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/shippingtaxesv2?zipcode=' +
                            shipping.postalCode +
                            '&subtotal=' +
                            originalPrice
                    )
                        .then((res) => res.json())
                        .then((res) => {
                            let shippingAndTaxes = limitDecimal(
                                res['tax_to_add'] + res['shipping_cost']
                            )

                            let total = limitDecimal(
                                originalPrice + shippingAndTaxes - discount
                            )

                            setOrderDetails((prev) => ({
                                ...prev,
                                shippingAndTaxes,
                                originalPrice,
                                discount,
                                total,
                            }))
                        })
                } else {
                    setOrderDetails((prev) => ({
                        ...prev,
                        originalPrice,
                        discount,
                        total,
                    }))
                }
            }
        }, 250)

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])

    // Alert the user whenever we have a new alert message.
    React.useEffect(() => {
        if (errorMsg !== '') {
            alert.show(errorMsg)
            setErrorMsg('')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errorMsg])
    const pinterestdetails = {
        value: 10,
        order_quantity: 2,
        currency: 'USD',
        event_id: 'eventId0001',
        product_ids: ['1414', '1415'],
    }
    React.useEffect(() => {
        import('react-pinterest-tag').then((ReactPinterestTag) => {
            console.log('cart', cart)
            let product_id = []
            for (let i = 0; i++; i < cart.length) {
                product_id.push(cart[i]['sku'])
            }
            ReactPinterestTag.default.init('2613059152744')
            ReactPinterestTag.default.track('checkout', {
                value: JSON.parse(localStorage.getItem('billDetails')).bagTotal,
                order_id: 1234,
                order_quantity: cart.length,
                currency: 'USD',
                event_id: 'eventId0001',
                product_id: product_id,
            })
        })
    }, [])
    return (
        <>
            <Head>
                <title>Checkout - Sellsage</title>
                {/* <script
                    dangerouslySetInnerHTML={{
                        __html: `
        !function(e){if(!window.pintrk){window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
          n=window.pintrk;n.queue=[],n.version="3.0";var
          t=document.createElement("script");t.async=!0,t.src=e;var
          r=document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
        pintrk('load', '2613059152744', {em: 'fsd1@sellsage.com'});
        pintrk('track', 'checkout', { 
            value: ${orderDetails.total}, 
            order_id: 1234,
            order_quantity: ${cart.length} , 
            currency: 'USD', 
            event_id: 'eventId0001',
            product_ids: ['123', '123'] }
         );;
      `,
                    }}
                /> */}
            </Head>

            <CheckoutHeader />
            <Styles.Main>
                <Styles.Col1>
                    <Styles.ShippingDropdown>
                        <Accordin
                            stepName={Steps[0]}
                            toggle={showOneAlways}
                            isOpen={openIndexes.includes(Steps[0])}
                        >
                            <Accordin.Header>Shipping Address</Accordin.Header>
                            <Accordin.Contents>
                                <Styles.ShippingDetailsContainer>
                                    <Input
                                        value={shipping.firstName}
                                        heading="First Name"
                                        placeholder="First Name"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                firstName: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.lastName}
                                        heading="Last Name"
                                        placeholder="Last Name"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                lastName: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.address}
                                        reference={ref}
                                        heading="Address"
                                        placeholder="Your Address"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-4"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                address: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.aptSuite}
                                        heading="Apt,Suite"
                                        placeholder="Apt, Suite (optional)"
                                        type="text"
                                        className="col-start-4 col-end-5"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                aptSuite: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.city}
                                        heading="City"
                                        placeholder="City"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                city: e.target.value,
                                            })
                                        }
                                    />
                                    <Input
                                        value={shipping.state}
                                        heading="State"
                                        placeholder="State"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                state: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.country}
                                        heading="Country"
                                        placeholder="Country"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                country: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={shipping.postalCode}
                                        heading="Postal Code"
                                        placeholder="Your Postal Code"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                postalCode: e.target.value,
                                            })
                                        }
                                    />
                                </Styles.ShippingDetailsContainer>
                                {warning ? (
                                    <WarningText>
                                        &#9888; Please Enter all the details
                                    </WarningText>
                                ) : null}
                                 {zipwarning ? (
                                    <WarningText>
                                        &#9888; Sorry !! Currently not delivering to this Postal Code
                                    </WarningText>
                                ) : null}

                                <Button
                                    varient="primary"
                                    onClick={() => {
                                        handleSavePay()
                                    }}
                                >
                                    Save and Pay
                                </Button>
                            </Accordin.Contents>
                        </Accordin>
                    </Styles.ShippingDropdown>

                    <Styles.ShippingDropdown>
                        <Accordin
                            stepName={Steps[1]}
                            toggle={showOneAlways}
                            isOpen={openIndexes.includes(Steps[1])}
                        >
                            <Accordin.Header>Make Payment</Accordin.Header>
                            <Accordin.Contents>
                                <Styles.ShippingDetailsContainer styleRegular>
                                    <Input
                                        value={payment.nameOnCard}
                                        heading="Name on card"
                                        placeholder="Name on card"
                                        type="text"
                                        required
                                        onChangeHandler={(e) =>
                                            handleInputChange('payment', {
                                                nameOnCard: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={payment.email}
                                        heading="Email"
                                        placeholder="Your Email"
                                        type="email"
                                        required
                                        onChangeHandler={(e) =>
                                            handleInputChange('payment', {
                                                email: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={payment.phone}
                                        heading="Phone Number"
                                        placeholder="Your phone number"
                                        type="tel"
                                        required
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        onChangeHandler={(e) =>
                                            handleInputChange('payment', {
                                                phone: e.target.value,
                                            })
                                        }
                                    />

                                    <Styles.StripeCardInput>
                                        <label htmlFor="stripe-card-input">
                                            Card details <span>*</span>
                                        </label>
                                        <CardElement
                                            id="stripe-card-input"
                                            onChange={(e) => handleCardInput(e)}
                                        />
                                    </Styles.StripeCardInput>
                                </Styles.ShippingDetailsContainer>

                                <Button
                                    varient="primary"
                                    onClick={(e) => handleProcessPayment(e)}
                                >
                                    Pay Now
                                </Button>
                            </Accordin.Contents>
                        </Accordin>
                    </Styles.ShippingDropdown>
                </Styles.Col1>

                <Styles.Col2 id="order-details-card" show={showOrderDetails}>
                    <h3>Your Orders</h3>

                    <Styles.OrderDetails>
                        {cart.map((item, key) => (
                            <CheckoutOrderProduct
                                key={key}
                                title={item.title}
                                img={item.img}
                                price={item.price.toString()}
                                quantity={item.quantity.toString()}
                            />
                        ))}
                    </Styles.OrderDetails>

                    <Styles.PricingDetails>
                        <Styles.Expanded>
                            <span>Original Price</span>
                            <h4>${orderDetails.originalPrice}</h4>
                        </Styles.Expanded>

                        <Styles.Expanded>
                            <span>Shipping and Taxes</span>
                            <h4>${orderDetails.shippingAndTaxes}</h4>
                        </Styles.Expanded>

                        <Styles.Expanded>
                            <span>Discount</span>
                            <h4>${orderDetails.discount}</h4>
                        </Styles.Expanded>
                    </Styles.PricingDetails>

                    <Styles.Total>
                        <Styles.Expanded>
                            <span>Total</span>
                            <h4>${limitDecimal(orderDetails.total)}</h4>
                        </Styles.Expanded>
                    </Styles.Total>
                </Styles.Col2>

                <Styles.Col3
                    show={showOrderDetails}
                    onClick={() => setShowOrderDetails((prev) => !prev)}
                >
                    <span>Order Details</span>
                    <div>
                        <h4>${limitDecimal(orderDetails.total)}</h4>
                        <ChevronDown />
                    </div>
                </Styles.Col3>
            </Styles.Main>
        </>
    )
}

const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutPageWrapper />
        </Elements>
    )
}

export default Checkout
