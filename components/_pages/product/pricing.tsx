import styled from 'styled-components'

const MainPricing = styled.div`
    font-weight: 500;
    font-size: ${(props) => props.theme.heading4};
`

const DiscountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`
const OriginalPrice = styled.div`
    text-decoration: line-through;
    font-size: ${(props) => props.theme.textSm};
    color: ${(props) => props.theme.blueGray500};
`
const DiscountPercent = styled.div`
    font-size: ${(props) => props.theme.textSm};
    color: ${(props) => props.theme.red400};
    margin-left: 0.75rem;
`

export const Pricing = (props) => {
    return (
        <>
            <MainPricing>{`$ 100`}</MainPricing>
                <DiscountContainer>
                    <OriginalPrice>$ 80</OriginalPrice>
                    <DiscountPercent>
                        Save $ 20
                    </DiscountPercent>
                </DiscountContainer>
        </>
    )
}
