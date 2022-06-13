import Head from 'next/head'

import {
 
    OrderOptions,
    OrderOption,
    OrderOptionsContainer,
    Main,
} from './order-page-styles'

import Footer from '@/components/footer'

import { MainHeading } from '@/components/typography/heading'

import { OrderCard } from '@/components/card/order-card'

import { LandingLayout } from 'components/layout/landing'

const Orders = (props) => {
    let orders = props.response.body

    return (
        <>
            <Head>
                <title>Your Orders - Sellsage</title>
            </Head>

            <LandingLayout>
                <Main>
                    <MainHeading>Your orders</MainHeading>

                    <OrderOptionsContainer>
                        <OrderOptions>
                            <OrderOption className="selected">
                                All Orders
                            </OrderOption>
                            <OrderOption>Canceled Orders</OrderOption>
                            <OrderOption>Not yet shipped</OrderOption>
                        </OrderOptions>
                    </OrderOptionsContainer>

                    <div>
                        {orders.map((item) => (
                            <OrderCard
                                key={item['order_no']}
                                orderStatus={item['tracking_status']}
                                detailedMessage={
                                    item.cancelled == 'true'
                                        ? 'Order Cancelled'
                                        : 'Order ' + item['tracking_status']
                                }
                                orderid={Number(item['order_no'])}
                                orderdate={item['time_stamp'].slice(0, 10)}
                                orderamount={
                                    item['bill_details']['order_total']
                                }
                                orderitems={item['items']}
                            />
                        ))}
                    </div>
                </Main>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default Orders
