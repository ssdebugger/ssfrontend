import { limitDecimal } from '@/utils/limt-decimal'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handlePayment(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        console.log(req.body)
        let billDetails = JSON.parse(req.body)
        let billingPrice = Math.ceil((billDetails.price + billDetails.tax))
        
        const stripe = require('stripe')(
            'sk_test_51JfLM2SG5BNiWvSgjLdXVI9HCV8ypHpghCaTqspW9b5niFYIgHpmmYicprwoQmD6UlVR81dRMfhXh5i03IrTojLx00JjzPH0RL'
        )

        const paymentIntent = await stripe.paymentIntents.create({
            amount: billingPrice*100,
            currency: 'usd',
            description: 'Sellsage Billing Service',
            shipping: {
                name: billDetails.ship.username,
                address: {
                    city: billDetails.ship.city,
                    country: 'US',
                    postal_code: billDetails.ship.zipCode,
                    state: billDetails.ship.state,
                    line1: billDetails.ship.location,
                },
            },
        })
        console.log('payment intent', paymentIntent)
        res.status(200).json(paymentIntent)
    }
}
