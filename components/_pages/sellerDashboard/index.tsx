import Head from 'next/head'

import { Container } from 'components/container/regular'
import {
    ItemContainer,
    InputHolder,
    FilterContainer,
    HeadingHolder,
} from './style'

import ProductHolder from './productdetails'

import { GridContainer, GridItem } from '@/components/_pages/homepage/style'
import { Heading } from './style'
import { Input } from '@/components/input/oldInput'

const SellerDashboard = () => {
    return (
        <>
            <Head>
                <title>Your Orders - Sellsage</title>
            </Head>
            <Container>
                <HeadingHolder>
                    <img
                        style={{ height: '50px', width: '50px' }}
                        src="/favicon.svg"
                        alt="sellsage"
                    />
                    <Heading>SellSage Merchant Center </Heading>
                </HeadingHolder>
                <InputHolder>
                    <Input
                        height="40px"
                        margin="0rem 0 0rem 0rem"
                        heading="Enter Sku Code"
                        type="text"
                    />
                </InputHolder>

                <FilterContainer>
                    <label
                        style={{
                            marginBottom: '5px',
                            marginRight: '10px',
                            fontWeight: 'bold',
                        }}
                    >
                        Choose a category: <br />
                        <input list="category" name="Filterdown" />
                    </label>
                    <datalist id="category">
                        <option value="Glove Up" />
                        <option value="Sasya" />
                        <option value="Plantry" />
                    </datalist>

                    <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>
                        Stock Availability: <br />
                        <input list="availability" name="Filterdown" />
                    </label>
                    <datalist id="availability">
                        <option value="In Stock" />
                        <option value="Out of Stock" />
                    </datalist>
                </FilterContainer>

                <ItemContainer>
                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />

                    <ProductHolder />
                </ItemContainer>
            </Container>
        </>
    )
}

export default SellerDashboard
