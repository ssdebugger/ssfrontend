import Productpage from '@/components/_pages/product'

export default Productpage

export async function getServerSideProps({ query }) {
    const productId = query.id
    // Fetch data from external API
    const response = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getproductdetails?sku=${productId}`
    )
    const data = await response.json()
    if ((await data.body.statusCode) === 200) {
        // Pass data to the page via props
        return { props: { data} }
    } else {
        return {
            notFound: true,
        }
    }
}
