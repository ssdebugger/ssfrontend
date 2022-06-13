import styled from 'styled-components'

import { OfferCard } from '@/components/card/offer-card'
import { ProductCard } from '@/components/card/product-card/v1'
import { HomepageContainerStyles } from '../../style'
import { ScrollbarStyles } from 'theme'

const OfferContainer = styled.section`
    ${HomepageContainerStyles}
    padding: 1.5rem 0;
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: grid;
        grid-template-columns: 336px 1fr;
        gap: 3.5rem;
        padding-right: 0;
    }
`

const ProductsContainer = styled.div`
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
    return (
        <OfferContainer>
            <OfferCard card={card} />
            {/* <div style={{}}><ChevronsLeft size={35} /></div> */}
            <ProductsContainer>
                {productsList.map((item) => (
                card =='card1' ? (
                       <ProductCard
                        key={item.sku.S}
                        sku={item.sku.S}
                        name={item.name.S}
                        image={item.imageurl}
                        price={item.sale_price.N}
                        originalprice={item.price.N}
                        desc={item.description.S}
                        productId={item.product_id.N}
                        inStockQuantity={item.in_stock.N}
                    />):(    <ProductCard
                        key={item.sku_code.S}
                        sku={item.sku_code.S}
                        name={item.product_name.S}
                        image={item.imageurl}
                        price={item.sale_price}
                        originalprice={0}
                        desc={item.short_description.S}
                        productId={item.product_id.N}
                        inStockQuantity={item.in_stock.N}
                    />)
                ))}
            </ProductsContainer>
            {/* <div style={{}} ><ChevronsRight size={35} /></div>   */}
        </OfferContainer>
    )
}
