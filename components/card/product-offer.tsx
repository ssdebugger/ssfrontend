import styled from 'styled-components'

const OfferImage = styled.img`
    width: 100%;
    height: 100%;
`

interface Props {
    src: string
    alt: string
}

export const ProductOffer: React.FC<Props> = ({ src, alt }) => {
    return <OfferImage src={src} alt={alt} />
}
