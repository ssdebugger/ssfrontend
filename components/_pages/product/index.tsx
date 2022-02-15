import { useState } from 'react'
import { Check } from 'react-feather'

import Carousel from '@/components/_pages/product/carousel'
import { LandingLayout } from '@/components/layout/landing'
import { Pricing } from './pricing'
import { Button } from '@/components/buttons'
import TopPicks from './toppicks'
import { MainHeading, Heading3 } from 'components/typography/heading'
import { GridContainer, GridItem } from '../homepage/style'
import Footer from '@/components/footer'

import { useAddItem, useCart, useRemoveItem } from 'context/cart'
import { CartItem } from '@/types/cart'

import Head from 'next/head'
import { CollapseButton } from '@/components/collapse-button'
import { BreadCrumb } from '@/components/breadcrumb'
import { SizeSelector } from './sizes'
import {
    AboutItemContainer,
    AddToCart,
    CollapseBtnContainer,
    Container,
    Desktop,
    HeadingContainer,
    ImageContainer,
    MainContentContainer,
    Mobile,
    PricingContainer,
    ProductPageTop,
    ProductPageTopHeading,
    Quantity,
    QuantityInput,
    SaveToWishlist,
} from './index.style'
import { AboutItem } from './about-item'
import { Paragraph } from '@/components/typography/paragraph'
import { Heart } from 'react-feather'
import { Typography } from './index.style'
import { ProductCertifications } from './product-certifications'
import { CustomerReviews } from './customer-review'
import { useUser, useAddUser } from 'context/user'

const Productpage = (props) => {
    var data = props.data['body']['response']
    var recproducts = props.data['body']['recproducts']
   
    const AddToCartCta = ({
        sku,
        title,
        img,
        productid,
        price,
    }: {
        sku: CartItem['sku']
        title: CartItem['title']
        img: CartItem['img']
        productid: CartItem['productid']
        price: CartItem['price']
    }) => {
        const { cart } = useCart()
        const add = useAddItem()
        const deleteItem = useRemoveItem()

        const [productQuantity, setProductQuantity] = useState(1)

        /**
         * Function to handle add to cart.
         *
         * Setps taking place here:
         * ---------------
         * 1. Search if the item exits already.
         * 2. If item exits then store the previous quantiy used.
         * 3. Delete the already existing item.
         * 4. Add the new item by adding previousQuantity + newQuantity.
         * */

        const handleAddToCart = (e) => {
            let itemIndex = cart.findIndex((item) => item.sku === sku)
            let curuser = window.localStorage.getItem('useremail')

            if (
                curuser !== 'false' &&
                curuser != undefined &&
                curuser != null &&
                curuser != 'null'
            ) {
                console.log(
                    'adding to user cart api in products page',
                    window.localStorage.getItem('useremail')
                )
                let fetchdata = {
                    activity_type: 'ATC',
                    email_id: window.localStorage.getItem('useremail'),
                    pid: data['product_id']['N'],
                    quant: productQuantity,
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
            }

            if (itemIndex !== -1) {
                let previousQuantity = cart[itemIndex].quantity

                deleteItem(cart[itemIndex].sku)

                add({
                    sku: sku,
                    quantity: previousQuantity + productQuantity,
                    title: title,
                    img: img,
                    productid: productid,
                    price: price,
                })
            } else {
                add({
                    sku: sku,
                    quantity: productQuantity,
                    title: title,
                    img: img,
                    productid: productid,
                    price: price,
                })
            }

            e.target.innerHTML = 'Added to Cart'
            e.target.disabled = true

            setTimeout(() => {
                e.target.innerHTML = 'Add to cart'
                e.target.disabled = false
            }, 1500)
        }

        const handleProductQuantityChange = (e: {
            target: { value: string }
        }) => {
            setProductQuantity(parseInt(e.target.value))
        }

        return (
            <AddToCart>
                <Quantity>
                    <Heading3 margin="0 0 0.5rem">Quantity</Heading3>
                    <QuantityInput
                        type="number"
                        placeholder="1"
                        value={productQuantity}
                        onChange={(e) => handleProductQuantityChange(e)}
                    />
                </Quantity>
                <Button
                    varient="primary"
                    size="large"
                    fill
                    onClick={(e) => handleAddToCart(e)}
                >
                    Add to cart
                </Button>
            </AddToCart>
        )
    }

    const addUserFn = (e, id) => {
        let curuser = window.localStorage.getItem('user')
        if (
            curuser !== 'false' &&
            curuser != undefined &&
            curuser != null &&
            curuser != 'null'
        ) {
            let fetchdata = {
                activity_type: 'ATW',
                email_id: window.localStorage.getItem('useremail'),
                pid: id,
                quant: 1,
            }
            fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
                {
                    method: 'POST',
                    body: JSON.stringify(fetchdata),
                }
            )
                .then((res) => console.log('added to wishlist', fetchdata, res))
                .catch((err) => console.log(err, 'error'))
        }

        e.target.innerHTML = 'Saved to Wishlist'
        e.target.disabled = true

        setTimeout(() => {
            e.target.innerHTML = 'Save to Wishlist'
            e.target.disabled = false
        }, 1500)
    }

    let ItemData: CartItem = {
        sku: data['sku_code']['S'],
        quantity: 1,
        title: data['product_name']['S'],
        img: data['image0'],
        productid: data['product_id']['N'],
        price: data['sale_price']['N'],
    }

    console.log('recproducts',recproducts)
    return (
        <>
            <Head>
                <title>Shop - SellSage</title>
            </Head>

            <LandingLayout>
                <Container>
                    <ProductPageTop>
                        <ProductPageTopHeading>
                            <BreadCrumb items={['Shop', data.brand.S]} />

                            <MainHeading>
                                {data['short_description']['S']}
                            </MainHeading>
                        </ProductPageTopHeading>

                        <ImageContainer>
                            <GridContainer>
                                <GridItem sm={100} md={50} lg={50}>
                                    <Carousel
                                        component="product"
                                        images={[
                                            data['image0'],
                                            data['image1'],
                                            data['image2'],
                                            data['image3'],
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </ImageContainer>
                    </ProductPageTop>

                    <MainContentContainer>
                        <HeadingContainer>
                            <BreadCrumb items={['Shop', data.brand.S]} />

                            <MainHeading>
                                {data['short_description']['S']}
                            </MainHeading>
                        </HeadingContainer>

                        <PricingContainer>
                            <Pricing
                                regularprice={data['regular_price']['N']}
                                saleprice={data['sale_price']['N']}
                            />
                        </PricingContainer>

                        {data['variations'].length > 0 && (
                            <SizeSelector variations={data['variations']} />
                        )}

                        <AboutItemContainer>
                            <AboutItem
                                sku={ItemData.sku}
                                data={data['about']['L']}
                            />
                        </AboutItemContainer>

                        <CollapseBtnContainer>
                            <CollapseButton heading="About brand">
                                {data['product_id']['N'] == 44 ? (
                                    <Paragraph>
                                        Glove-up is SellSage's line of
                                        commercially compostable individually
                                        packaged gloves made of plant-based
                                        biopolymer. Certified by BPI, this
                                        product turns to biomass, water and CO2,
                                        as a part of the degradation process,
                                        once discarded in a composting facility.
                                        Maintain hygiene and protect yourself
                                        with our gloves on the go.
                                    </Paragraph>
                                ) : (
                                    <Paragraph>
                                        We at SellSage are proud to bring you
                                        our eco-friendly disposable tableware
                                        line, Plantry. We source our Plantry
                                        products through our partners in South
                                        Asia who harvest only fallen Areca
                                        leaves to ensure that no trees are cut
                                        in the process. We partnered with our
                                        manufacturers in 2019 and have since
                                        worked together with them to apply for
                                        all the certifications the product
                                        holds. Our goal is to replace a
                                        traditional disposable plastic culture
                                        with a guilt-free take out eating
                                        experience so you do not have to worry
                                        about cleanup.
                                    </Paragraph>
                                )}

                                <a
                                    style={{
                                        display: 'block',
                                        textAlign: 'left',
                                        marginBottom: '1rem',
                                        color: 'blue',
                                        textDecoration: 'underline',
                                    }}
                                    href={
                                        data.brand.S === 'Gloveup'
                                            ? '/brochure/GloveUp_SellSage_Catalog_2021.pdf'
                                            : '/brochure/catalog.pdf'
                                    }
                                    download
                                >
                                    Download brochure
                                </a>
                            </CollapseButton>
                        </CollapseBtnContainer>

                        <AddToCartCta
                            sku={ItemData.sku}
                            title={ItemData.title}
                            img={ItemData.img}
                            productid={ItemData.productid}
                            price={ItemData.price}
                        />

                        <SaveToWishlist id="savebtn">
                            <Button
                                onClick={(e) =>
                                    addUserFn(e, data['product_id']['N'])
                                }
                                varient="primary"
                                size="large"
                                fill
                            >
                                Save to Wishlist
                            </Button>
                        </SaveToWishlist>
                    </MainContentContainer>
                </Container>

                <ProductCertifications />

                <TopPicks offers={recproducts} />
            </LandingLayout>
            <Footer />
        </>
    )
}

export default Productpage
