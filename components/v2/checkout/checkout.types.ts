import { PaymentIntent, Stripe, StripeElements } from '@stripe/stripe-js'
import { NextRouter } from 'next/router'

export interface IShipping {
    firstName: string
    lastName: string
    address: string
    aptSuite: string
    city: string
    state: string
    country: string
    postalCode: string
}

export interface IPayment {
    nameOnCard: string
    email: string
    phone: string
    cardNum: string
}

export interface IOrderDetails {
    originalPrice: number
    shippingAndTaxes: number
    discount: number
    total: number
}

export interface IShippingAndTaxes {
    statusCode: number
    shipping_method: string
    shipping_cost: number
    tax_percent: number
    tax_to_add: number
}

export interface IProcessPayment {
    stripe: Stripe
    elements: StripeElements
    shippingDetails: IShipping
    paymentDetails: IPayment
    orderDetails: IOrderDetails
    paymentIntent: PaymentIntent
    router: NextRouter
    clearCart: () => void
    showAlert: (msg: string) => void
}
