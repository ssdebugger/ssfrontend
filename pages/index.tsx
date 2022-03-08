import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import Homepage from '@/components/_pages/homepage'
import client from '../sanityclient'

export default Homepage

export const getStaticProps: GetStaticProps = async () => {
    const responseoffers = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
    )

    const responsebundles = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getbundleproducts'
    )
    const data = await client.fetch(
        `*[_type == "post"][]{mainImage{
         asset->{
             _id,
             url
         }       
      },title,publishedAt,slug}`
    )

    const offers = await responseoffers.json()
    const bundles = await responsebundles.json()

    return {
        props: {
            offers,
            bundles,
            data,
        },
        revalidate: 120,
    }
}
