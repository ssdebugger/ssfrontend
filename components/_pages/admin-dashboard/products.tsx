import { useEffect } from 'react'

import { DashboardTemplate } from '@/components/dashboard/template'

import { OrdersTab } from '@/components/dashboard/tabs/orders'
import { OrderTab } from '@/components/dashboard/tabs/tab.style'

import {
    HeadingAndSearch,
    SearchBtn,
    SearchContainer,
    SearchOrderInput,
} from './home.style'
import { ProductsTable } from '@/components/dashboard/table/products-table'
import { useState } from 'react'
import { Popup } from '@/components/dashboard/popup'
import { DashboardProductCard } from '@/components/dashboard/card/product'

export interface ProductType {
    size: { S: string }
    upcs_code: { N: string }
    tax_class: { S: string }
    in_stock: { N: string }
    suggestions: { L: Array<{ N: string }> }
    product_id: { N: string }
    reserved_for_bundles: { N: string }
    regular_price: { N: string }
    short_description: { S: string }
    about: { L: Array<{ S: string }> }
    dimensions: { L: Array<{ N: string }> }
    country_of_origin: { S: string }
    published_date: { S: string }
    tags: { L: Array<{ S: string }> }
    parent_id: { N: string }
    product_name: { S: string }
    sku_code: { S: string }
    taxable: { BOOL: boolean }
    brand: { S: string }
    items: { NULL: boolean }
    weight_in_kg: { N: string }
    updated_at: { S: string }
    sale_price: string
    category: { L: Array<{ S: string }> }
    description: { S: string }
    price_int: number
    price_decimal: string
    discount: string
    imageurl: string
    lifeimageurl: string
}

interface Props {
    data: Array<ProductType>
}

interface Tab {
    types: 'all-products' | 'in-stock' | 'low-on-stock' | 'out-of-stock'
    data: Array<ProductType>
}

export interface DashboardPopupProps {
    id: string
    productName: string
    imgUrl: string
    salePrice: number
    regularPrice: number
    inStock: number
    shortDesc: string
    description: string
}

export interface PopupProps {
    show: boolean
    productDetails: DashboardPopupProps
}

export const DashboardPopupInitialProps: DashboardPopupProps = {
    id: '',
    productName: '',
    imgUrl: '',
    salePrice: 1,
    regularPrice: 1,
    inStock: 1,
    shortDesc: '',
    description: '',
}

const Products: React.FC<Props> = ({ data }) => {
    const [activeTab, setActiveTab] = useState<Tab['types']>('all-products')
    const [allProducts, setAllProducts] = useState<Tab['data']>([])
    const [inStock, setInStock] = useState<Tab['data']>([])
    const [lowStock, setLowStock] = useState<Tab['data']>([])
    const [outOfStock, setOutOfStock] = useState<Tab['data']>([])
    const [popup, setPopup] = useState<PopupProps>({
        show: false,
        productDetails: DashboardPopupInitialProps,
    })

    function handleTabChange(tab: Tab['types']) {
        setActiveTab(tab)
    }

    function handlePopupDetails(popupDetails: PopupProps) {
        setPopup(popupDetails)
    }

    function toggleShowPopup() {
        setPopup((prevData) => ({ ...prevData, show: !prevData.show }))
    }

    useEffect(() => {
        setAllProducts(data)
        setInStock(data.filter((item) => Number(item.in_stock.N) >= 25))
        setLowStock(
            data.filter(
                (item) =>
                    Number(item.in_stock.N) <= 25 && Number(item.in_stock.N)
            )
        )
        setOutOfStock(data.filter((item) => Number(item.in_stock.N) === 0))
    }, [])

    return (
        <>
            <DashboardTemplate pageTitle="Manage Products">
                <HeadingAndSearch>
                    <h2>Product Catalogue</h2>

                    <SearchContainer>
                        <SearchOrderInput
                            type="text"
                            placeholder="Search Order ID"
                        />

                        <SearchBtn>Search</SearchBtn>
                    </SearchContainer>
                </HeadingAndSearch>

                <OrdersTab>
                    <OrderTab
                        isActive={activeTab === 'all-products'}
                        onClick={() => handleTabChange('all-products')}
                    >
                        <span>{allProducts.length}</span>All Products
                    </OrderTab>

                    <OrderTab
                        isActive={activeTab === 'in-stock'}
                        onClick={() => handleTabChange('in-stock')}
                    >
                        <span>{inStock.length}</span>
                        In stock
                    </OrderTab>

                    <OrderTab
                        isActive={activeTab === 'low-on-stock'}
                        onClick={() => handleTabChange('low-on-stock')}
                    >
                        <span>{lowStock.length}</span>Low on stock
                    </OrderTab>

                    <OrderTab
                        isActive={activeTab === 'out-of-stock'}
                        onClick={() => handleTabChange('out-of-stock')}
                    >
                        <span>{outOfStock.length}</span>
                        Out of stock
                    </OrderTab>
                </OrdersTab>

                <ProductsTable
                    handlePoupDetails={handlePopupDetails}
                    data={
                        activeTab === 'all-products'
                            ? allProducts
                            : activeTab === 'in-stock'
                            ? inStock
                            : activeTab === 'low-on-stock'
                            ? lowStock
                            : outOfStock
                    }
                />
            </DashboardTemplate>

            <Popup
                heading="Product Details"
                showPopup={popup.show}
                toggleShowPopup={toggleShowPopup}
            >
                <DashboardProductCard {...popup.productDetails} />
            </Popup>
        </>
    )
}

export default Products
