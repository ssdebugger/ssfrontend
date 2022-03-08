import { SubHeading } from '@/components/typography/heading'
import React from 'react'
import { PropsData } from '..'
import { Container, Section } from '../style'
import { MFUCard } from './mfu-card'
import { PostsContainer } from './more-from-us.style'

export const MoreFromUs: React.FC<PropsData> = ({ posts }) => {
    return (
        <Section>
            <Container>
                <SubHeading>More From us</SubHeading>

                <PostsContainer>
                    {posts.map((item) => (
                        <MFUCard key={item.slug.current} {...item} />
                    ))}
                </PostsContainer>
            </Container>
        </Section>
    )
}
