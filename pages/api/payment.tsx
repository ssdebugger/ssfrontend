import { NextApiRequest, NextApiResponse } from 'next'

export default async function handlePayment(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST') {
        console.log(req.body)
        let billDetails = JSON.parse(req.body)
        let billingPrice = Math.round(
            (billDetails.price + billDetails.tax + Number.EPSILON) * 100
        )

        const stripe = require('stripe')(
            'sk_live_8FvXoKEV1y0HiYXKd09heslO00IZdmNx1m'
        )

        const paymentIntent = await stripe.paymentIntents.create({
            amount: billingPrice,
            currency: 'usd',
            description: 'Sellsage Billing Service',
            shipping: {
                name: billDetails.ship.username,
                address:{
                    city:billDetails.ship.city,
                    country:'US',
                    postal_code:billDetails.ship.zipCode,
                    state:billDetails.ship.state,
                    line1:billDetails.ship.location

                }
            },
        })
        console.log('payment intent',paymentIntent)
        res.status(200).json(paymentIntent)
    }
}
