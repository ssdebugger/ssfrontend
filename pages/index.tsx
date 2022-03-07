import Homepage from '@/components/_pages/homepage'
import client from '../sanityclient'

export default Homepage

export async function getServerSideProps() {

        const data = await client.fetch(
            `*[_type == "post"][]{mainImage{
             asset->{
                 _id,
                 url
             }       
          },title,publishedAt,slug}`
        )
    const responseoffers = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
    )
  
    const responsebundles = await fetch(
        'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getbundleproducts'
    )
    const offers = await responseoffers.json()
    const bundles = await responsebundles.json()
    return {
        props: {
            offers,
            bundles,
            data
        },
    }
}
