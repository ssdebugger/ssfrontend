import BlogPost from '@/components/_pages/blog/blog-post'
import jsonData from '../../cummulative.json'

export default BlogPost

export async function getStaticPaths() {
    const paths = jsonData.map((blog) => ({
        params: {
            blogUri: blog.blog_id,
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { blogUri } }) {
    let data, recommendedPosts

    jsonData.forEach((blog) => {
        if (blog.blog_id === blogUri) {
            data = blog
        }
    })

    recommendedPosts = jsonData.slice(8, 13)

    return {
        props: {
            blogData: data,
            morePosts: recommendedPosts,
        },
    }
}
