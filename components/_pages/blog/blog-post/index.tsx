import Head from 'next/head'
import Footer from '@/components/footer'
import { LandingLayout } from '@/components/layout/landing'
import {
    BlogPostTop,
    Content,
    DateAndReadTime,
    MainContent,
    MainImage,
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
import { WhatsApp } from '@/components/svg/whatsapp'
import { Download, Link, Mail, Twitter } from 'react-feather'
import { Paragraph } from '@/components/typography/paragraph'
import {
    CardContainer,
    ImageContainer,
    ContentContainer,
    Image,
} from '@/components/card/blog'
import { useRouter } from 'next/router'
import blogJson from '../../../../cummulative.json'
import { useState } from 'react'

interface Props {}

const BlogPost = ({ blogData, morePosts }) => {
    const [copiedToClipboard, setCopiedToClipboard] = useState(false)

    let link = `https://sellsage.com/blog/${blogData.blog_id}`
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
        var year = date.getFullYear();
      
        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
      
        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        
        return month + '-' + day + '-' + year;
      }
    return (
        <>
            <Head>
                <title>{blogData.title} - sellsage</title>
            </Head>

            <LandingLayout>
                <ContentWrapper>
                    <BlogPostTop>
                        {/* <Heading3>Post category</Heading3> */}

                        <MainHeading>{blogData.title}</MainHeading>

                        <DateAndReadTime>
                            <Heading4>{formatDate(new Date(blogData.published_date))}</Heading4>
                            <Heading4>Read time: 6mins</Heading4>
                        </DateAndReadTime>
                    </BlogPostTop>

                    <MainContent>
                        <ShareLinks>
                            <Heading4>SHARE</Heading4>

                            <SocialLinks>
                                <SocialLink
                                    href={`https://whatsapp://send?text=${encodedBlogLink}`}
                                    data-action="share/whatsapp/share"
                                >
                                    <WhatsApp />
                                </SocialLink>

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
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: blogData.content,
                                    }}
                                />
                            </Paragraph>
                        </Content>
                    </MainContent>

                    <MoreFromUs>
                        <SubHeading>More from us</SubHeading>

                        <PostsContainer>
                            {morePosts.map((item) => (
                                <HyperLink
                                    key={item.blog_id}
                                    varient="tertiary"
                                    href={'/blog/' + item.blog_id}
                                >
                                    <BlogContainer>
                                        <CardContainer layout="horizontal">
                                            <ImageContainer>
                                                <Image src={item.image_url} alt='image' />
                                            </ImageContainer>

                                            <ContentContainer>
                                                <Heading4>
                                                    post category
                                                </Heading4>
                                                <Heading3>
                                                    {item.title}
                                                </Heading3>
                                                <h5>{item.published_date} </h5>
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
