import Productpage from '@/components/_pages/product'

export default Productpage

export async function getServerSideProps({ query }) {
    var productSku = query.sku
    const response = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getproductdetails?sku=${productSku}`
    )

    const data = await response.json()

    try {
        if ((await data.body.statusCode) === 200) {
            const responseoffers = await fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
            )

            const offers = await responseoffers.json()

            return { props: { data, offers } }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
}
