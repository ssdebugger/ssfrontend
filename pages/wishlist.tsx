import Wishlist from '@/components/_pages/wishlist'

export default Wishlist

export async function getServerSideProps(context) {
    const email = context.query.email
    const wishlist = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getwishlistdetails?email=' +
            email
    )

    const wishlistresponse = await wishlist.json()
    return {
        props: {
            wishlistresponse: wishlistresponse,
        },
    }
}
