import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import  Auth  from '@aws-amplify/auth'

import { Button } from '@/components/buttons'
import { Input } from '@/components/input'
import { LandingLayout } from '@/components/layout/landing'
import { HyperLink } from '@/components/header'
import { Paragraph } from '@/components/typography/paragraph'
import { MainHeading } from '@/components/typography/heading'

import { Form, InputContainer, Content, AlertContainer } from './auth.style'
import { AlertBar } from '@/components/alert/alert-bar'
import { ArrowLeft } from 'react-feather'
import styled from 'styled-components'

const BackLink = styled.div`
    margin: 2.5rem 0 0;

    a {
        width: max-content;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme.linkColor};

        svg {
            margin-right: 0.5rem;
            transition: ${(props) => props.theme.transition};
        }

        &:hover {
            text-decoration: underline;

            svg {
                transform: translateX(-5px);
            }
        }
    }
`

const Forgotpassword = (props) => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [alert, setAlert] = useState('')

    const handleChange = (e) => {
        setAlert('')
        setEmail(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        Auth.configure({
            region: 'us-east-2',
            userPoolId: 'us-east-2_PtilY0Lzj',
            userPoolWebClientId: '449s5sgctbta5ao7ku7qg9r1dq',
        })
        Auth.forgotPassword(email)
            .then((res) => {
                router.push({ pathname: '/reset' })
            })
            .catch((err) => {
                setAlert(err.message)
            })
    }

    return (
        <>
            <Head>
                <title>Reset your password - Sellsage</title>
            </Head>

            <LandingLayout>
                <Content>
                    <MainHeading>Forgot password?</MainHeading>
                    <Paragraph>
                        Type the address linked to your account and we&#39;ll send
                        you password reset instructions. They might end up in
                        your spam folder, so please check there as well.
                    </Paragraph>

                    {alert.length > 0 && (
                        <AlertContainer>
                            <AlertBar alertMessage={alert} alertType="red" />
                        </AlertContainer>
                    )}

                    <Form>
                        <InputContainer>
                            <Input
                                value={email}
                                placeholder="ade@company.com"
                                onChangeHandler={(e) => handleChange(e)}
                                heading="Email"
                                type="text"
                            />
                        </InputContainer>

                        <Button
                            fill='true'
                            size="large"
                            varient="primary"
                            onClick={(e) => submitForm(e)}
                        >
                            Send Instructions
                        </Button>
                    </Form>

                    <BackLink>
                        <HyperLink href="/signin">
                            <ArrowLeft width={20} height={20} /> Back to Sign In
                        </HyperLink>
                    </BackLink>
                </Content>
            </LandingLayout>
        </>
    )
}

export default Forgotpassword
