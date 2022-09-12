import { Heading3 } from '../../typography/heading'
import { Container } from '../../container/regular'
import { ProductCard } from '@/components/card/product-card/v1'
import { GridContainer } from '@/components/_pages/homepage/style'

import styled from 'styled-components'
import { ScrollbarStyles } from 'theme'

const RecommendedProducts = styled(GridContainer)`
    ${ScrollbarStyles}

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
    margin: 0 -1.25rem 4rem;
    padding: 0 0 3.5rem;
    overflow-x: auto;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0 0 4rem;
    }
`

const TopPicks = (props) => {
    const offers = props.offers
    return (
        <Container>
            <Heading3 margin="0 0 2rem">Products You Might Like</Heading3>

            <RecommendedProducts>
                {offers.slice(0, 4).map((item,key) => (
                    <ProductCard
                        key={key}
                        name={item['product_name']['S']}
                        image={`https://ss-compressedimages.s3.us-east-2.amazonaws.com/SellSage/ShopItems/${item.product_id.N}/${item.sku_code.S}/Main_WB.webp`}
                        price={item['sale_price']['N']}
                        desc={item['short_description']['S']}
                        sku={item['sku_code']['S']}
                        originalprice="0"
                        productId={item['product_id']['N']}
                        url={item.url_name.S}
                    />
                ))}
            </RecommendedProducts>
        </Container>
    )
}
export default TopPicks
