import { Dispatch, SetStateAction } from 'react'

// utility functions
import { getFromLocal } from '@/utils/local-storage'
import { getCustomCoupon } from '@/utils/get-custom-coupon'

// styled components
import { Button } from '@/components/buttons'
import { CouponForm, CouponInput } from '../cart-slide-in.style'

interface Props {
    originalBagValue: number
    customCouponDetails: userCouponDetails
    setCustomCouponDetails: Dispatch<SetStateAction<userCouponDetails>>
    setAlert: (value: SetStateAction<string>) => void
    setDiscount: Dispatch<SetStateAction<number>>
}

export interface userCouponDetails {
    coupon_code: string
    email: string
    total: number
}

export const CustomCoupon: React.FC<Props> = ({
    setAlert,
    setDiscount,
    originalBagValue,
    customCouponDetails,
    setCustomCouponDetails,
}) => {
    function handleCouponInput(e) {
        let couponValue = e.target.value

        if (couponValue.length > 3) {
            let data = {
                coupon_code: couponValue,
                email: '',
                total: originalBagValue,
            }

            setCustomCouponDetails(data)
        }
    }

    async function handleCouponSubmit(e) {
        e.preventDefault()

        let localUserEmail = localStorage.getItem('useremail')
        let isGuestUser = localUserEmail === 'False' || localUserEmail === null

        let userEmail = isGuestUser ? 'guest1@sellsage.com' : localUserEmail

        let couponDetails = customCouponDetails
        couponDetails.email = userEmail
        couponDetails.total = originalBagValue
        setCustomCouponDetails(couponDetails)

        let customCoupon = await getCustomCoupon(couponDetails)

        if (customCoupon.message === 'Available') {
            setAlert('')
            setDiscount(customCoupon.to_deduct)
        } else {
            setAlert(customCoupon.message)
        }
    }

    return (
        <CouponForm onSubmit={(e) => handleCouponSubmit(e)}>
            <CouponInput
                placeholder="Enter your Coupon"
                type={'text'}
                onChange={(e) => handleCouponInput(e)}
            />

            <Button varient="primary" fill='true' type="submit">
                Apply
            </Button>
        </CouponForm>
    )
}
