import styled from 'styled-components'

import { Paragraph } from '@/components/typography/paragraph'

const CertificationsContainer = styled.div`
    padding: 2rem 0 1rem 0;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        align-items: center;
        margin: 4rem 0 1rem;
        padding: 2.5rem 0 1rem;
    }
`

const ImageContainer = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.theme.blueGray200};
    margin: 0 0 1rem;

    img {
        width: 100%;
        height: 100%;
        background: #fff;
    }
`

const Certificate = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0;

    p {
        text-align: center;
        max-width: 300px;
        text-wrap: break-word;
        line-height: 150%;
    }

    &:first-child {
        ${ImageContainer} {
            width: 110px;
            height: 60px;
        }
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: calc(100% / 3);
    }
`

export const ProductCertifications = () => {
    return (
        <CertificationsContainer>
            <Certificate>
                <ImageContainer>
                    <img alt='certification image' src="/certificates/usda.png" />
                </ImageContainer>

                <Paragraph>
                    The USDA BioPreffered Program certified our plantry line to
                    be 100% Biobased
                </Paragraph>
            </Certificate>

            <Certificate>
                <ImageContainer>
                    <img alt='certification image' src="/certificates/bpi.png" />
                </ImageContainer>
                <Paragraph>
                    BPI certified our products to be commercially compostable{' '}
                </Paragraph>
            </Certificate>

            <Certificate>
                <ImageContainer>
                    <img alt='certification image' src="/certificates/nmsdc.jpg" />
                </ImageContainer>

                <Paragraph>
                    Certified minority enterprise for <br />
                    eco-friendly products
                </Paragraph>
            </Certificate>
        </CertificationsContainer>
    )
}
