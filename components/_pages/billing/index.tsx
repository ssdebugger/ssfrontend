import { Container } from 'components/container/regular'
import { Heading3, Heading4 } from 'components/typography/heading'
import { Input } from 'components/input/index'
import { GridContainer, GridItem } from '@/components/_pages/homepage/style'
import { Form, InputContainer } from '@/components/_pages/auth/auth.style'
import { useState, useEffect } from 'react'
import { Checkbox } from 'components/checkbox/index'
import BillingDetails from 'components/_pages/cart/billing'
import { Button } from 'components/cta/button'
import styled from 'styled-components'
import Footer from '@/components/footer/index'
import { LandingLayout } from 'components/layout/landing/index'
import Popupcheckout from 'components/_pages/Checkout/index'
import Slideinright from './slideinright'
import { useRouter } from 'next/router'
import Autocompleteform from './autocomplete'
import Head from 'next/head'
import Tabs from './tabs'

const Billing = () => {
    const ShippingContainer = styled(Container)`
        background-color: #eee;
        width: 100%;
        height: 100%;
        @media only screen and (min-width: 900px) {
            display: flex;
            width: 70%;
        }
    `
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
