import { PaymentIntent } from '@stripe/stripe-js'
import { IPaymentIntent } from '@/types/payment-intent'
import { limitDecimal } from '@/utils/limt-decimal'
import {
    IOrderDetails,
    IProcessPayment,
    IShipping,
    IShippingAndTaxes,
} from './checkout.types'

/**
 * Converts the first letter of a string to uppercase.
 * -----------
 * @params string
 * @returns string
 * */
const convertToUpperCase = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export const getShippingTaxes = async ({
    postalCode,
    originalPrice,
    discount,
}: {
    postalCode: string
    originalPrice: number
    discount: number
}) => {
    let data: IShippingAndTaxes = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/shippingtaxesv2?zipcode=${postalCode}&subtotal=${originalPrice}`
    ).then((res) => res.json())
    if(data.statusCode==400){
        let shippingAndTaxes = 0

        let total = limitDecimal(originalPrice  - discount)
        let errorCode=400
        let delivery_time = {'fedex': 'Not deliverable','usps':'Not deliverable'}
        return { shippingAndTaxes, total , errorCode,delivery_time }
    }
    else{
        let shippingAndTaxes = limitDecimal(data.tax_to_add + data.shipping_cost)
        let delivery_time = data.delivery
        let total = limitDecimal(originalPrice + shippingAndTaxes - discount)
        let errorCode=200
        console.log(delivery_time)
        return { shippingAndTaxes, total , errorCode,delivery_time }
    }
    
}

/**
 * Generates a new payment intent using stripe.
 * ---------------
 * @params ShipingDetails, OrderDetails
 * @returns Promise<paymentIntent>
 */
export const generatePaymentIntent = async ({
    shipping,
    orderDetails,
}: {
    shipping: IShipping
    orderDetails: IOrderDetails
}) => {
    let userDetails = {
        address: shipping.address,
        city: shipping.city,
        country: shipping.country,
        postalCode: shipping.postalCode,
        state: shipping.state,
        username: shipping.firstName + shipping.lastName,
    }

    let paymentIntentProps: IPaymentIntent = {
        price: orderDetails.originalPrice,
        discount: orderDetails.discount,
        tax: orderDetails.shippingAndTaxes,
        total: orderDetails.total,
        shippingAddress: userDetails,
        billingAddress: userDetails,
    }
    
    let res = await fetch('/api/payment', {
        method: 'POST',
        body: JSON.stringify(paymentIntentProps),
    })

    let data: PaymentIntent = await res.json()

    return data
}

export const processPayment = async ({
    stripe,
    elements,
    shippingDetails,
    paymentDetails,
    orderDetails,
    paymentIntent,
    router,
    clearCart,
    showAlert,
}: IProcessPayment) => {
    try {
        let shippingDetailsData = Object.entries(shippingDetails)
        let paymentDetailsData = Object.entries(paymentDetails)

        for (const item of shippingDetailsData) {
            if (
                (item[0].toLowerCase() !== 'aptsuite' && item[1] === '') ||
                undefined
            ) {
                showAlert(
                    `${convertToUpperCase(item[0])} is required and is empty.`
                )

                return
            }
        }

        for (const item of paymentDetailsData) {
            if (
                (item[0].toLocaleLowerCase() !== 'cardnum' && item[1] === '') ||
                undefined
            ) {
                showAlert(
                    `${convertToUpperCase(item[0])} is required and is empty.`
                )

                return
            }
        }

        let clientSecret = paymentIntent.client_secret
        let res = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement('card'),
            },
        })

        if (res.error) {
            showAlert(res.error.message)
        } else {
            let cart = JSON.parse(window.localStorage.getItem('cart'))
            let bill = JSON.parse(window.localStorage.getItem('billDetails'))
            var someDate = new Date()
            var numberOfDaysToAdd = 2
            var result = someDate.setDate(
                someDate.getDate() + numberOfDaysToAdd
            )
            var deliverydate = new Date(result).toJSON().slice(0, 10)

            let order_details = {
                total_item_count: cart.length,
                shipping_method: 'pending',
                status: 'Processing',
                zipcode: String(shippingDetails.postalCode),
                guestorder:
                    window.localStorage.username == undefined ||
                    window.localStorage.username == null ||
                    window.localStorage.username == 'null'
                        ? true
                        : false,
                email:
                    window.localStorage.username == undefined ||
                    window.localStorage.username == null ||
                    window.localStorage.username == 'null'
                        ? paymentDetails.email
                        : window.localStorage.useremail,
                items: cart,
                billing:
                    shippingDetails.firstName +
                    shippingDetails.lastName +
                    ',' +
                    shippingDetails.address +
                    ',' +
                    paymentDetails.phone +
                    ',' +
                    shippingDetails.postalCode,
                shipping:
                    shippingDetails.firstName +
                    shippingDetails.lastName +
                    ',' +
                    shippingDetails.address +
                    ',' +
                    paymentDetails.phone +
                    ',' +
                    shippingDetails.postalCode,

                payment_details: {
                    method: 'Stripe',
                    transaction_id: res['paymentIntent']['id'],
                    payment_status: res['paymentIntent']['status'],
                },
                expected_delivery_date: deliverydate,
                bill_details: {
                    items_subtotal: String(String(bill['originalPrice'].toFixed(2))),
                    redeemed_discount: {
                        type: 'percent',
                        value: String(
                            Number(bill['discount']['totalDiscount'].toFixed(2))
                        ),
                    },
                    order_total: String(String(bill['bagTotal'].toFixed(2))),
                    shipping_cost: 0,
                },
            }

            if (order_details.payment_details.payment_status === 'succeeded') {
                fetch(
                    'https://hqe9oxnhea.execute-api.us-east-2.amazonaws.com/dev/createorder',
                    {
                        method: 'POST',
                        body: JSON.stringify(order_details),
                        mode: 'no-cors',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }
                )
                    .then((res) => {
                        showAlert('Order Placed')
                        clearCart()
                        router.push('/shop')
                    })
                    .catch((res) => {
                        showAlert(
                            'Failed to create an order, amount deducted will be refunded.'
                        )
                    })
            } else {
                showAlert(
                    `Payment ${order_details.payment_details.payment_status}`
                )
            }
        }
    } catch (error) {
        showAlert('Payment Failed, please try again')
    }
}
