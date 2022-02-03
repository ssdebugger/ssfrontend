type UserAddress = {
    isDefault: boolean
    username: string
    phoneNo: number
    location: string
    landmark?: string
    city: string
    zipCode: number
    state: string
    country: string
}

export interface User {
    verified: boolean
    type: string
    name: string
    phone: number
    email: string
    address: Array<UserAddress>
    wishlist: Array<string>
}
