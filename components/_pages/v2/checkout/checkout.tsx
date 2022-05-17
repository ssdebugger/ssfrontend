import React from 'react'
import Head from 'next/head'

import * as Styles from './checkout.styles'

import Footer from '@/components/footer'
import { Header } from '@/components/header'
import { Accordin } from './checkout-accordin'
import { Input } from '@/components/input'
import { CheckoutOrderProduct } from './checkout-cards'
import { ChevronDown } from 'react-feather'

const Checkout = () => {
    const [showOrderDetailsCard, setShowOrderDetailsCard] =
        React.useState(false)

    return (
        <>
            <Head>
                <title>Checkout - Sellsage</title>
            </Head>
            <Header />

            <Styles.Main>
                <Styles.Col1>
                    <Styles.ShippingDropdown>
                        <Accordin stepName="a">
                            <Accordin.Header>Shipping Address</Accordin.Header>
                            <Accordin.Contents>
                                <Styles.ShippingDetailsContainer>
                                    <Input
                                        heading="First Name"
                                        placeholder="First Name"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                    />

                                    <Input
                                        heading="Last Name"
                                        placeholder="Last Name"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
                                    />

                                    <Input
                                        heading="Address"
                                        placeholder="Your Address"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-4"
                                    />

                                    <Input
                                        heading="Apt,Suite"
                                        placeholder="Apt, Suite (optional)"
                                        type="text"
                                        className="col-start-4 col-end-5"
                                    />

                                    <Input
                                        heading="City"
                                        placeholder="City"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                    />

                                    <Input
                                        heading="Country"
                                        placeholder="Country"
                                        type="text"
                                        required
                                        className="col-start-3 col-end-5"
                                    />

                                    <Input
                                        heading="Postal Code"
                                        placeholder="Your Postal Code"
                                        type="text"
                                        required
                                        className="col-start-1 col-end-3"
                                    />
                                </Styles.ShippingDetailsContainer>
                            </Accordin.Contents>
                        </Accordin>
                    </Styles.ShippingDropdown>

                    <Styles.ShippingDropdown>
                        <Accordin stepName="b">
                            <Accordin.Header>Make Payment</Accordin.Header>
                            <Accordin.Contents>
                                <Styles.ShippingDetailsContainer styleRegular>
                                    <Input
                                        heading="Name on card"
                                        placeholder="Name on card"
                                        type="text"
                                        required
                                    />

                                    <Input
                                        heading="Email"
                                        placeholder="Your Email"
                                        type="email"
                                        required
                                    />

                                    <Input
                                        heading="Phone Number"
                                        placeholder="Your phone number"
                                        type="tel"
                                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                        required
                                    />

                                    <Input
                                        heading="Card Details"
                                        placeholder="Card Number"
                                        type="text"
                                    />
                                </Styles.ShippingDetailsContainer>
                            </Accordin.Contents>
                        </Accordin>
                    </Styles.ShippingDropdown>
                </Styles.Col1>

                <Styles.Col2
                    id="order-details-card"
                    show={showOrderDetailsCard}
                >
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
                    show={showOrderDetailsCard}
                    onClick={() => setShowOrderDetailsCard((prev) => !prev)}
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
