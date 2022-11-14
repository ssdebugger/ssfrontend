import { useState, useEffect } from 'react'
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

import { useAlert } from 'react-alert'
import { CustomerReviews } from './customer-review'
import {
    AboutItemContainer,
    AddToCart,
    CollapseBtnContainer,
    Container,
    HeadingContainer,
    ImageContainer,
    MainContentContainer,
    PricingContainer,
    ProductPageTop,
    ProductPageTopHeading,
    Quantity,
    QuantityInput,
    SaveToWishlist,
} from './index.style'
import { AboutItem } from './about-item'
import { Paragraph } from '@/components/typography/paragraph'
import { ProductCertifications } from './product-certifications'
import styled from 'styled-components'
import OfferBanner from './offerbanner'

const Productpage = (props) => {
    const alert = useAlert()
    var ReactTag
    const AddToCartCta = ({
        sku,
        title,
        img,
        productid,
        price,
        inStockQuantity,
    } : {
        sku: CartItem['sku']
        title: CartItem['title']
        img: CartItem['img']
        productid: CartItem['productid']
        price: CartItem['price']
        inStockQuantity: CartItem['inStockQuantity']
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
            ReactTag.default==undefined ? null : ReactTag.default.track('addtocart', {
                value: price,
                order_quantity: 1,
                currency: 'USD',
                product_id: [sku],
            })
            if (
                itemIndex !== -1 &&
                cart[itemIndex].quantity <= 100
            ) {
                alert.removeAll()
                alert.show(
                    `Product already in cart, Maximum quantity available: 100`
                )
                return
            }

            if (
                curuser !== 'false' &&
                curuser != undefined &&
                curuser != null &&
                curuser != 'null'
            ) {
                let fetchdata = {
                    activity_type: 'ATC',
                    email_id: window.localStorage.getItem('useremail'),
                    pid: 44,
                    quant: productQuantity,
                }

                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
                    {
                        method: 'POST',
                        body: JSON.stringify(fetchdata),
                    }
                )
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
                    inStockQuantity: inStockQuantity,
                })
            } else {
                add({
                    sku: sku,
                    quantity: productQuantity,
                    title: title,
                    img: img,
                    productid: productid,
                    price: price,
                    inStockQuantity: inStockQuantity,
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
            if (parseInt(e.target.value) <= 0) {
                setProductQuantity(1)
            } else if (parseInt(e.target.value) > 100) {
                alert.removeAll()
                alert.show(`Maximum quantity available: 100`)
            } else {
                setProductQuantity(parseInt(e.target.value))
            }
        }

        return (
            <AddToCart>
                <Quantity>
                    <Heading3 margin="0 0 0.5rem">Quantity</Heading3>
                    <QuantityInput
                        type="number"
                        placeholder="1"
                        value={1}
                        onChange={(e) => handleProductQuantityChange(e)}
                    />
                </Quantity>
                <Button
                    varient="primary"
                    size="large"
                    fill="true"
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
                .then()
                .catch((err) => console.log(err, 'error'))
        }

        e.target.innerHTML = 'Saved to Wishlist'
        e.target.disabled = true

        setTimeout(() => {
            e.target.innerHTML = 'Save to Wishlist'
            e.target.disabled = false
        }, 1500)
    }

    useEffect(() => {
        import('react-pinterest-tag').then((ReactPinterestTag) => {
            ReactTag=ReactPinterestTag
            window['pintrk']==undefined? ReactPinterestTag.default.init('2613059152744'):null
            ReactPinterestTag.default.track('pagevisit', {
                promo_code: 'ProductPage',
                event_id: 'ProductPageVisit',
            })
        })
    }, [])
    const indexed_products = [
        'PALM-SQRP-0600-0020',
        'BNDL-CSET-0000-0300',
        'PALM-HRTB-0500-0020',
        'PALM-DEPB-0500-0020',
        'PALM-SQRP-0300-0020',
        'GLOV-DOM-0030-0036',
        'PALM-RTGT-0906-0020',
        'PALM-RTGT-0703-0020',
        'PALM-OVLB-0510-0020',
        'PALM-RNDP-10F0-0020',
    ]
    
    return (
        <>
            <Head>
                <meta
                    name="title"
                    content='palm leaf oval bowl'
                ></meta>
                <meta
                    name="description"
                    content='palm leaf oval bowl'
                ></meta>
                <title>palm leaf oval bowl</title>
            </Head>

            <LandingLayout>
                <Container>
                    <ProductPageTop>
                        <ProductPageTopHeading>
                            <BreadCrumb items={['Shop', 'Plantry']} />

                            <MainHeading>
                            Palm Leaf Bowl Oval Shaped 5inchx10inch Packof20
                            </MainHeading>
                        </ProductPageTopHeading>

                        <ImageContainer>
                            <GridContainer>
                                <GridItem sm={100} md={50} lg={50}>
                                    <Carousel
                                        component="product"
                                      
                                    />
                                </GridItem>
                            </GridContainer>
                        </ImageContainer>
                    </ProductPageTop>

                    <MainContentContainer>
                        <HeadingContainer>
                            <BreadCrumb items={['Shop', 'Plantry']} />

                            <MainHeading>
                            Palm Leaf Bowl Oval Shaped 5inchx10inch Packof20
                            </MainHeading>
                        </HeadingContainer>

                        <PricingContainer>
                            <Pricing
                             />
                        </PricingContainer>

                            <SizeSelector  />
                        

                        <AboutItemContainer>
                            <AboutItem
                             
                            />
                        </AboutItemContainer>

                        <CollapseBtnContainer>
                            <CollapseButton heading="About brand">
                              
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
                                
                                <a
                                    style={{
                                        display: 'block',
                                        textAlign: 'left',
                                        marginBottom: '1rem',
                                        color: 'blue',
                                        textDecoration: 'underline',
                                    }}
                                    href={
                                             '/brochure/GloveUp_SellSage_Catalog_2021.pdf'
                                        
                                    }
                                    download
                                >
                                    Download brochure
                                </a>
                            </CollapseButton>
                        </CollapseBtnContainer>
 
                            <>
                                <AddToCartCta
                                    sku={'PALM-OVLB-0510-0020'}
                                    title={'oVAL BOWL'}
                                    img={'PALM-OVLB-0510-0020'}
                                    productid={44}
                                    price={100}
                                    inStockQuantity={100}
                                />

                                <SaveToWishlist id="savebtn">
                                    <Button
                                        onClick={(e) =>
                                            addUserFn(
                                                e,
                                                44
                                            )
                                        }
                                        varient="primary"
                                        size="large"
                                        fill="true"
                                    >
                                        Save to Wishlist
                                    </Button>
                                </SaveToWishlist>
                            </>
                    </MainContentContainer>
                </Container>
                <ProductCertifications />
            </LandingLayout>
            {/* <OfferBanner /> */}
            <TopPicks />
            {/* <CustomerReviews reviews={data['reviews']} /> */}
            <Footer />
        </>
    )
}

export default Productpage
