import { Heading3 } from '@/components/typography/heading'
import styled from 'styled-components'

const AboutItemContainer = styled.div`
    h3 {
        font-size: ${(props) => props.theme.textLarge};
    }
`

const ItemList = styled.ul<{
    liststyle?: string
}>`
    list-style-type: ${(props) => props.liststyle || 'disc'};
    list-style-position: outside;
    margin-left: 1rem;
`

const ItemDesc = styled.li`
    margin: 0 0 0.5rem 0;
`

export const AboutItem = (props) => {
    return (
        <AboutItemContainer>
            <Heading3 margin="0 0 1rem 0">Product Specifications</Heading3>

            <ItemList>
             
                    <ItemDesc>PLANT-BASED | 100% Natural and Organic| Made from naturally fallen areca palm leaves | No trees are harmed in the process</ItemDesc>
                    <ItemDesc>Chemical-FREE | Pesticide-FREE | Plastic-FREE | Soak-FREE</ItemDesc>
                    <ItemDesc>STURDY and ELEGANT design makes the product PARTY PERFECT and ideal for Christmas/Thanksgiving/Birthday/Graduation party, Camping,</ItemDesc>
                    <ItemDesc>USDA Certified 100% Biobased Product (ASTM D6866 Laboratory Tested) | Premium Quality</ItemDesc>
            </ItemList>
            <ItemList liststyle="none">
                <ItemDesc>SKU : PALM-OVLB-0510-0020</ItemDesc>
            </ItemList>
        </AboutItemContainer>
    )
}
