import { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { ShoppingBag, Check } from 'react-feather'

import { Heading3, SubHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { useAddItem } from '@/context/cart'

export const DashedHeading = styled(Heading3)`
    color: #fa3b56;
    text-decoration: line-through;
    margin-bottom: 0.25rem;
`

export const Container = styled.div`
    position: relative;
    width: 260px;
    height: max-content;
    padding-top: 22%;
`

export const NewLaunch = styled.span<{ top?: string; left?: string }>`
    position: absolute;
    top: ${(props) => (props.top ? props.top : 0)};
    left: ${(props) => (props.left ? props.left : 0)};
    background: #c2410c;
    color: #fff;
    font-size: 0.75rem;
    padding: 0.125rem 0.5rem;
    border-radius: 4px;
    z-index: 1;
`

export const ProductContainer = styled.a`
    display: block;

    padding: 1.2rem 1.25rem 3.25rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: ${(props) => props.theme.transition};

    &:hover {
        background: ${(props) => props.theme.cream200};
    }
`

export const ProductImageContainer = styled.div`
    margin-top: -35%;
    min-width: 200px;
    min-height: 200px;
`

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
`

export const ProductContent = styled.div`
    h2 {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-family: ${(props) => props.theme.marcellus};
        font-weight: 500;
        margin: 0.75rem 0 1rem;
        text-transform: capitalize;
    }

    span {
        display: block;
        font-size: 0.75rem;
        text-transform: uppercase;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: ${(props) => props.theme.blueGray500};
    }

    p {
        margin-bottom: 0.5rem;
        font-size: 0.875rem;
    }

    h3 {
        font-size: 1rem;
        font-weight: 500;
    }
`

export const RatingsContainer = styled.div`
    margin-bottom: 0.75rem;

    svg {
        width: 16px;
        height: 16px;
        stroke-width: 1.1;
        fill: ${(props) => props.theme.blueGray300};
        stroke: ${(props) => props.theme.blueGray300};
    }
`

export const AddToBagButton = styled.button`
    background: #fff;
    width: max-content;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    padding: 0.875rem 1.5rem;
    border-radius: 50px;
    border: 1px solid #e5e5e5;
    transition: ${(props) => props.theme.transition};

    svg {
        width: 20px;
        height: 20px;
    }

    span {
        margin-left: 0.625rem;
    }

    &:hover,
    &:focus {
        border-color: ${(props) => props.theme.green500};
    }

    &:disabled {
        background: rgba(1, 152, 117, 0.1);
        border-color: rgba(1, 152, 117, 0.2);
        color: ${(props) => props.theme.green700};
    }
`

export const ProductCard = (props) => {
    console.log(props)
    const addToCart = useAddItem()
    const [isAddedToCart, setIsAddedToCart] = useState(false)

    function handleClick() {
        addToCart({
            sku: props.sku,
            quantity: 1,
            title: props.name,
            img: props.image,
            productid: props.productId,
            price: props.price,
            inStockQuantity: props.inStockQuantity,
        })

        setIsAddedToCart((prevState) => !prevState)

        let addToCartTimeout = setTimeout(() => {
            setIsAddedToCart((prevState) => !prevState)
        }, 1500)

        let fetchdata = {
            activity_type: 'ATC',
            email_id: window.localStorage.getItem('useremail'),
            pid: props.productId,
            quant: 1,
        }

        fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
            {
                method: 'POST',
                body: JSON.stringify(fetchdata),
            }
        )
            .then((res) => console.log('added to cart', fetchdata, res))
            .catch((err) => console.log('Failed to add items', err))

        return () => clearTimeout(addToCartTimeout)
    }

    return (
        <Container>
            {Number(props.productId) === 4 ? (
                <NewLaunch>Earth Day Deal </NewLaunch>
            ) : Number(props.productId) === 24 ? (
                <NewLaunch>Earth Day Deal</NewLaunch>
            ) : Number(props.productId) === 45 ? (
                <NewLaunch>Earth Day Deal</NewLaunch>
            ) : Number(props.productId) === 7 ? (
                <NewLaunch>Earth Day Deal</NewLaunch>
            ) : Number(props.productId) === 38 ? (
                <NewLaunch>Earth Day Deal</NewLaunch>
            ) : (
                Number(props.productId) === 43 && (
                    <NewLaunch>Earth Day Deal</NewLaunch>
                )
            )}

            <ProductContainer href={'/' + props.sku}>
                <ProductImageContainer>
                    <ProductImage
                        src={props.image}
                        alt="image"
                        loading="lazy"
                    />
                </ProductImageContainer>

                <ProductContent>
                    <SubHeading>{props.name.replace(/'/g, '"')}</SubHeading>

                    <span>Tableware</span>

                    <Paragraph>Durable, {props.desc}</Paragraph>

                    {/* <RatingsContainer>
                            <Star className="filled" />
                            <Star className="filled" />
                            <Star className="filled" />
                            <Star className="filled" />
                            <Star className="default" />
                        </RatingsContainer> */}
                    {props.originalprice != 0 ? (
                        <DashedHeading>${props.originalprice}</DashedHeading>
                    ) : null}
                    <Heading3>${props.price}</Heading3>
                </ProductContent>
            </ProductContainer>

            <AddToBagButton onClick={handleClick} disabled={isAddedToCart}>
                {isAddedToCart ? (
                    <>
                        <Check strokeWidth={1.25} />
                        <span>Added to Cart</span>
                    </>
                ) : (
                    <>
                        <ShoppingBag strokeWidth={1.25} />
                        <span>Add to Cart</span>
                    </>
                )}
            </AddToBagButton>
        </Container>
    )
}
