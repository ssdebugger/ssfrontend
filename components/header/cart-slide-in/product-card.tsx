import styled from 'styled-components'
import { Trash2 } from 'react-feather'
import { useAlert } from 'react-alert'

import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'

import { CartItem } from '@/types/cart'
import { useAddItem, useRemoveItem } from '@/context/cart'
import { limitDecimal } from '@/utils/limt-decimal'

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr;

    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid #d2d2d7;

    & > p {
        margin: 0;
        font-size: 1.125rem;
        color: ${(props) => props.theme.blueGray900};
        span {
            display: block;

            &.dashed-price {
                text-decoration: line-through;
                color: ${(props) => props.theme.blueGray500};
            }
        }

        /* span {
            display: block;
            text-align: center;
            font-size: 1.125rem;

            &.offer {
                color: #e85d00;
                font-size: 0.75rem;
            }
        } */
    }

    &:last-child {
        border: none;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        grid-template-columns: 100px 1fr 0.25fr;

        padding-bottom: 1.5rem;
        margin-bottom: 1.5rem;
        border-bottom: none;
    }
`

const CardImgContainer = styled.div`
    width: 100%;
    height: auto;
    margin-bottom: 1rem;
    text-align: center;
    grid-column: 1 / 4;

    img {
        max-width: 180px;
        max-height: 180px;
        width: auto;
        height: auto;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: 100px;
        height: 100px;
        margin-bottom: 0;
        grid-column: 1;

        img {
            width: 100%;
            height: auto;
        }
    }
`

const CardContent = styled.div`
    flex: 1;
    margin: 0 1.25rem 0 0;
    grid-column: 1 / 3;

    h4 {
        font-size: 1.125rem;
        margin-bottom: 0.5rem;
        text-transform: capitalize;
    }

    & > p {
        line-height: 1.4;
        font-size: 0.875rem;
        letter-spacing: 0.5px;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 1.25rem 0;
        grid-column: 2;
    }
`

const CouponStatus = styled.p`
    color: #e85d00;
    font-size: 0.75rem !important;
    margin-bottom: 0.25rem;
`

const CtaContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`

const Quantity = styled.div`
    margin-right: 2rem;

    label {
        margin-right: 0.75rem;
    }

    input {
        max-width: 4rem;
        padding: 0 0 0 0.5rem;
    }
`

const DeleteBtn = styled.button`
    width: 2rem;
    height: 2rem;

    svg {
        stroke-width: 1.75;
    }
`

interface ProductProps extends CartItem {
    discountAmount: number
}

export const ProductCard: React.FC<ProductProps> = ({
    sku,
    title,
    quantity,
    img,
    productid,
    price,
    discountAmount,
    inStockQuantity,
}) => {
    const alert = useAlert()
    const addToCart = useAddItem()
    const removeFromCart = useRemoveItem()
    const  offerproducts=[]

    let discountValue = price * (discountAmount / 100)
    let discountedPrice =
        offerproducts.includes(sku)
            ? price
            : limitDecimal(price - discountValue)

    // let discountedPrice = limitDecimal(price - discountValue)

    async function cartApiOperations(
        actionType: 'SQC' | 'RFC',
        productId: string | number,
        quantity: number
    ) {
        let fetchdata = {
            activity_type: actionType,
            email_id: window.localStorage.getItem('useremail'),
            pid: String(productId),
            quant: String(quantity),
        }

        let res = await fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
            {
                method: 'POST',

                body: JSON.stringify(fetchdata),
            }
        )
            .then()
            .catch((error) => console.log(error))

        return res
    }

    function handleQtyChange(e) {
        if (parseInt(e.target.value) > inStockQuantity) {
            alert.removeAll()
            alert.show(`Maximum quantity available: ${inStockQuantity}`)
        } else {
            const item: CartItem = {
                sku: sku,
                quantity: e.target.value,
                price: price,
                productid: productid,
                title: title,
                img: img,
                inStockQuantity: inStockQuantity,
            }
            console.log('item adding',item)
            addToCart(item)
            let curuser = window.localStorage.getItem('useremail')
            if (
                curuser !== 'false' &&
                curuser != undefined &&
                curuser != null &&
                curuser != 'null'
            ) {
                cartApiOperations('SQC', productid, quantity)
            }
        }
    }

    function removeItem() {
        removeFromCart(sku)
        let curuser = window.localStorage.getItem('useremail')
        if (
            curuser !== 'false' &&
            curuser != undefined &&
            curuser != null &&
            curuser != 'null'
        ) {
            cartApiOperations('RFC', productid, 1)
        }
    }

    return (
        <CardContainer>
            <CardImgContainer>
                <img src={img} alt="product img" />
            </CardImgContainer>

            <CardContent>
                {price !== discountedPrice ? (
                    <CouponStatus>Coupon Applied</CouponStatus>
                ) :
                //  (offerproducts.includes(sku) ? <CouponStatus>Pre Discounted Item</CouponStatus> ):
                  null
                
                    
              }
                <Heading4>{title}</Heading4>
                <Paragraph>Tableware</Paragraph>

                <CtaContainer>
                    <Quantity>
                        <label htmlFor="itemQuantity">Qty:</label>
                        <input
                            type="number"
                            id="itemQuantity"
                            value={quantity}
                            placeholder="0"
                            onChange={(e) => handleQtyChange(e)}
                            min={1}
                        />
                    </Quantity>

                    <DeleteBtn onClick={removeItem}>
                        <Trash2 />
                    </DeleteBtn>
                </CtaContainer>
            </CardContent>

            <Paragraph>
                {/* {price !== discountedPrice ? (
                    <span className="dashed-price">${price}</span>
                ) : sku === 'BNDL-CPBN-0710-0360' ? (
                    <span className="dashed-price">
                        ${(74.75 * quantity).toFixed(2)}
                    </span>
                ) : (
                    sku === 'BNDL-SHBD-0710-0360' && (
                        <span className="dashed-price">
                            ${(35.85 * quantity).toFixed(2)}
                        </span>
                    )
                )} */}

                {price !== discountedPrice && (
                    <span className="dashed-price">${price}</span>
                )}

                <span>${discountedPrice}</span>
            </Paragraph>
        </CardContainer>
    )
}
