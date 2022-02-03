import styled from 'styled-components'

import { Paragraph } from '@/components/typography/paragraph'

const VideoContainer = styled.figure`
    max-width: 800px;
    margin: 0 auto;
    margin: 2rem auto;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 3rem auto;
    }

    video {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
    }

    p {
        color: ${(props) => props.theme.blueGray400};
        text-align: center;
        margin: 0.25rem auto 0;
        font-size: ${(pros) => pros.theme.textSm};
    }
`

const Video = styled.video``

export const IntroVideo = () => {
    return (
        <VideoContainer>
            <Video
                autoPlay={true}
                loop
                controls={false}
                muted
                aria-label="Tons of waste diverted from Landfills as of Early 2021"
            >
                <source
                    src="/videos/sustainability-intro.mp4"
                    type="video/mp4"
                />
            </Video>

            <Paragraph>
                Tons of waste diverted from Landfills as of Early 2021
            </Paragraph>
        </VideoContainer>
    )
}
