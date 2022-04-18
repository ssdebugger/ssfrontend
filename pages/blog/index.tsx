import Blog from '@/components/_pages/blog'
import client from '../../sanityclient'
export default Blog

export async function getStaticProps() {
    const data = await client.fetch(
        `*[_type == "post"][]{mainImage{
         asset->{
             _id,
             url
         }       
      },title,publishedAt,slug}`
    )

    console.log(JSON.stringify(data, null, 4))

    return {
        props: {
            data,
        },
        revalidate: 240,
    }
}
