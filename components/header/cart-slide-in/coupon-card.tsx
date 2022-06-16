import { Voucher } from '@/components/svg/voucher'
import { Paragraph } from '@/components/typography/paragraph'
import { Coupon } from '@/types/coupon'
import styled from 'styled-components'

const CardContainer = styled.div<{ cardSelected: boolean }>`
    display: flex;
    flex-direction: column;

    width: 230px;
    padding: 1.5rem;
    border-radius: 10px;

    color: ${(props) =>
        props.cardSelected ? '#fff' : props.theme.blueGray800};
    background-color: ${(props) => (props.cardSelected ? '#019875' : '#fff')};
    box-shadow: 2px 10px 15px -3px rgba(226, 232, 240, 0.5),
        2px 4px 6px -4px rgba(226, 232, 240, 0.5);
    border: 1px solid rgb(226, 232, 240);

    transition: 0.25s ease;
`

const Row1 = styled.div<{ cardSelected: boolean }>`
    display: flex;
    align-items: center;
    padding-bottom: 0.875rem;

    svg {
        width: 32px;
        height: 55px;

        g {
            fill: ${(props) =>
                props.cardSelected ? '#fff' : props.theme.blueGray800};
        }
    }
`

const Row1Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;

    p {
        font-weight: 800;
        font-size: 1.75rem;
    }

    span {
        font-weight: 500;
    }
`
const Row2 = styled.div<{ cardSelected: boolean }>`
    margin-bottom: 1.875rem;

    p {
        margin: 0.875rem 0 0;
        padding: 0.875rem 0 0;
        color: inherit;
        line-height: 1.45;
        border-top: 2px solid;
        border-top-color: ${(props) =>
            props.cardSelected ? '#2fbf97' : '#e7e7e9'};
    }
`

const Row3 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

// Toggle Button
const ToggleBtn = styled.label`
    width: 50px;
    height: 26px;
    position: relative;
    border-radius: 25px;
    cursor: pointer;
`

const ToggleBtnCircle = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;
    border-radius: 25px;
    background: #d3d3d4;
    transition: ${(props) => props.theme.transition};

    &:after {
        content: '';
        width: 18px;
        height: 18px;
        position: absolute;
        left: 4px;
        bottom: 4px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 2px 6px 0 #c4c4c4;
        transition: 0.5s ease;
    }
`

const ToggleInputBtn = styled.input`
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + ${ToggleBtnCircle} {
        background: rgba(255, 255, 255, 0.4);

        &:after {
            transform: translateX(24px);
            box-shadow: 0 2px 6px 0 rgb(196, 196, 196, 0.8);
        }
    }
`

export interface CouponCardProps {
    selectedId: string
    couponData: Coupon
    handleSelection: (coupon: Coupon) => void
}

export const CouponCard: React.FC<CouponCardProps> = ({
    selectedId,
    couponData,
    handleSelection,
}) => {
    let isCouponSelected = selectedId === couponData.id

    return (
        <CardContainer cardSelected={isCouponSelected} id={couponData.id}>
            <Row1 cardSelected={isCouponSelected}>
                <Voucher />

                <Row1Content>
                    <p>
                        {couponData.type === 'percent'
                            ? `${couponData.amount}%`
                            : `$${couponData.amount}`}
                    </p>
                    <span>Discount</span>
                </Row1Content>
            </Row1>

            <Row2 cardSelected={isCouponSelected}>
                <Paragraph>
                    Use this coupon to get flat{' '}
                    {couponData.type === 'percent'
                        ? `${couponData.amount}%`
                        : `$${couponData.amount}`}{' '}
                    discount on <b>non-discounted</b> items with order value
                    above ${couponData.minSpend}.
                </Paragraph>
            </Row2>

            <Row3>
                <span>{isCouponSelected ? 'Active' : 'Inactive'}</span>

                <ToggleBtn>
                    <ToggleInputBtn
                        checked={isCouponSelected}
                        type={'checkbox'}
                        onChange={() => handleSelection(couponData)}
                    />
                    <ToggleBtnCircle />
                </ToggleBtn>
            </Row3>
        </CardContainer>
    )
}
