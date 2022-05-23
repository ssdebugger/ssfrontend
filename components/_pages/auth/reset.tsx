import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Input } from '@/components/input/oldInput'
import { Header } from '@/components/header'
import  Auth  from '@aws-amplify/auth'
import { LandingLayout } from 'components/layout/landing'
import {
    PageDesc,
    PageHeader,
    Form,
    InputContainer,
    SubmitBtn,
    Content,
    PageLink,
    LinkContainer,
} from './auth.style'
import Popup from './popup'

export const Reset = () => {
    const [confirmpwd, setConfirmpwd] = useState('')
    const [code, setCode] = useState('')
    const [user, setUser] = useState('')
    const [newpwd, setNewpwd] = useState('')
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    const [alert, setAlert] = useState('')
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const handleCode = (e) => {
        setCode(e.target.value)
    }

    const handleChange = (e, targetfield) => {
        if (targetfield === 'user') {
            setUser(e.target.value)
        }
        if (targetfield === 'verificationcode') {
            setCode(e.target.value)
        }
        if (targetfield === 'newpassword') {
            setNewpwd(e.target.value)
        }
        if (targetfield === 'confirmpassword') {
            setConfirmpwd(e.target.value)
        }
    }
    const submitForm = (e) => {
        e.preventDefault()
        if (
            code.trim() === '' ||
            confirmpwd.trim() === '' ||
            newpwd.trim() === '' ||
            user.trim() === ''
        ) {
        } else {
            Auth.configure({
                region: 'us-east-2',
                userPoolId: 'us-east-2_PtilY0Lzj',
                userPoolWebClientId: '449s5sgctbta5ao7ku7qg9r1dq',
            })

            Auth.forgotPasswordSubmit(user.trim(), code.trim(), newpwd.trim())
                .then((response) => {
                    fetch("https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/passwordresetemail?email="+user)
                    router.push({
                        pathname: '/signin',
                    })
                })
                .catch((error) => {
                    setIsOpen(!isOpen)
                    setAlert(error.message)
                })
        }
    }

    return (
        <>
            <Head>
                <title>Rest Password - Sellsage</title>
            </Head>
            <LandingLayout>
                <>
                    <Content>
                        <PageHeader>Set a new password</PageHeader>
                        <PageDesc>
                            Verification code has been sent to your email
                        </PageDesc>

                        <Form>
                            <InputContainer>
                                <Input
                                    value={user}
                                    onChangeHandler={(e) =>
                                        handleChange(e, 'user')
                                    }
                                    heading="Email"
                                    type="text"
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    value={code}
                                    onChangeHandler={(e) =>
                                        handleChange(e, 'verificationcode')
                                    }
                                    heading="Verification Code"
                                    type="text"
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    value={newpwd}
                                    onChangeHandler={(e) =>
                                        handleChange(e, 'newpassword')
                                    }
                                    heading="New Password"
                                    type="text"
                                />
                            </InputContainer>
                            <InputContainer>
                                <Input
                                    value={confirmpwd}
                                    onChangeHandler={(e) =>
                                        handleChange(e, 'confirmpassword')
                                    }
                                    heading="Confirm New Password"
                                    type="text"
                                />
                            </InputContainer>
                            <SubmitBtn onClick={(e) => submitForm(e)}>
                                Reset Password
                            </SubmitBtn>
                        </Form>
                        {isOpen && (
                            <Popup
                                content={
                                    <>
                                        <b>{alert} !!!</b>
                                    </>
                                }
                                handleClose={togglePopup}
                            />
                        )}

                        <LinkContainer>
                            <Link href="/signin" passHref>
                                <PageLink>
                                    Already registered? Sign in instead.
                                </PageLink>
                            </Link>
                        </LinkContainer>
                    </Content>
                </>
            </LandingLayout>
        </>
    )
}
