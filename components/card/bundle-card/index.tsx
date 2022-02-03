import { Button } from '@/components/cta/button'
import Link from 'next/link'
import {
    ImageContainer,
    CardImage,
    LifeStyleImage,
    CardContents,
} from '../common-card-styles'
import {
    CardContainer,
    CardTitle,
    
    BundlePrice,
    SaveAmount,
    BundleDesc,
    ButtonContainer,
} from './style'
import { CardLink } from 'components/card/product-card/style'

export const BundleCard = (props) => {
    return (
        <CardContainer>
            <CardContents>
                <Link href={"/product?id=" + props.id} passHref>
                    <CardLink>
                <ImageContainer>
                    <CardImage src={props.imageurl}  alt='image'/>
                    <LifeStyleImage src={props.lifeimageurl} alt='image'/>
                </ImageContainer>

                <CardTitle>{props.name}</CardTitle>

                <BundlePrice>
                    ${props.priceint}.{props.pricedecimal}<SaveAmount>(Save ${props.discount})</SaveAmount>
                </BundlePrice>

                <BundleDesc>
                    { props.description}
                        </BundleDesc>
                  </CardLink>
                </Link>
            </CardContents>

            <ButtonContainer>
                <Button varient="primary">Add to cart</Button>
            </ButtonContainer>
        </CardContainer>
    )
}
