import { useEffect, useState } from 'react'

import { DashboardTemplate } from './template'

import { HomepageContainer } from './homepage.style'
import { DashboardProduct } from './product'
import { Heading3 } from '@/components/typography/heading'

const Dashboard = ({ productList }) => {
    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        setAllProducts(productList)
        console.log(productList)
    }, [])

    return (
        <DashboardTemplate pageTitle="Admin Dashboard">
            <Heading3>Products</Heading3>

            <HomepageContainer>
                {allProducts.map((item) => (
                    <DashboardProduct {...item} />
                ))}
            </HomepageContainer>
        </DashboardTemplate>
    )
}

export default Dashboard
