import { Heading4 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import styled from 'styled-components'
import { HyperLink } from '../index'

const ProductCardContainer = styled.div`
    a {
        display: block;
    }
`

const ProductImgContainer = styled.div`
    margin: 0 0 0.75rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        max-width: 15rem;
        max-height: 15rem;
    }
`
const ProductContent = styled.div`
    h4 {
        font-weight: 500;
        font-size: 1.25rem;
        margin: 0 0 0.25rem;
    }

    p {
        color: ${(props) => props.theme.blueGray500};
    }
`

export const ProductCard = (props) => {
    return (
        <ProductCardContainer>
            <HyperLink href={"/product/"+props.url}>
                <ProductImgContainer>
                    <img src={props.img} alt='eco products' />
                </ProductImgContainer>

                <ProductContent>
                    <Heading4>{props.name.replace(/'/g,'"')}</Heading4>
                    <Paragraph>{props.description}</Paragraph>
                </ProductContent>
            </HyperLink>
        </ProductCardContainer>
    )
}
