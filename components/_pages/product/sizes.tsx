import { Heading3 } from '@/components/typography/heading'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
/**
 * Styles
 */

const SizeSelectorContainer = styled.div`
    h3 {
        font-size: ${(props) => props.theme.textMd};
    }
`

const SizesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Size = styled.div`
    position: relative;
    flex-basis: calc(50% - 1rem);
    margin: 0 0 1rem 0;
    &:nth-child(2n) {
        margin-right: 1rem;
    }
`

const Checkbox = styled.input`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;

    &:checked + label {
        background: ${(props) => props.theme.cream200};
        box-shadow: 0 0 0 1.5px ${(props) => props.theme.cream500};
    }

    &:hover + label {
        box-shadow: 0 0 0 1.5px ${(props) => props.theme.cream500};
    }
`

const SizeLabel = styled.label`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    min-height: 45px;
    padding: 0.75rem 1.25rem;
    box-shadow: 0 0 0 1px ${(props) => props.theme.blueGray300};
    transition: ${(props) => props.theme.transition};
`

const SizeDesc = styled.span`
    font-weight: 500;
`

const SizePrice = styled.span`
    color: ${(props) => props.theme.blueGray700};
`
const StockOutSize = styled.div`
    position: relative;
    flex-basis: calc(50% - 1rem);
    margin: 0 0 1rem 0;

    pointer-events: none;
    &:nth-child(2n) {
        margin-right: 1rem;
    }

    ${SizeDesc} {
        font-weight: 200;
        color: gray;
    }
    ${SizePrice} {
        font-weight: 200;
        color: red;
    } ;
`
/**
 * Main logic
 */
export const SizeSelector = (props) => {
    const variations = props.variations
    const router = useRouter()

    const path = router.query.sku
    const productRoute = (sku) => {
        router.push(`/product/${sku}`)
    }
    useEffect(() => {
        const defaultSize = window.document.getElementById(
            'default'
        ) as HTMLInputElement

        if (defaultSize !== null) {
            defaultSize.checked = true
        }
    }, [])

    return (
        <SizeSelectorContainer>
            <Heading3 margin="0 0 1rem">Size</Heading3>
            <SizesContainer>
                {variations.map((x, i) =>
                    x['sort_key'] !== 9999 ? (
                        path !== x['url_name'] ? (
                            <Size key={i}>
                                <Checkbox
                                    name="sizeSku"
                                    type="radio"
                                    onChange={() => productRoute(x['url_name'])}
                                />
                                <SizeLabel>
                                    <SizeDesc>
                                        {x['size'].replace(/'/g, '"')}
                                    </SizeDesc>
                                    <SizePrice>$ {x['sale_price']}</SizePrice>
                                </SizeLabel>
                            </Size>
                        ) : (
                            <Size key={i}>
                                <Checkbox
                                    id="default"
                                    name="sizeSku"
                                    type="radio"
                                    onChange={() => productRoute(x['url_name'])}
                                />

                                <SizeLabel>
                                    <SizeDesc>
                                        {x['size'].replace(/'/g, '"')}
                                    </SizeDesc>
                                    <SizePrice>$ {x['sale_price']}</SizePrice>
                                </SizeLabel>
                            </Size>
                        )
                    ) : (
                        <StockOutSize key={i}>
                            <Checkbox
                                id="default"
                                name="sizeSku"
                                type="radio"
                                onChange={() => productRoute(x['url_name'])}
                            />
                            <SizeLabel>
                                <SizeDesc>{x['size']}</SizeDesc>
                                <SizePrice>Out of stock</SizePrice>
                            </SizeLabel>
                        </StockOutSize>
                    )
                )}
            </SizesContainer>
        </SizeSelectorContainer>
    )
}
