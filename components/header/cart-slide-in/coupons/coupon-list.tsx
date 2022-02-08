import { Coupon } from '@/types/coupon'
import { CouponsList, CouponItem } from '../cart-slide-in.style'
import { CouponCard, CouponCardProps } from '../coupon-card'

interface Props {
    couponData: Array<Coupon>
    currentCouponId: CouponCardProps['selectedId']
    handleSelection: (coupon: Coupon) => void
}
export const CouponList: React.FC<Props> = ({
    couponData,
    currentCouponId,
    handleSelection,
}) => {
    return (
        <CouponsList>
            {couponData.map((coupon) => (
                <CouponItem key={coupon.id}>
                    <CouponCard
                        couponData={coupon}
                        selectedId={currentCouponId}
                        handleSelection={handleSelection}
                    />
                </CouponItem>
            ))}
        </CouponsList>
    )
}
