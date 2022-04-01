import { DynamicPage } from '@/components/_pages/dynamic-products-page/[slug]'

export default DynamicPage

export async function getServerSideProps(context) {
    const filter=context.params=='shop'?'none': context.params.filter
    const responseproducts = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getallproducts'
    )
    const products = await responseproducts.json()
    return {
        props: {
            products,
            filter
        },
    }
}
