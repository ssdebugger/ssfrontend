import { userCouponDetails } from '@/components/header/cart-slide-in/coupons/custom-coupon'

/**
 * To get coupon detials of the couponId entered by the customer.
 * ----
 * @params couponDetails - user enetered coupon details along with email and bag total.
 * @returns couponData - contains a message and details regarding the coupon if valid.
 */
export async function getCustomCoupon(couponDetails: userCouponDetails) {
    try {
        let couponResponse = await fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/applycoupon',
            {
                method: 'POST',
                // mode: 'no-cors',
                body: JSON.stringify(couponDetails),
            }
        )
            .then((data) => data.json())
            .then((res) => res.body)

        return couponResponse
    } catch (error) {
        console.log(error)
    }
}
