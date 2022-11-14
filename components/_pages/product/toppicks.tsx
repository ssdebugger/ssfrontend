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
              
                    <ProductCard
                        name={'Palm leaf oval bowl'}
                        image={`/Main_WB.webp`}
                        price={100}
                        desc={'Palm leaf product'}
                        sku={'PALM-OVLB-0510-0020'}
                        originalprice="0"
                        productId={44}
                        url={'palm-leaf-oval-bowl-5inchx10inch'}
                    />
                     <ProductCard
                        name={'Palm leaf oval bowl'}
                        image={`/Main_WB.webp`}
                        price={100}
                        desc={'Palm leaf product'}
                        sku={'PALM-OVLB-0510-0020'}
                        originalprice="0"
                        productId={44}
                        url={'palm-leaf-oval-bowl-5inchx10inch'}
                    />
                     <ProductCard
                        name={'Palm leaf oval bowl'}
                        image={`/Main_WB.webp`}
                        price={100}
                        desc={'Palm leaf product'}
                        sku={'PALM-OVLB-0510-0020'}
                        originalprice="0"
                        productId={44}
                        url={'palm-leaf-oval-bowl-5inchx10inch'}
                    />
                     <ProductCard
                        name={'Palm leaf oval bowl'}
                        image={`/Main_WB.webp`}
                        price={100}
                        desc={'Palm leaf product'}
                        sku={'PALM-OVLB-0510-0020'}
                        originalprice="0"
                        productId={44}
                        url={'palm-leaf-oval-bowl-5inchx10inch'}
                    />

            </RecommendedProducts>
        </Container>
    )
}
export default TopPicks
