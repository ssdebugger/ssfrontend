import styled from 'styled-components'

import { Heading3, Heading4 } from '@/components/typography/heading'
import { HomepageContainerStyles } from '../../style'
import { Paragraph } from '@/components/typography/paragraph'
import { ScrollbarStyles } from 'theme'
import { HyperLink } from '@/components/cta/link'
import blogJson from '../../../../../cummulative.json'

const StoriesFromUsContainer = styled.section`
    ${HomepageContainerStyles}
    padding: 3rem 0;

    & > h3 {
        margin: 0;
        text-align: center;
        font-size: 1.75rem;
        line-height: 1.25;
        font-weight: 800;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding-right: 0;

        & > h3 {
            font-size: 2.25rem;
            line-height: 2.875rem;
        }
    }
`

const BlogPostsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    overflow: auto;
    gap: 2.25rem;
    padding: 3rem ${(props) => props.theme.spacingMobile} 2rem;

    ${ScrollbarStyles}
`

const Article = styled.article`
    width: 300px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: 350px;
    }
`

const BlogPost = styled.a`
    display: block;
`

const BlogPostImgContainer = styled.div`
    aspect-ratio: 2/3;
`
const BlogPostImg = styled.img`
    width: 100%;
    height: auto;
    aspect-ratio: 2/3;
    object-fit: cover;
`

const BlogPostContent = styled.div`
    text-align: center;
    margin: 1.125rem;

    span {
        display: block;
        margin-bottom: 1.125rem;
        font-size: 0.75rem;
    }

    h4 {
        font-family: ${(props) => props.theme.marcellus};
        font-weight: 400;
        margin-bottom: 1.125rem;
        font-size: 1.44rem;
        line-height: 1.375;
    }

    p {
        line-height: 1.5rem;
    }
`

const Post = (props) => {
    return (
        <Article>
            <BlogPost>
                <BlogPostImgContainer>
                    <BlogPostImg src={props.img} alt='image' />
                </BlogPostImgContainer>

                <BlogPostContent>
                    <HyperLink varient="tertiary" href={'/blog/' + props.id}>
                        <span>READ NOW</span>
                    </HyperLink>

                    <Heading4>{props.title}</Heading4>

                    {/* <Paragraph>
                        The best way to reduce waste at home is composting and
                        guess what, it’s really not that hard!
                    </Paragraph> */}
                </BlogPostContent>
            </BlogPost>
        </Article>
    )
}

export const StoriesFromUs = () => {
    return (
        <StoriesFromUsContainer>
            <Heading3>Stories from us</Heading3>

            <BlogPostsContainer>
                <Post
                    img={blogJson[0]['image_url']}
                    title={blogJson[0]['title']}
                    id={blogJson[0]['blog_id']}
                />
                <Post
                    img={blogJson[4]['image_url']}
                    title={blogJson[4]['title']}
                    id={blogJson[4]['blog_id']}
                />
                <Post
                    img={blogJson[3]['image_url']}
                    title={blogJson[3]['title']}
                    id={blogJson[3]['blog_id']}
                />
                <Post
                    img={blogJson[5]['image_url']}
                    title={blogJson[5]['title']}
                    id={blogJson[5]['blog_id']}
                />
                <Post
                    img={blogJson[2]['image_url']}
                    title={blogJson[2]['title']}
                    id={blogJson[2]['blog_id']}
                />
            </BlogPostsContainer>
        </StoriesFromUsContainer>
    )
}
