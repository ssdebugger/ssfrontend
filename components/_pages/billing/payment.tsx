import { loadStripe } from '@stripe/stripe-js'
import {
    useElements,
    useStripe,
    Elements,
    CardElement,
    CardCvcElement,
} from '@stripe/react-stripe-js'
import { Container } from 'components/container/regular'
import { CommonInputStyles, Input } from 'components/input/index'
import { Button } from '@/components/buttons'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Heading3, Heading4, MainHeading } from 'components/typography/heading'
import { useAlert } from 'react-alert'
import { useRouter } from 'next/router'
import {
    Form,
    PaymentPageContent,
    PriceContainer,
    PriceDetails,
    ShippingAddressContainer,
    ShippingAddressDetails,
    ShippingAndPrice,
} from './payment.style'

import { useUser } from '@/context/user'
import { Paragraph } from '@/components/typography/paragraph'
import { useClearCart } from '@/context/cart'
import { limitDecimal } from '@/utils/limt-decimal'

const PaymentContainer = styled(Container)``
const ShippingContainer = styled(Container)`
    background-color: #fff;
    width: 100%;
    height: 100vh;
`

const InputContainer = styled.div`
    margin: 1rem 0 1.5rem;
`

const CardInput = styled.div`
    ${CommonInputStyles}

    margin: 0.875rem 0 0 0;
`

const stripePromise = loadStripe('pk_live_d2HzkdbXHfM31jQJbUsPZiMe00VrTpDvSg')
var paymentIntent
var paymentdata

const Checkoutform = (props) => {
    const stripe = useStripe()
    const clearCart = useClearCart()
    const alert = useAlert()
    const elements = useElements()
    console.log(props, 'checkout form props')
    useEffect(() => {
        console.clear()
        console.log('payment intent props', props)

        fetch('/api/payment', {
            method: 'POST',
            body: JSON.stringify(props),
        })
            .then((res) => {
                paymentIntent = res.json()
                console.log(paymentIntent, 'payment intent')
            })
            .catch((error) => {
                console.log(error)
            })
    }, [props])

    const router = useRouter()
    const [error, setError] = useState({ message: 'Enter card details' })
    const [cardComplete, setCardComplete] = useState(false)

    const [billingDetails, setBillingDetails] = useState({
        email: '',
        phone: '',
        name: '',
    })

    const processpayment = (e) => {
        e.preventDefault()
        if (cardComplete) {
            if (
                billingDetails.name === '' ||
                billingDetails.email === '' ||
                billingDetails.phone === ''
            ) {
                alert.show('Please fill all the fields')
            } else {
                paymentIntent.then((res) => {
                    paymentdata = res.client_secret
                    stripe
                        .confirmCardPayment(paymentdata, {
                            payment_method: {
                                card: elements.getElement('card'),
                            },
                        })
                        .then((res) => {
                            if (res.error) {
                                alert.show(res.error.message)
                            } else {
                                console.log(billingDetails, 'billingdeatils')
                                let cart = JSON.parse(
                                    window.localStorage.getItem('cart')
                                )
                                let shippingdetails = JSON.parse(
                                    window.localStorage.getItem('ship')
                                )
                                let bill = JSON.parse(
                                    window.localStorage.getItem('billDetails')
                                )
                                let billingdetails =
                                    window.localStorage.getItem('bill') ==
                                        undefined || null
                                        ? shippingdetails
                                        : JSON.parse(
                                              window.localStorage.getItem(
                                                  'bill'
                                              )
                                          )
                                var someDate = new Date()
                                var numberOfDaysToAdd = 2
                                var result = someDate.setDate(
                                    someDate.getDate() + numberOfDaysToAdd
                                )
                                var deliverydate = new Date(result)
                                    .toJSON()
                                    .slice(0, 10)

                                let order_details = {
                                    total_item_count: cart.length,
                                    shipping_method: 'pending',
                                    status: 'Processing',
                                    zipcode: String(shippingdetails['zipCode']),
                                    guestorder:
                                        window.localStorage.username ==
                                            undefined ||
                                        window.localStorage.username == null ||
                                        window.localStorage.username == 'null'
                                            ? true
                                            : false,
                                    email:
                                        window.localStorage.username ==
                                            undefined ||
                                        window.localStorage.username == null ||
                                        window.localStorage.username == 'null'
                                            ? billingDetails.email
                                            : window.localStorage.useremail,
                                    items: cart,
                                    billing:
                                        billingdetails['username'] +
                                        ',' +
                                        billingdetails['location'],
                                    shipping:
                                        shippingdetails['username'] +
                                        ',' +
                                        shippingdetails['location'],
                                    payment_details: {
                                        method: 'Stripe',
                                        transaction_id:
                                            res['paymentIntent']['id'],
                                        payment_status:
                                            res['paymentIntent']['status'],
                                    },
                                    expected_delivery_date: deliverydate,
                                    bill_details: {
                                        items_subtotal: String(
                                            String(bill['bagTotal'].toFixed(2))
                                        ),
                                        redeemed_discount: {
                                            type: 'percent',
                                            value: String(
                                                Number(
                                                    bill['discount'][
                                                        'totalDiscount'
                                                    ].toFixed(2)
                                                )
                                            ),
                                        },
                                        order_total: String(
                                            String(bill['bagTotal'].toFixed(2))
                                        ),
                                        shipping_cost: 0,
                                    },
                                }
                                console.log('order details', order_details)

                                fetch(
                                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/createorder',
                                    {
                                        method: 'POST',
                                        body: JSON.stringify(order_details), // *GET, POST, PUT, DELETE, etc.
                                        mode: 'no-cors', // no-cors, *cors, same-origin
                                        headers: {
                                            'Content-Type': 'application/json',
                                            // 'Content-Type': 'application/x-www-form-urlencoded',
                                        },
                                    }
                                )
                                    .then((res) => {
                                        clearCart()
                                        alert.show('Order placed')
                                        router.push('/shop')
                                    })
                                    .catch((err) => {
                                        console.log(err)
                                        alert.show(
                                            'Payment Failed, please try again'
                                        )
                                    })
                            }
                        })
                        .catch((error) => console.log(error))
                })
            }
        } else {
            alert.show(error.message)
        }
    }

    return (
        <PaymentPageContent>
            <Form className="Form">
                <MainHeading margin="4rem 0 2rem 0">
                    Make your payment
                </MainHeading>

                <InputContainer>
                    <Input
                        placeholder=""
                        value={billingDetails.name}
                        onChangeHandler={(e) =>
                            setBillingDetails({
                                ...billingDetails,
                                name: e.target.value,
                            })
                        }
                        heading="Name on card"
                        type="text"
                    />
                </InputContainer>

                <InputContainer>
                    <Input
                        placeholder=""
                        value={billingDetails.email}
                        onChangeHandler={(e) =>
                            setBillingDetails({
                                ...billingDetails,
                                email: e.target.value,
                            })
                        }
                        heading="Email"
                        type="text"
                    />
                </InputContainer>

                <InputContainer>
                    <Input
                        placeholder=""
                        value={billingDetails.phone}
                        onChangeHandler={(e) =>
                            setBillingDetails({
                                ...billingDetails,
                                phone: e.target.value,
                            })
                        }
                        heading="Phone Number"
                        type="text"
                    />
                </InputContainer>

                <InputContainer>
                    <label>Card Details</label>
                    <CardInput>
                        <CardElement
                            onChange={(e) => {
                                setError(e.error)
                                setCardComplete(e.complete)
                            }}
                        />
                    </CardInput>
                </InputContainer>

                <Button
                    fill
                    size="large"
                    onClick={(e) => processpayment(e)}
                    varient="primary"
                >
                    Pay
                </Button>
            </Form>

            <ShippingAndPrice>
                <ShippingAddressContainer>
                    <Heading3>Shipping Address</Heading3>

                    {props.ship == undefined || null ? null : (
                        <ShippingAddressDetails>
                            <Heading4>{props.ship['username']}</Heading4>
                            <Paragraph>{props.ship['location']}</Paragraph>
                        </ShippingAddressDetails>
                    )}
                </ShippingAddressContainer>
                <ShippingAddressContainer>
                    <Heading3>Billing Address</Heading3>
                    {props.bill == undefined || null ? null : (
                        <ShippingAddressDetails>
                            <Heading4>{props.bill['username']}</Heading4>
                            <Paragraph>{props.bill['location']}</Paragraph>
                        </ShippingAddressDetails>
                    )}
                </ShippingAddressContainer>

                <PriceDetails>
                    <Heading3>Payment Details</Heading3>

                    <PriceContainer>
                        <span>Original Price</span>{' '}
                        <span>${Number(props.total).toFixed(2)}</span>
                    </PriceContainer>
                    <PriceContainer>
                        <span>Shipping and Taxes</span>{' '}
                        <span>${props.tax}</span>
                    </PriceContainer>
                    <PriceContainer>
                        <span>Discount</span>{' '}
                        <span>${Number(props.discount).toFixed(2)}</span>
                    </PriceContainer>

                    <PriceContainer>
                        <span>Total Price</span>
                        <span>$ {limitDecimal(props.price + props.tax)}</span>
                    </PriceContainer>
                </PriceDetails>
            </ShippingAndPrice>
        </PaymentPageContent>
    )
}

const PaymentGateway = (props) => {
  
    return (
        <ShippingContainer>
            <PaymentContainer>
                <Elements stripe={stripePromise}>
                    <Checkoutform
                        price={props.price}
                        tax={props.tax}
                        discount={props.discount}
                        total={props.total}
                        ship={props.ship}
                        bill={props.bill}
                    />
                </Elements>
            </PaymentContainer>
        </ShippingContainer>
    )
}

export default PaymentGateway
