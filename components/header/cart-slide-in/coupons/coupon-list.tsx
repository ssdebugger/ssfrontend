import { Coupon } from '@/types/coupon'
import { CouponsList, CouponItem } from '../cart-slide-in.style'
import { CouponCard, CouponCardProps } from '../coupon-card'

interface Props {
    couponData: Array<Coupon>
    currentCouponId: CouponCardProps['selectedId']
    handleSelection: CouponCardProps['handleSelection']
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
                        minSpend={coupon.minSpend}
                        couponId={coupon.id}
                        discountAmount={coupon.amount}
                        discountType={coupon.type}
                        selectedId={currentCouponId}
                        handleSelection={handleSelection}
                    />
                </CouponItem>
            ))}
        </CouponsList>
    )
}
