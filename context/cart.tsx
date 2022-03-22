import { useEffect, createContext, useContext, useReducer } from 'react'
import { CartItem } from '@/types/cart'

type ActionType =
    | {
          type: 'ADD'
          sku: string
          title: string
          quantity: number
          img: string
          productid: number
          price: number
          inStockQuantity: number
      }
    | { type: 'DELETE'; sku: string }
    | { type: 'EMPTYCART' }

type Dispatch = (action: ActionType) => void
type CartProviderProps = { children: React.ReactNode }

const CartContext =
    createContext<{ cart: CartItem[]; dispatch: Dispatch }>(undefined)

/**
 * Reducer function
 */
function cartReducer(state: CartItem[], action: ActionType) {
    switch (action.type) {
        case 'ADD':
            let itemIndex = state.findIndex((item) => item.sku === action.sku)
            let cartValue

            if (itemIndex !== -1) {
                cartValue = [...state]

                // To auto increment quantity count pass the 'quantity' value as 0.
                if (action.quantity === 0) {
                    cartValue[itemIndex].quantity =
                        Number(cartValue[itemIndex].quantity) + 1
                } else if (action.quantity >= 1) {
                    cartValue[itemIndex].quantity = action.quantity
                }
            } else {
                let ItemDetails: Omit<CartItem, 'quantity'> = {
                    sku: action.sku,
                    title: action.title,
                    img: action.img,
                    productid: action.productid,
                    price: action.price,
                    inStockQuantity: action.inStockQuantity,
                }

                if (action.quantity === 0) {
                    cartValue = [...state, { ...ItemDetails, quantity: 1 }]
                } else {
                    cartValue = [
                        ...state,
                        { ...ItemDetails, quantity: action.quantity },
                    ]
                }
            }

            localStorage.setItem('cart', JSON.stringify(cartValue))

            return cartValue

        case 'DELETE':
            let filteredValue = state.filter(({ sku }) => sku !== action.sku)
            localStorage.setItem('cart', JSON.stringify(filteredValue))

            return filteredValue

        case 'EMPTYCART':
            localStorage.setItem('cart', JSON.stringify([]))
            return []

        default:
            throw new Error()
    }
}

/**
 * Provider function
 *  */
export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, dispatch] = useReducer(cartReducer, [])

    const value = { cart, dispatch }

    useEffect(() => {
        const localCart: CartItem[] = JSON.parse(localStorage.getItem('cart'))
        if (localCart?.length > 0 && localCart !== null && cart.length === 0) {
            localCart.map((item) => {
                dispatch({ type: 'ADD', ...item })
            })
        }
    }, [])

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/**
 * Custom hooks for CartProvider
 * */
export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider')
    }

    return context
}

export const useAddItem = () => {
    const { dispatch } = useContext(CartContext)

    if (dispatch === undefined) {
        throw new Error('useAddItem must be used within a CartProvider')
    }

    function add({
        sku,
        quantity,
        title,
        img,
        productid,
        price,
        inStockQuantity,
    }: CartItem) {
        dispatch({
            type: 'ADD',
            sku: sku,
            quantity: quantity,
            title: title,
            img: img,
            productid: productid,
            price: price,
            inStockQuantity: inStockQuantity,
        })

        // cartApiOperations('ATC', productid, quantity)
    }

    return add
}

export const useRemoveItem = () => {
    const { dispatch } = useContext(CartContext)

    if (dispatch === undefined) {
        throw new Error('useRemoveItem must be used within a CartProvider')
    }

    function remove(sku: CartItem['sku']) {
        dispatch({ type: 'DELETE', sku: sku })
    }

    return remove
}

export const useClearCart = () => {
    const { dispatch } = useContext(CartContext)

    if (dispatch === undefined) {
        throw new Error('useClearCart must be used within a CartProvider')
    }

    function remove() {
        dispatch({ type: 'EMPTYCART' })
    }

    return remove
}
