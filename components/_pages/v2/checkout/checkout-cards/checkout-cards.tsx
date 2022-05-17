import Image from 'next/image'
import * as Styles from './checkout-cards.styles'

export const CheckoutOrderProduct = () => {
    return (
        <Styles.OrderProdcut>
            <Styles.ImgContainer>
                <Image
                    src={
                        'https://ss-compressedimages.s3.amazonaws.com/SellSage/ShopItems/4/PALM-HRTB-0500-0020/PT01_LIF.jpg'
                    }
                    alt={'square plate 6"'}
                    width={75}
                    height={75}
                    objectFit="cover"
                />
            </Styles.ImgContainer>
            <Styles.Details>
                <h3>{'Square plat 6"'}</h3>
                <Styles.PriceContainer>
                    <h4>{`$30`}</h4> <span>x {'2'}</span>
                </Styles.PriceContainer>
            </Styles.Details>
        </Styles.OrderProdcut>
    )
}
