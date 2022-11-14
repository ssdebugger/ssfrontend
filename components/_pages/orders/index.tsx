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
  

    return (
        <>
            <Head>
                <title>Your Orders - Sellsage</title>
                <meta name='robots' content='noindex'></meta>
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
                      
                            <OrderCard
                                key={1001}
                                orderStatus={'Dispatched'}
                                detailedMessage={
                                  
                                'Order dispatched' 
                                }
                                orderid={1001}
                                orderdate={'14-11-2022'}
                                orderamount={
                                   '100'
                                }
                                orderitems={[]}
                               
                            />
                        
                    </div>
                </Main>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default Orders
