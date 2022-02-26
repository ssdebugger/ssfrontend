import BlogPost from '@/components/_pages/blog/blog-post'
import client from '../../sanityclient'

export default BlogPost

export async function getStaticPaths() {
    const paths = await client.fetch(`*[_type == "post"][].slug.current`)
    return {
        paths: paths.map((blogUri) => ({ params: { blogUri } })),
        fallback: false,
    }
}

export async function getStaticProps(context) {
    let recommendedPosts
    const {blogUri=""}=context.params
    const post = await client.fetch(
        `
    *[_type == "post" && slug.current == $blogUri][0]
  `,
        { blogUri }
    )

    const data = await client.fetch(
        `*[_type == "post"][]{mainImage{
            asset->{
                _id,
                url
            }

        },title,publishedAt,slug}`
    )
    recommendedPosts = data.slice(1, 5)
    console.log(data, 'serverprops 2')
    return {
        props: {
            blogData: post,
            morePosts: recommendedPosts,
        },
    }
}
