import Dashboard from '@/components/_pages/dashboard'

export default Dashboard

export async function getStaticProps() {
    const res = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getallproducts'
    ).then((data) => data.json())

    const productList = await res.body

    return {
        props: {
            productList,
        },
    }
}
