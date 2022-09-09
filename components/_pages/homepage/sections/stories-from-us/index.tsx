import styled from 'styled-components'
import Image from 'next/image'
import { Heading3, Heading4 } from '@/components/typography/heading'
import { HomepageContainerStyles } from '../../style'
import { ScrollbarStyles } from 'theme'
import { HyperLink } from '@/components/cta/link'

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

const BlogPost = styled.div`
    display: block;
    cursor: pointer;
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
            <HyperLink varient="tertiary" href={'/blog/' + props.id}>
                <BlogPost>
                    <BlogPostImgContainer>
                        <Image
                            style={{ aspectRatio: '2/3' }}
                            src={props.img}
                            alt={props.alt}
                            width="100%"
                            height="150%"
                            objectFit="cover"
                            layout="responsive"
                        />
                    </BlogPostImgContainer>

                    <BlogPostContent>
                        <span>READ NOW</span>

                        <Heading4>{props.title}</Heading4>

                        {/* <Paragraph>
                        The best way to reduce waste at home is composting and
                        guess what, it’s really not that hard!
                    </Paragraph> */}
                    </BlogPostContent>
                </BlogPost>
            </HyperLink>
        </Article>
    )
}

export const StoriesFromUs = (props) => {
    const data = props.data
    const imgalt = [
        'sustainability ideas',
        '16 disposable product ideas',
        'resposibility towards trash ',
        'disposable christmas dinner party ideas',
        'labor day party with disposable dinnerware',
    ]
    
    return (
        <StoriesFromUsContainer>
            <Heading3>
                Transition yourself towards a more sustainable lifestyle
            </Heading3>
            <BlogPostsContainer>
                {data.slice(28, 33).map((item, key) => (
                    <Post
                        key={key}
                        img={item.mainImage.asset.url}
                        title={item.title}
                        id={item.slug.current}
                        alt={imgalt[key]}
                    />
                ))}
            </BlogPostsContainer>
        </StoriesFromUsContainer>
    )
}
