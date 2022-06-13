import { Dispatch, SetStateAction } from 'react'

// utility functions
import { getFromLocal,setToLocal } from '@/utils/local-storage'
import { getCustomCoupon } from '@/utils/get-custom-coupon'
import { useCart } from '@/context/cart'

// styled components
import { Button } from '@/components/buttons'
import { CouponForm, CouponInput } from '../cart-slide-in.style'

interface Props {
    offerproducts: Array<String>
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
    offerproducts,
    customCouponDetails,
    setCustomCouponDetails,
}) => {
    const {cart}=useCart()
    var originalBagValue=Number(0)
    cart.map(products => {offerproducts.includes(products.sku)? null : originalBagValue+=Number(products.price)}) 
    
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
        
        e.target.innerHTML = 'Applying ...'
        e.target.disabled = true

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
            e.target.innerHTML = 'Apply'
            e.target.disabled = false
            setDiscount(customCoupon.to_deduct)
            setAlert('Coupon Applied')
            setToLocal('coupon',customCoupon.coupon)
        } else {
            setAlert(customCoupon.message)
            e.target.innerHTML = 'Apply'
            e.target.disabled = false
        }
    }

    return (
        <CouponForm>
            <CouponInput
                placeholder="Enter your Coupon"
                type={'text'}
                onChange={(e) => handleCouponInput(e)}
            />  
            <Button onClick={(e) => handleCouponSubmit(e)} varient="primary" fill='true'>
                Apply
            </Button>
         
        </CouponForm>
    )
}
