type CartItems = Array<{
    product_id: string
    regular_price: string
    sku_code: string
    description: string
    product_name: string
    sale_price: string
    quantity: number
    in_stock: string
    image0: string
}>

export async function GetCartItems(email: string): Promise<CartItems> {
    try {
        let cartData = await fetch(
            `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getcartdetails?email=${email}`
        )
            .then((res) => res.json())
            .then((data) => data.body)

        return cartData
    } catch (error) {
        throw new Error(`Cart Items failed to load. Error: ${error}`)
    }
}
