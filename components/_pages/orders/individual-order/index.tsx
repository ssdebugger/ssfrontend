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
    const orderdetails = props.response.body[0]

    let useremail = localStorage.getItem('useremail')

    const cancelOrder = () => {
        fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/cancelorder?order=' +
                orderdetails['order_no'],
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
    const gotoProduct = (sku) => {
        router.push('/' + sku)
    }

    return (
        <>
            <Head>
                <title>Order Id: #{orderdetails['order_no']} - Sellsage</title>
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
                                    {orderdetails['time_stamp'].slice(0, 10)}
                                </DetailsContent>
                            </Detail>

                            <Detail>
                                <DetailHeading>Orderd Id:</DetailHeading>
                                <DetailsContent>
                                    #{orderdetails['order_no']}
                                </DetailsContent>
                            </Detail>

                            <Detail>
                                <DetailHeading>Invoice:</DetailHeading>
                                <DetailsContent>
                                    <a href={props.invoice['invoice']}>
                                        Download invoice
                                    </a>
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
                                    {orderdetails['shipping']}
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
                                        orderdetails['bill_details'][
                                            'items_subtotal'
                                        ]
                                    }
                                </DetailsContent>
                            </Detail>
                            <Detail>
                                <DetailHeading>Shipping::</DetailHeading>
                                <DetailsContent>
                                    $
                                    {
                                        orderdetails['bill_details'][
                                            'shipping_cost'
                                        ]
                                    }
                                </DetailsContent>
                            </Detail>
                            <Detail>
                                <DetailHeading>Total:</DetailHeading>
                                <DetailsContent>
                                    $
                                    {
                                        orderdetails['bill_details'][
                                            'order_total'
                                        ]
                                    }
                                </DetailsContent>
                            </Detail>

                            <Detail bold>
                                <DetailHeading>Grand total:</DetailHeading>
                                <DetailsContent>
                                    $
                                    {
                                        orderdetails['bill_details'][
                                            'order_total'
                                        ]
                                    }
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
                                {orderdetails['items'].map((item) => (
                                    <Product key={item['title']}>
                                        <ProductImage src={item['image_url']} />

                                        <ProductItemDetails>
                                            <Heading4>{item['title']}</Heading4>
                                            <ProductValue>
                                                Quantity: {item['quantity']}
                                            </ProductValue>

                                            <ProductButton
                                                onClick={() =>
                                                    gotoProduct(item.sku)
                                                }
                                            >
                                                Buy again
                                            </ProductButton>
                                        </ProductItemDetails>
                                    </Product>
                                ))}
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
