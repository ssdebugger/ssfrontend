
import Footer from '@/components/footer/index'
import { LandingLayout } from 'components/layout/landing/index'
import Head from 'next/head'
import Tabs from './tabs'

const Billing = () => {
    return (
        <>
            <Head>
                <title>Checkout - Sellsage</title>
            </Head>

            <LandingLayout>
                <div
                    style={{ width: '5% !important', height: '20% !important' }}
                ></div>

                <Tabs />
            </LandingLayout>
            <Footer />
        </>
    )
}

export default Billing
