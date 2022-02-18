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
    console.log(data,'get server side props 1')
    return {
        props: {
            data,
        },
    }
}
