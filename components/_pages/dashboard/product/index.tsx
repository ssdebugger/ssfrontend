import { Edit } from 'react-feather'
import {
    ProdcutAvailability,
    ProdcutCategory,
    ProdcutEditBtn,
    ProdcutPrice,
    ProdcutSku,
    ProdcutSource,
    ProductContainer,
    ProductImage,
    ProductTitle,
} from './product.style'

export const DashboardProduct = (props) => {
    return (
        <ProductContainer>
            <ProductImage>
                <img src={props.imageurl} loading="lazy" />
            </ProductImage>

            <ProductTitle>{props.product_name.S} </ProductTitle>

            <ProdcutSku>{props.sku_code.S}</ProdcutSku>

            <ProdcutPrice>${props.price_int}</ProdcutPrice>

            <ProdcutAvailability in_stock={props.in_stock.N > 0}>
                {props.in_stock.N > 0 ? 'In Stock' : 'Out of Stock'}
            </ProdcutAvailability>

            <ProdcutCategory>
                {props.tags.L.map((item,key) => (
                    <span key={key}>{item.S}</span>
                ))}
            </ProdcutCategory>

            <ProdcutSource>Glove Up</ProdcutSource>

            <ProdcutEditBtn>
                <Edit width={18} height={18} /> Edit
            </ProdcutEditBtn>
        </ProductContainer>
    )
}
