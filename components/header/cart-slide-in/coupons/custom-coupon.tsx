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
        let userEamil = getFromLocal('useremail')
        let isGuestUser = userEamil === null

        setAlert('')
        if (couponValue.length > 3) {
            let data = {
                coupon_code: couponValue,
                email: isGuestUser ? 'guest1@selslage.com' : userEamil,
                total: originalBagValue,
            }

            setCustomCouponDetails(data)
        }
    }

    async function handleCouponSubmit(e) {
        e.preventDefault()
        let customCoupon = await getCustomCoupon(customCouponDetails)

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
                placeholder="Enter your CouponId"
                type={'text'}
                onChange={(e) => handleCouponInput(e)}
            />

            <Button varient="primary" fill type="submit">
                Apply
            </Button>
        </CouponForm>
    )
}
