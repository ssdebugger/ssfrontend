import { DynamicPage } from '@/components/_pages/dynamic-products-page/[slug]'
import { GetStaticPaths, GetStaticProps } from 'next'

export default DynamicPage

export const getStaticProps: GetStaticProps = async () => {
    const responseproducts = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getallproducts'
    )
    const products = await responseproducts.json()

    return {
        props: {
            products
        },
        revalidate: 120,
    }
}
