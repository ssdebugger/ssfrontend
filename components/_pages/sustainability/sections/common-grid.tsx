import styled from 'styled-components'
import Image from 'next/image'

import { Heading3, SubHeading,MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { ImpactContainerStyles } from '../impact.style'
import { HyperLink } from '@/components/cta/link'


interface Props {
    sectionTitle: string
    description: string
    blogs?: [{ title: string; link: string; imgLink: string }]
}

const Container = styled.div`
    ${ImpactContainerStyles}
`

const BlogPostImg = styled.div`
    position: relative;
    width: 100%;

    img {
        object-fit: cover;
    }
`

const BlogPost = styled.div<{ width?: number; height?: number }>`
    display: flex;
    flex-direction: column;
    min-height: 300px;
    margin: 0 0 3rem;

    h3 {
        font-size: ${(props) => props.theme.heading4};
        font-weight: 500;
        margin: 0.875rem 0;
    }

    a {
        color: ${(props) => props.theme.linkColor};
    }

    ${BlogPostImg} {
        height: 350px;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        width: ${(props) => props.width && `${props.width}px`};
        margin: 0;

        ${BlogPostImg} {
            height: ${(props) =>
                props.height ? `${props.height}px` : '450px'};
        }
    }
`

const Grid = styled.div`
    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        justify-content: space-between;
    }
`

const Column = styled.div<{ flexBasis?: number }>`
    p {
        padding: 0 0 2rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 45%;
        flex-basis: ${(props) =>
            props.flexBasis ? `${props.flexBasis}%` : '45%'};

        p {
            padding: 0 0 6rem;
        }
    }
`

export const CommonGrid: React.FC<Props> = ({ sectionTitle, description }) => {
    return (
        <Container>
            <MainHeading>{sectionTitle}</MainHeading>

            <Grid>
                <Column flexBasis={40}>
                    <Paragraph
                        dangerouslySetInnerHTML={{ __html: `${description}` }}
                    ></Paragraph>

                    {/* <BlogPost>
                        <BlogPostImg>
                            <Image
                                src={blogJson[1]['image_url']}
                                layout="fill"
                            />
                        </BlogPostImg>

                        <Heading3>
                        {blogJson[8]['title']}
                        </Heading3>

                        <HyperLink varient="tertiary" href="/blog/sample">
                            Read more
                        </HyperLink>
                    </BlogPost> */}
                </Column>

                {/* <Column>
                    {/* <BlogPost height={700}>
                        <BlogPostImg>
                            <Image
                                src={blogJson[2]['image_url']}
                                layout="fill"
                            />
                        </BlogPostImg>

                        <Heading3>
                        {blogJson[9]['title']}
                        </Heading3>

                        <HyperLink varient="tertiary" href="/blog/sample">
                            Read more
                        </HyperLink>
                    </BlogPost> */}
                {/* </Column> */}
            </Grid>
        </Container>
    )
}
