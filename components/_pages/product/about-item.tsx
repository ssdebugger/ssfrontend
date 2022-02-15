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
                {props.data.map((item) => (
                    <ItemDesc>{item['S']}</ItemDesc>
                ))}
            </ItemList>
            <ItemList liststyle="none">
                <ItemDesc>SKU : {props.sku}</ItemDesc>
            </ItemList>
        </AboutItemContainer>
    )
}
