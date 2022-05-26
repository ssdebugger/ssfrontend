import React from 'react'
import Head from 'next/head'

import * as Styles from './checkout.styles'

import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Accordin } from './checkout-accordion'
import { Input } from '@/components/input'
import { CheckoutOrderProduct } from './checkout-cards'
import { ChevronDown } from 'react-feather'
import { Button } from '@/components/buttons'

const Steps = ['a', 'b']

interface IShipping {
    firstName: string
    lastName: string
    address: string
    aptSuite: string
    city: string
    country: string
    postalCode: string
}

interface IPayment {
    nameOnCard: string
    email: string
    phone: string
    cardNum: string
}

const Checkout = () => {
    const [showOrderDetails, setShowOrderDetails] = React.useState(false)
    const [openIndexes, setOpenIndexes] = React.useState(['a'])
    const [shipping, setShipping] = React.useState<IShipping>({
        firstName: '',
        lastName: '',
        address: '',
        aptSuite: '',
        city: '',
        country: '',
        postalCode: '',
    })

    const [payment, setPayment] = React.useState<IPayment>({
        nameOnCard: '',
        email: '',
        phone: ' ',
        cardNum: '',
    })

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

    React.useEffect(() => console.log(shipping), [shipping])
    React.useEffect(() => console.log(payment), [payment])

    return (
        <>
            <Head>
                <title>Checkout - Sellsage</title>
            </Head>
            <Header />

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
                                        onChangeHandler={
                                            (e) =>
                                                handleInputChange('shipping', {
                                                    firstName: e.target.value,
                                                })
                                            // setShipping((prev) => ({
                                            //     ...prev,
                                            //     firstName: e.target.value,
                                            // }))
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
                                        value={shipping.country}
                                        heading="Country"
                                        placeholder="Country"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
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
                                        className="col-start-1 col-end-3"
                                        onChangeHandler={(e) =>
                                            handleInputChange('shipping', {
                                                postalCode: e.target.value,
                                            })
                                        }
                                    />
                                </Styles.ShippingDetailsContainer>

                                <Button
                                    varient="primary"
                                    onClick={() => setOpenIndexes(['b'])}
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
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        required
                                        onChangeHandler={(e) =>
                                            handleInputChange('payment', {
                                                phone: e.target.value,
                                            })
                                        }
                                    />

                                    <Input
                                        value={payment.cardNum}
                                        heading="Card Details"
                                        placeholder="Card Number"
                                        type="text"
                                        required
                                        onChangeHandler={(e) =>
                                            handleInputChange('payment', {
                                                cardNum: e.target.value,
                                            })
                                        }
                                    />
                                </Styles.ShippingDetailsContainer>
                                <Button varient="primary">Pay Now</Button>
                            </Accordin.Contents>
                        </Accordin>
                    </Styles.ShippingDropdown>
                </Styles.Col1>

                <Styles.Col2 id="order-details-card" show={showOrderDetails}>
                    <h3>Your Orders</h3>

                    <Styles.OrderDetails>
                        <CheckoutOrderProduct />
                        <CheckoutOrderProduct />
                    </Styles.OrderDetails>

                    <Styles.PricingDetails>
                        <Styles.Expanded>
                            <span>Original Price</span>
                            <h4>$9.50</h4>
                        </Styles.Expanded>

                        <Styles.Expanded>
                            <span>Shipping and Taxes</span>
                            <h4>$9.50</h4>
                        </Styles.Expanded>

                        <Styles.Expanded>
                            <span>Discount</span>
                            <h4>$9.50</h4>
                        </Styles.Expanded>
                    </Styles.PricingDetails>

                    <Styles.Total>
                        <Styles.Expanded>
                            <span>Total</span>
                            <h4>$9.50</h4>
                        </Styles.Expanded>
                    </Styles.Total>
                </Styles.Col2>

                <Styles.Col3
                    show={showOrderDetails}
                    onClick={() => setShowOrderDetails((prev) => !prev)}
                >
                    <span>Order Details</span>
                    <div>
                        <h4>$9.50</h4>
                        <ChevronDown />
                    </div>
                </Styles.Col3>
            </Styles.Main>

            <Footer />
        </>
    )
}

export default Checkout
