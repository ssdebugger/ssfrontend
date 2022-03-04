import { PropsData } from '..'

import { SubHeading } from '@/components/typography/heading'
import { PostCard } from './post-card'

import {
    FeaturedPostsContainer,
    Post,
    PostContainer,
    PostList,
} from './featured-posts.style'

export const FeatuerdPosts: React.FC<PropsData> = ({ posts }) => {
    return (
        <FeaturedPostsContainer>
            <SubHeading>Featured Posts</SubHeading>
            <PostContainer>
                <PostList>
                    {posts.map((item) => (
                        <Post key={item.slug.current}>
                            <PostCard {...item} />
                        </Post>
                    ))}
                </PostList>
            </PostContainer>
        </FeaturedPostsContainer>
    )
}
