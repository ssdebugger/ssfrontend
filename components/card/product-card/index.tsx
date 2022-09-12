import Link from 'next/link'
import {
    CardContainer,
    CardTitle,
    CardLink,
    CardPrice,
    Mrp,
    PriceContainer,
    PriceDecimals,
    PriceInteger,
    PriceSymbol,
    RatingsContainer,
    WishlistButton,
} from './style'
import {
    ImageContainer,
    CardImage,
    LifeStyleImage,
    CardContents,
} from '../common-card-styles'
import { useState } from 'react'
import { Heart, Star } from 'react-feather'
import { Paragraph } from '../../typography/paragraph'

export const ProductCard = (props) => {
    const [addToWishList, setAddToWishList] = useState(props.wishlist)
    const handleClick = () => {
        const user = window.localStorage.getItem('useremail')
        if (user !== null && user !== undefined) {
            if (!addToWishList) {
                let data = {
                    activity_type: 'ATW',
                    email_id: user,
                    pid: props.id,
                    quant: 1,
                }
                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                    }
                )
                    .then()
                    .catch((err) => console.log(err, 'error'))
            } else {
                let data = {
                    activity_type: 'RWL',
                    email_id: user,
                    pid: props.id,
                    quant: 1,
                }
                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addtowlorcart',
                    {
                        method: 'POST',
                        body: JSON.stringify(data),
                    }
                )
                    .then()
                    .catch((err) => console.log(err, 'error'))
            }
        } else {
        }

        setAddToWishList((prevState) => !prevState)
    }
    return (
        <CardContainer>
            <WishlistButton
                onClick={handleClick}
                style={{ opacity: addToWishList && 1 }}
            >
                <Heart
                    className={addToWishList ? 'filled' : 'default'}
                    width={20}
                    height={20}
                />
            </WishlistButton>
            <CardContents>
                <Link href={'/product/' + props.sku} passHref>
                    <CardLink>
                        <ImageContainer>
                            <CardImage src={props.imageurl} />
                            <LifeStyleImage src={props.lifeimageurl} />
                        </ImageContainer>
                        <CardTitle>{props.name.replace(/'/g, '"')} </CardTitle>
                        <Paragraph margin="0.5rem 0" fontSize="small">
                            {props.description}
                        </Paragraph>
                        <RatingsContainer>
                            <Star className="filled" width={16} height={16} />
                            <Star className="filled" width={16} height={16} />
                            <Star className="filled" width={16} height={16} />
                            <Star className="filled" width={16} height={16} />
                            <Star className="default" width={16} height={16} />
                        </RatingsContainer>
                        <PriceContainer>
                            <CardPrice>
                                <PriceSymbol>$</PriceSymbol>
                                <PriceInteger>{props.priceint}</PriceInteger>
                                <PriceDecimals>
                                    .{props.pricedecimal}
                                </PriceDecimals>
                            </CardPrice>
                            <Mrp>(Save ${props.discount}) </Mrp>
                        </PriceContainer>
                    </CardLink>
                </Link>
            </CardContents>
        </CardContainer>
    )
}
