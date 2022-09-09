import { IPaymentIntent } from '@/types/payment-intent'
import { limitDecimal } from '@/utils/limt-decimal'
import { PaymentIntent } from '@stripe/stripe-js'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handlePayment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        if (req.method === 'POST') {
            let bill: IPaymentIntent = JSON.parse(req.body)

            console.log(bill)

            let totalPrice = bill.total
            let billingPrice = bill.total

            const stripe = require('stripe')(
                'sk_live_8FvXoKEV1y0HiYXKd09heslO00IZdmNx1m'
            )
            // const stripe = require('stripe')(
            //     'sk_test_51JfLM2SG5BNiWvSgjLdXVI9HCV8ypHpghCaTqspW9b5niFYIgHpmmYicprwoQmD6UlVR81dRMfhXh5i03IrTojLx00JjzPH0RL'
            // )
            console.log(billingPrice*100,'billingprice')
            const paymentIntent: PaymentIntent =
                await stripe.paymentIntents.create({
                    amount: limitDecimal(billingPrice * 100),
                    currency: 'usd',
                    description: 'Sellsage Billing Service',
                    shipping: {
                        name: bill.shippingAddress.username,
                        address: {
                            city: bill.shippingAddress.city,
                            country: 'US',
                            postal_code: bill.shippingAddress.postalCode,
                            state: bill.shippingAddress.state,
                            line1: bill.shippingAddress.address,
                        },
                    },
                })
            console.log(paymentIntent)
            res.status(200).json(paymentIntent)
        }
    } catch (error) {
        res.status(400)
        console.log(error,'paymentintenterror')
    }
}
