import { ProductCard } from '@/components/card/product-card/v1'
import { Heading3 } from '@/components/typography/heading'
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
    return (
        <NewLaunchesContainer>
            <Heading3>Popular Bundles</Heading3>

            <ProductsContainer>
                {newLaunchProducts.map((item) => (
                    <ProductCard
                        key={item.product_name.S}
                        name={item.product_name.S}
                        image={item.imageurl}
                        price={item.sale_price}
                        desc={item.short_description.S}
                        sku={item.sku_code.S}
                        productId={item.product_id.N}
                    />
                ))}
            </ProductsContainer>
        </NewLaunchesContainer>
    )
}
