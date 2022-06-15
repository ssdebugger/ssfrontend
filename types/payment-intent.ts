interface UserAddress {
    username: string
    address: string
    city: string
    state: string
    postalCode: string
    country: string
}

export interface IPaymentIntent {
    price: number
    tax: number
    discount: number
    total: number
    shippingAddress: UserAddress
    billingAddress: UserAddress
}
