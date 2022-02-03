import Head from 'next/head'

import { Header, HyperLink } from '@/components/header'
import { Heading3 } from '@/components/typography/heading'

import {
    BreadcrumbContainer,
    BreadcrumbItem,
    UserDetails,
    UserOrder,
    MainWrapper,
    PageContainer,
} from './single-page-checkout.style'
import { DropdownSelector } from './drop-down-selector'

const Breadcrumb = () => {
    return (
        <BreadcrumbContainer>
            <BreadcrumbItem>
                <HyperLink href="/">Home</HyperLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <HyperLink href="/shop">Shop</HyperLink>
            </BreadcrumbItem>

            <BreadcrumbItem isActive>
                <HyperLink href="/checkout">Checkout</HyperLink>
            </BreadcrumbItem>
        </BreadcrumbContainer>
    )
}

const SinglePageCheckout = () => {
    return (
        <>
            <Head>
                <title>Checkout - Sellsage</title>
            </Head>

            <Header />

            <PageContainer>
                <Heading3>Shopping Cart</Heading3>
                <Breadcrumb />

                <MainWrapper>
                    <UserDetails>
                        <DropdownSelector title="sample" stepIndicator="1">
                            mast
                        </DropdownSelector>
                    </UserDetails>

                    <UserOrder></UserOrder>
                </MainWrapper>
            </PageContainer>
        </>
    )
}

export default SinglePageCheckout
