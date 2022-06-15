import Image from 'next/image'
import * as Styles from './checkout-cards.styles'

interface Props {
    img: string
    title: string
    price: string
    quantity: string
}

export const CheckoutOrderProduct: React.FC<Props> = (props) => {
    return (
        <Styles.OrderProdcut>
            <Styles.ImgContainer>
                <Image
                    src={props.img}
                    alt={props.title}
                    width={75}
                    height={75}
                />
            </Styles.ImgContainer>
            <Styles.Details>
                <h3>{props.title}</h3>
                <Styles.PriceContainer>
                    <h4>{`$${props.price}`}</h4> <span>x {props.quantity}</span>
                </Styles.PriceContainer>
            </Styles.Details>
        </Styles.OrderProdcut>
    )
}
