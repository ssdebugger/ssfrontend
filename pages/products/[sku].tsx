import Productpage from '@/components/_pages/product'

export default Productpage

export async function getServerSideProps({ query }) {
    const productSku = query.sku
    // Fetch data from external API
    const response = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getproductdetails?sku=${productSku}`
    )
    const data = await response.json()
    if ((await data.body.statusCode) === 200) {
        const responseoffers = await fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
        )
        const offers = await responseoffers.json()
        // Pass data to the page via props
        return { props: { data, offers } }
    } else {
        return {
            notFound: true,
        }
    }
}
