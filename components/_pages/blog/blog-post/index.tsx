import Head from 'next/head'
import Footer from '@/components/footer'
import { LandingLayout } from '@/components/layout/landing'
const BlockContent = require('@sanity/block-content-to-react')
import imageUrlBuilder from '@sanity/image-url'
import SyntaxHighlighter from 'react-syntax-highlighter';
import {
    BlogPostTop,
    Content,
    DateAndReadTime,
    MainContent,
    MoreFromUs,
    ShareLinks,
    SocialLink,
    SocialLinks,
    BlogContainer,
    ContentWrapper,
    PostsContainer,
    SocialButton,
    ActionStatusMsg,
} from './blog-post.style'
import { HyperLink } from '@/components/cta/link'
import {
    Heading3,
    Heading4,
    MainHeading,
    SubHeading,
} from '@/components/typography/heading'
// import { WhatsApp } from '@/components/svg/whatsapp'
import { Link, Mail, Twitter } from 'react-feather'
import { Paragraph } from '@/components/typography/paragraph'
import client from '../../../../sanityclient'
import {
    CardContainer,
    ImageContainer,
    ContentContainer,
    Image,
} from '@/components/card/blog'
import { useState } from 'react'

interface Props {}

function urlFor(source) {
    return String(imageUrlBuilder(client).image(source))
}

const ptComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value)}
                />
            )
        },
    },
}

const BlogPost = ({ blogData, morePosts }) => {
    const {
        title = 'Missing title',
        name = 'Missing name',
        categories,
        authorImage,
        body = [],
    } = blogData
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    let link = `https://sellsage.com/blog/${blogData.slug.current}`
    let encodedBlogLink = encodeURIComponent(link)
    let encodedBlogTitle = encodeURIComponent(blogData.title)

    function copyToClipboard() {
        // Overwrite what is being copied to the clipboard.
        navigator.clipboard.writeText(link)
        setCopiedToClipboard(true)

        setTimeout(() => {
            setCopiedToClipboard(false)
        }, 1200)
    }
    function formatDate(date) {
        var year = date.getFullYear()

        var month = (1 + date.getMonth()).toString()
        month = month.length > 1 ? month : '0' + month

        var day = date.getDate().toString()
        day = day.length > 1 ? day : '0' + day

        return month + '-' + day + '-' + year
    }
    const highlight = (props) => {
        return (
            <span style={{ backgroundColor: props.mark.color }}>
                {props.children}
            </span>
        )
    }
    const serializers = {
        types: {
            code: (props) => (
                <SyntaxHighlighter language={props.node.language}>
                    {props.node.code}
                </SyntaxHighlighter>
            ),
        },
        marks: {
            decorators: [
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Code', value: 'code' },
                { title: 'Highlight', value: 'highlight' },
                { title: 'Strong', value: 'strong' },
                { title: 'Emphasis', value: 'em' },
                { title: 'Code', value: 'code' },
                { title: 'Underline', value: 'underline' },
                { title: 'Strike', value: 'strike-through' },
            ],
            annotations: [
                {
                  name: 'link',
                  type: 'object',
                  title: 'link',
                  fields: [
                    {
                      name: 'url',
                      type: 'url'
                    }
                  ]
                },
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal link',
                  fields: [
                    {
                      name: 'reference',
                      type: 'reference',
                      to: [
                        { type: 'post' }
                        // other types you may want to link to
                      ]
                    }
                  ]
                }
              ]
        },
    }
    return (
        <>
            <Head>
                <meta name="robots" content='noindex'></meta>
                <meta name="title" content={blogData.title}></meta>
                <meta name="description" content={blogData.title}></meta>
                <title>{blogData.title} - sellsage</title>
            </Head>

            <LandingLayout>
                <ContentWrapper>
                    <BlogPostTop>
                        {/* <Heading3>Post category</Heading3> */}

                        <MainHeading>{blogData.title}</MainHeading>

                        <DateAndReadTime>
                            {''}
                            <Heading4>
                                {formatDate(new Date(blogData.publishedAt))}
                            </Heading4>
                            <Heading4>Read time: 6mins</Heading4>
                        </DateAndReadTime>
                    </BlogPostTop>

                    <MainContent>
                        <ShareLinks>
                            <Heading4>SHARE</Heading4>

                            <SocialLinks>
                                {/* <SocialLink
                                    href={`https://whatsapp://send?text=${encodedBlogLink}`}
                                    data-action="share/whatsapp/share"
                                >
                                    <WhatsApp />
                                </SocialLink> */}

                                <SocialLink
                                    href={`https://twitter.com/intent/tweet?counturl=${encodedBlogLink}&text=${encodedBlogTitle}&url=${encodedBlogLink}`}
                                >
                                    <Twitter stroke="#64748B" />
                                </SocialLink>

                                <SocialLink
                                    href={`mailto:?subject=${encodeURIComponent(
                                        blogData.title
                                    )}&body=${encodedBlogTitle}%0A%0A${encodedBlogLink}`}
                                >
                                    <Mail stroke="#64748B" />
                                </SocialLink>

                                <SocialButton onClick={copyToClipboard}>
                                    <Link stroke="#64748B" />
                                    <ActionStatusMsg show={copiedToClipboard}>
                                        Link copied
                                    </ActionStatusMsg>
                                </SocialButton>

                                {/* <SocialLink>
                                    <Download stroke="#64748B" />
                                </SocialLink> */}
                            </SocialLinks>
                        </ShareLinks>

                        <Content>
                            <Paragraph>
                                {/* <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.content,
                                    }}
                                /> */}
                                <BlockContent
                                    projectId={'oz65z3ci'}
                                    dataset={'production'}
                                    blocks={body}
                                    serializers={serializers}
                                ></BlockContent>
                            </Paragraph>
                        </Content>
                    </MainContent>

                    <MoreFromUs>
                        <SubHeading>More from us</SubHeading>

                        <PostsContainer>
                            {morePosts.map((item) => (
                                <HyperLink
                                    key={item.slug.current}
                                    varient="tertiary"
                                    href={'/blog/' + item.slug.current}
                                >
                                    <BlogContainer>
                                        <CardContainer layout="horizontal">
                                            <ImageContainer>
                                                <Image
                                                    src={
                                                        item.mainImage.asset.url
                                                    }
                                                    alt="eco products"
                                                />
                                            </ImageContainer>

                                            <ContentContainer>
                                                <Heading4>
                                                    post category
                                                </Heading4>
                                                <Heading3>
                                                    {item.title}
                                                </Heading3>
                                                <h5>{item.publishedAt} </h5>
                                            </ContentContainer>
                                        </CardContainer>
                                    </BlogContainer>
                                </HyperLink>
                            ))}
                        </PostsContainer>
                    </MoreFromUs>
                </ContentWrapper>
            </LandingLayout>
            <Footer />
        </>
    )
}

export default BlogPost
