import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Homepage from '@/components/_pages/homepage'

export default Homepage

export const getStaticProps: GetStaticProps = async () => {
    const responseoffers = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
    )

    const responsebundles = await fetch(
        'https://hqe9oxnhea.execute-api.us-east-2.amazonaws.com/dev/getbundleproducts'
    )

    const offers = await responseoffers.json()
    const bundles = await responsebundles.json()

    return {
        props: {
            offers,
            bundles,
        },
        revalidate: 10,
    }
}
