import Head from 'next/head'
import { useEffect, useState } from 'react'

import { Header } from '@/components/header'
import Footer from '@/components/footer'
import { FeatuerdPosts } from './featured-posts'
import { HeadlinePosts } from './headline-posts'

import { BlogPageContainer } from './style'
import { MoreFromUs } from './more-from-us'

/**
 * Types for data received from sanity.io
 */

export type PostType = {
    mainImage: {
        asset: {
            _id: string
            url: string
        }
    }
    publishedAt: string
    slug: {
        _type: string
        current: string
    }
    title: string
}

export interface PropsData {
    posts: Array<PostType>
}

/**
 * Helper functions required in blog page
 */
function formatDate(date) {
    date = new Date(date)
    var year = date.getFullYear()
    var month = (1 + date.getMonth()).toString()
    month = month.length > 1 ? month : '0' + month

    var day = date.getDate().toString()
    day = day.length > 1 ? day : '0' + day

    return month + '-' + day + '-' + year
}
function sortData(data) {
    data.sort((a, b) => {
        a = new Date(a.publishedAt)
        b = new Date(b.publishedAt) 
        return b-a
    })
}

function setAllDates(data) {
    for (let i = 0; i < data.length; i++) {
        data[i]['publishedAt'] = formatDate(data[i]['publishedAt'])
    }
}

/**
 * Main Function
 */
const Blog = (props) => {
    const data = props.data
    const [headlinePosts, setHeadlinePosts] = useState([])
    const [featuredPosts, setFeaturedPosts] = useState([])
    const [morePosts, setMorePosts] = useState([])
    useEffect(() => {
   
        sortData(data)

        setAllDates(data)

        if (headlinePosts.length < 5) {
            for (let i = 0; i < 5; i++) {
                setHeadlinePosts((prevData) => [...prevData, data[i]])
            }
        }

        if (featuredPosts.length < 3) {
            for (let i = 6; i < 10; i++) {
                setFeaturedPosts((prevData) => [...prevData, data[i]])
            }
        }

        if (morePosts.length < 30) {
            for (let i = 11; i < 40; i++) {
                setMorePosts((prevData) => [...prevData, data[i]])
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <Head>
                <meta name='title' content='Blog | Compostable Dinnerware & Sustainable Living Tips'>
                </meta>
                <meta name='description' content='Blogs made to inspire you and help you transition toward a green lifestyle. Low waste wedding, composting tips, sustainable gift ideas, zero waste home & more!'>
                </meta>
                <title>Blog | Compostable Dinnerware & Sustainable Living Tips</title>
            </Head>

            <Header />
            <BlogPageContainer>
                <HeadlinePosts posts={headlinePosts} />
                <FeatuerdPosts posts={featuredPosts} />
                <MoreFromUs posts={morePosts} />
            </BlogPageContainer>

            <Footer />
        </>
    )
}

export default Blog
