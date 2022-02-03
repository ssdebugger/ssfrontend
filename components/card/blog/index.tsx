import { Heading3, Heading4 } from '@/components/typography/heading'
import styled from 'styled-components'

interface Props {
    layout: 'vertical' | 'horizontal'
}

export const ImageContainer = styled.div``

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`

export const ContentContainer = styled.div`
    h3 {
        font-weight: 400;
        font-family: ${(props) => props.theme.serif};
        font-size: ${(props) => props.theme.textLarge};
        margin: 0 0 0.25rem;

        @media (min-width: ${(props) => props.theme.screenMd}) {
            font-size: ${(props) => props.theme.heading4};
        }
    }

    h4 {
        font-size: 0.75rem;
        text-transform: uppercase;
        margin: 0 0 0.25rem;
        color: ${(props) => props.theme.green400};
    }

    h5 {
        font-size: 0.75rem;
        font-weight: 400;
        color: ${(props) => props.theme.blueGray500};
    }
`

export const CardContainer = styled.div<{ layout: Props['layout'] }>`
    display: flex;
    flex-direction: ${(props) => props.layout === 'vertical' && 'column'};

    ${ImageContainer} {
        margin: ${(props) =>
            props.layout === 'vertical' ? '0 0 1rem' : '0 1rem 0 0'};
    }

    ${Image} {
        width: ${(props) => (props.layout === 'vertical' ? '100%' : '105px')};
        height: ${(props) => (props.layout === 'vertical' ? 'auto' : '105px')};
    }
`

export const BlogCard: React.FC<Props> = ({ layout }) => {
    return (
        <CardContainer layout={layout}>
            <ImageContainer>
                <Image src="/gloveup.png" />
            </ImageContainer>

            <ContentContainer>
                <Heading4>post category</Heading4>
                <Heading3>The true meaning behind eco-friendly terms</Heading3>
                <h5>October 18, 2021 </h5>
            </ContentContainer>
        </CardContainer>
    )
}
