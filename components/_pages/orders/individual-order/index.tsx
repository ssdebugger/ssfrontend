import { Heading3, Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import Head from 'next/head'

import { LandingLayout } from 'components/layout/landing'
import { useAlert } from 'react-alert'

import {
    ContentSection,
    MainContainer,
    DetailsContainer,
    ProductSection,
    Detail,
    DetailsContent,
    DetailHeading,
    OrderedProducts,
    ProductsList,
    Product,
    ProductImage,
    ProductItemDetails,
    ProductValue,
    ProductButton,
    CancelOrderBtn,
} from './individual-order-styles'
import { useRouter } from 'next/router'

const IndividualOrder = (props) => {
    const alert = useAlert()
    const router = useRouter()
    // const orderdetails = props.response.body[0]

    let useremail = 'gokulravi1702@gmail.com'

    const cancelOrder = () => {
        fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/cancelorder?order=1001',
            {
                method: 'GET', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
            }
        ).then((res) => {
            alert.show('Your order has been cancelled')
            router.push(`/orders?email=${useremail}`)
        })
    }
    const gotoProduct = () => {
        router.push('/' + 'PALM-OVLB-0510-0020')
    }

    return (
        <>
            <Head>
                <title>Order Id: #1001 - Sellsage</title>
            </Head>

            <LandingLayout>
                <MainContainer>
                    <ContentSection>
                        <DetailsContainer>
                            <Heading3 fontWeight={500}>Order Details</Heading3>

                            {/* Ordered on */}
                            <Detail>
                                <DetailHeading>Orderd on:</DetailHeading>
                                <DetailsContent>
                                    {14-11-2022}
                                </DetailsContent>
                            </Detail>

                            <Detail>
                                <DetailHeading>Orderd Id:</DetailHeading>
                                <DetailsContent>
                                    #1001
                                </DetailsContent>
                            </Detail>

                            <Detail>
                                <DetailHeading>Invoice:</DetailHeading>
                                <DetailsContent>
                                
                                        Download invoice
                                    
                                </DetailsContent>
                            </Detail>
                        </DetailsContainer>

                        {/* Shipping address */}
                        <DetailsContainer>
                            <Heading3 fontWeight={500}>
                                Shipping Address
                            </Heading3>
                            <Detail>
                                <Paragraph maxWidth="160px">
                                    
                                </Paragraph>
                            </Detail>
                        </DetailsContainer>
                        {/* Order summary */}
                        <DetailsContainer>
                            <Heading3 fontWeight={500}>Order Summary</Heading3>
                            <Detail>
                                <DetailHeading>Subtotal:</DetailHeading>
                                <DetailsContent>
                                    $
                                    {
                                       100
                                    }
                                </DetailsContent>
                            </Detail>
                            <Detail>
                                <DetailHeading>Shipping::</DetailHeading>
                                <DetailsContent>
                                    $
                                   5
                                </DetailsContent>
                            </Detail>
                            <Detail>
                                <DetailHeading>Total:</DetailHeading>
                                <DetailsContent>
                                    $
                                   105
                                </DetailsContent>
                            </Detail>

                            <Detail bold>
                                <DetailHeading>Grand total:</DetailHeading>
                                <DetailsContent>
                                    $
                                  105
                                </DetailsContent>
                            </Detail>
                        </DetailsContainer>

                        {/* Payment method */}
                        <DetailsContainer>
                            <Heading3 fontWeight={500}>Payment Method</Heading3>
                            <Detail>
                                <Paragraph>
                                    Payment from Visa ···· 1234
                                </Paragraph>
                            </Detail>
                        </DetailsContainer>

                        <CancelOrderBtn onClick={cancelOrder}>
                            Cancel Order
                        </CancelOrderBtn>
                    </ContentSection>

                    <ProductSection>
                        <OrderedProducts>
                            <Heading3 fontWeight={500}>
                                Ordered Products
                            </Heading3>

                            <ProductsList>
                             
                                    <Product>
                                        <ProductImage src='/Main_WB.webp' />

                                        <ProductItemDetails>
                                            <Heading4>Palm leaf oval bowl</Heading4>
                                            <ProductValue>
                                                Quantity: {1}
                                            </ProductValue>

                                            <ProductButton
                                                onClick={() =>
                                                    gotoProduct()
                                                }
                                            >
                                                Buy again
                                            </ProductButton>
                                        </ProductItemDetails>
                                    </Product>
                            
                            </ProductsList>
                        </OrderedProducts>

                        {/* <RecommendedFromUs>
                        <Heading3 fontWeight={500}>
                            Recommended from us
                        </Heading3>

                        <ProductsList>
                            <Link href="/">
                                <a>
                                    <Product>
                                        <ProductImage src="/round-bowl.jpg" />

                                        <ProductItemDetails>
                                            <Heading4>
                                                Palm leaft bowl, 20 pack
                                            </Heading4>

                                            <Rating
                                                width={14}
                                                height={14}
                                                margin="0 0 0.5rem"
                                                color="#707070"
                                            />

                                            <ProductValue>$20.00</ProductValue>
                                        </ProductItemDetails>
                                    </Product>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <Product>
                                        <ProductImage src="/round-bowl.jpg" />

                                        <ProductItemDetails>
                                            <Heading4>
                                                Palm leaft bowl, 20 pack
                                            </Heading4>

                                            <Rating
                                                width={14}
                                                height={14}
                                                margin="0 0 0.5rem"
                                                color="#707070"
                                            />

                                            <ProductValue>$20.00</ProductValue>
                                        </ProductItemDetails>
                                    </Product>
                                </a>
                            </Link>

                            <Link href="/">
                                <a>
                                    <Product>
                                        <ProductImage src="/round-bowl.jpg" />

                                        <ProductItemDetails>
                                            <Heading4>
                                                Palm leaft bowl, 20 pack
                                            </Heading4>

                                            <Rating
                                                width={14}
                                                height={14}
                                                margin="0 0 0.5rem"
                                                color="#707070"
                                            />

                                            <ProductValue>$20.00</ProductValue>
                                        </ProductItemDetails>
                                    </Product>
                                </a>
                            </Link>
                        </ProductsList>
                    </RecommendedFromUs> */}
                    </ProductSection>
                </MainContainer>
            </LandingLayout>
        </>
    )
}

export default IndividualOrder
