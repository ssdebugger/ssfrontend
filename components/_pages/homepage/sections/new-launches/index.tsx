import { ProductCard } from '@/components/card/product-card/v1'
import { Heading3,SubHeading } from '@/components/typography/heading'
import styled from 'styled-components'
import { HomepageContainerStyles } from '../../style'

const NewLaunchesContainer = styled.section`
    ${HomepageContainerStyles}
    padding: 3rem 0;

    & > h3 {
        margin: 0;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.25;
        font-weight: 800;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-right: 0;

        & > h3 {
            font-size: 2.25rem;
            line-height: 2.875rem;
        }
    }
`

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    overflow: auto;
    gap: 1.75rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 3rem ${(props) => props.theme.spacingMobile};

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 3rem 0;
    }
`

export const NewLaunches = ({ newLaunchProducts }) => {
    const imagealt = [
        'disposable dinner bundle square',
        'disposable dinner pack',
        'disposable dinner bundle round',
        'disposable cutlery set'
    ]
    return (
        <NewLaunchesContainer>
            <SubHeading textAlign='center'>Disposable Dinnerware</SubHeading>

            <ProductsContainer>
                {newLaunchProducts.map((item,key) => (
                    <ProductCard
                        key={item.product_name.S}
                        name={item.product_name.S}
                        url={item.url_name.S}
                        image={`https://ss-compressedimages.s3.us-east-2.amazonaws.com/SellSage/ShopItems/${item.product_id.N}/${item.sku_code.S}/Main_WB.webp`}
                        price={item.sale_price}
                        desc={item.short_description.S}
                        originalprice="0"
                        sku={item.sku_code.S}
                        productId={item.product_id.N}
                        inStockQuantity={item.in_stock.N}
                        alt={imagealt[key]}
                    />
                ))}
            </ProductsContainer>
        </NewLaunchesContainer>
    )
}
