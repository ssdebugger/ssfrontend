import { GridContainer, GridItem } from '../homepage/style'
import { Typography } from '../product/index.style'
import { FlexItem, BagImage, FlexName } from './style'
import { Trash2 } from 'react-feather'
import Billing from './billing'
import { useCart, useRemoveItem } from 'context/cart'

const Removeitem = (props) => {
    const removeitem = useRemoveItem()
    const handleclick = () => {
        removeitem(props.sku)
    }
    return (
        <Typography marginTop="2rem">
            <Trash2
                cursor="pointer"
                onClick={() => handleclick()}
                size="1.25rem"
            />
        </Typography>
    )
}

const Dummy = () => {
    const { cart } = useCart()
    return (
        <>
            {cart.map((item) =>
                item.quantity != 0 ? (
                    <div
                        key={item.sku}
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            background: '#f8f7fa',
                            marginTop: '1rem',
                        }}
                    >
                        <FlexItem>
                            <Typography fontSize="1rem" fontWeight="500">
                                Image
                            </Typography>
                            <BagImage src={item.img} />
                        </FlexItem>
                        <FlexName>
                            <Typography fontSize="1rem" fontWeight="500">
                                Product
                            </Typography>
                            <Typography
                                marginTop="2rem"
                                fontSize="1rem"
                                fontWeight="400"
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                color="green"
                                fontSize="0.8rem"
                                marginTop="0.1rem"
                                fontWeight="400"
                            >
                                Tableware
                            </Typography>
                        </FlexName>
                        <FlexItem>
                            <Typography fontSize="1rem" fontWeight="500">
                                Size
                            </Typography>
                            <Typography
                                marginTop="2rem"
                                fontSize="1rem"
                                fontWeight="400"
                            >
                                10 inch
                            </Typography>
                        </FlexItem>
                        <FlexItem>
                            <Typography fontSize="1rem" fontWeight="500">
                                {' '}
                                Price
                            </Typography>
                            <Typography
                                marginTop="2rem"
                                fontSize="1rem"
                                fontWeight="400"
                            >
                                {' '}
                                $ 10
                            </Typography>
                        </FlexItem>
                        <FlexItem>
                            <Typography fontSize="1rem" fontWeight="500">
                                {' '}
                                Qty
                            </Typography>
                            <input
                                style={{
                                    marginTop: '2rem',
                                    width: '3rem',
                                    marginLeft: '1rem',
                                    paddingLeft: '0.2rem',
                                }}
                                type="number"
                                placeholder={String(item.quantity)}
                                min="1"
                            />
                        </FlexItem>
                        <FlexItem>
                            <Typography fontSize="1rem" fontWeight="500">
                                Remove
                            </Typography>
                            <Removeitem sku={item.sku} />
                        </FlexItem>
                    </div>
                ) : null
            )}
        </>
    )
}

const ProductsInCart = (props) => {
    const { cart } = useCart()
    console.log(cart, 'in cart items')
    var count = 0
    const cartcount = () => {
        cart.map((item) => {
            if (item.quantity != 0) {
                count = 1
            }
        })
    }
    cartcount()
    console.log('count', count)
    return count != 0 ? (
        <GridContainer>
            <GridItem sm={100} md={65} lg={65}>
                <Typography fontSize="1.25rem" fontWeight="600">
                    Shopping Bag
                </Typography>
                <Dummy />
            </GridItem>
            <GridItem sm={100} md={20} lg={20}>
                <Billing />
            </GridItem>
        </GridContainer>
    ) : (
        <div style={{ display: 'block', flex: 1, marginBottom: '10%' }}>
            <Typography
                fontSize="1.5rem"
                marginLeft="25%"
                marginTop="15%"
                fontWeight="500"
            >
                Your cart is empty😔!!
            </Typography>
        </div>
    )
}

export default ProductsInCart
