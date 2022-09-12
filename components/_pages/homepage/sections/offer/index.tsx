import styled from 'styled-components'

import { OfferCard } from '@/components/card/offer-card'
import { ProductCard } from '@/components/card/product-card/v1'
import { HomepageContainerStyles } from '../../style'
import { ScrollbarStyles } from 'theme'

const DisposableOfferContainer = styled.section`
    ${HomepageContainerStyles}
    padding: 1.5rem 0;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: grid;
        grid-template-columns: 336px 1fr;
        gap: 3.5rem;
        padding-right: 0;
    }
`

const DisposableProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 240px);
    gap: 1.75rem;
    padding: 2rem 1.25rem;
    overflow: auto;

    ${ScrollbarStyles}

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 3rem 4rem 0;
    }
`

export const Offer = ({ productsList, card }) => {
    const imagealt_one = [
        'disposable dinnerware bowl',
        'disposable dinnerware heart bowl',
        'disposable dinnerware tray',
        'disposable cutlery',
        'disposable dinnerware rectangle tray',
    ]
    const imagealt_two = [
        'disposable dinnerware bowl',
        'disposable dinnerware deep bowl',
        'disposable dinnerware plate',
        'disposable dinnerware square plate',
        'disposable dinnerware container',
    ]
    console.log('offer',productsList)

    return (
        <DisposableOfferContainer>
            <OfferCard card={card} />
            {/* <div style={{}}><ChevronsLeft size={35} /></div> */}
            <DisposableProductsContainer>
                {productsList.map((item, key) =>
                    card == 'card1' ? (
                        <ProductCard
                            key={item.sku.S}
                            sku={item.sku.S}
                            url={item.url_name.S}
                            name={item.name.S}
                            image={`https://ss-compressedimages.s3.us-east-2.amazonaws.com/SellSage/ShopItems/${item.product_id.N}/${item.sku.S}/Main_WB.webp`}
                            price={item.sale_price.N}
                            originalprice={item.price.N}
                            desc={item.description.S}
                            productId={item.product_id.N}
                            inStockQuantity={item.in_stock.N}
                            alt={imagealt_one[key]}
                        />
                    ) : (
                        <ProductCard
                            key={item.sku_code.S}
                            sku={item.sku_code.S}
                            url={item.url_name.S}
                            name={item.product_name.S}
                            image={`https://ss-compressedimages.s3.us-east-2.amazonaws.com/SellSage/ShopItems/${item.product_id.N}/${item.sku_code.S}/Main_WB.webp`}
                            price={item.sale_price}
                            originalprice={0}
                            desc={item.short_description.S}
                            productId={item.product_id.N}
                            inStockQuantity={item.in_stock.N}
                            alt={imagealt_two[key]}
                        />
                    )
                )}
            </DisposableProductsContainer>
            {/* <div style={{}} ><ChevronsRight size={35} /></div>   */}
        </DisposableOfferContainer>
    )
}
