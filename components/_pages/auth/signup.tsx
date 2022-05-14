import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Header } from '@/components/header'
import { Auth } from 'aws-amplify'
import Confirm from './confirm'
import Popup from './popup'

import { LandingLayout } from 'components/layout/landing'
import {
    BusinessSignUp,
    Container,
    InputContainer,
    MainContent,
    MainContentWrapper,
    PersonalSignUp,
    SideContent,
    SideContentPoint,
    SideContentPointsWrapper,
    SideContentText,
    SignUpForm,
    SignUpTypes,
    Type,
} from './auth.style'
import { Input, Textarea } from '@/components/input'
import { Button } from '@/components/buttons'

import { Heading3, MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { InputLabel } from '@/components/input/style'
import Footer from '@/components/footer'

const Signup = () => {
    const [accountType, setAccountTye] = useState('personal')

    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [userSub, setUsersub] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [num, setNum] = useState('')
    const [numBus, setNumBus] = useState('')
    const [emailBus, setEmailBus] = useState('')
    const [nameBus, setNameBus] = useState('')
    const [addressBus, setAddressBus] = useState('')
    const [toggle, setToggle] = useState(false)
    const [alert, setAlert] = useState('')
    const toggleConfirm = () => {
        setToggle(!toggle)
    }
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const handleCode = (e) => {
        setCode(e.target.value)
    }

    const handleChange = (e, targetfield) => {
        if (targetfield == 'name') {
            setName(e.target.value)
        }
        if (targetfield == 'email') {
            setEmail(e.target.value)
        }
        if (targetfield == 'password') {
            setPassword(e.target.value)
        }
        if (targetfield == 'number') {
            setNum(e.target.value)
        }
        if (targetfield == 'number-company') {
            setNumBus(e.target.value)
        }
        if (targetfield == 'email-company') {
            setEmailBus(e.target.value)
        }
        if (targetfield == 'name-company') {
            setNameBus(e.target.value)
        }
        if (targetfield == 'address-company') {
            setAddressBus(e.target.value)
        }
    }
    const submitForm = (e) => {
        e.preventDefault()

        if (
            email.trim() === '' ||
            name.trim() === '' ||
            password.trim() === ''
        ) {
            /**
             * for testing needs to be changed.
             * */
        } else {
            Auth.configure({
                region: 'us-east-2',
                userPoolId: 'us-east-2_PtilY0Lzj',
                userPoolWebClientId: '449s5sgctbta5ao7ku7qg9r1dq',
            })

            Auth.signUp({
                username:
                    name.replace(/ .*/, '') +
                    email.substring(0, email.indexOf('@')),
                password,
                attributes: {
                    email,
                },
            })
                .then((response) => {
                    setUsersub(response.userSub)
                    toggleConfirm()
                })
                .catch((error) => {
                    setIsOpen(!isOpen)
                    setAlert(error.message)
                })
        }
    }

    const selectAccType = (accType: 'personal' | 'business') => {
        setAccountTye(accType)
    }

    return (
        <>
            <Head>
                <title>Sign up - Sellsage</title>
            </Head>

            <Header />

            {!toggle ? (
                <>
                    <Container>
                        <MainContent>
                            <MainContentWrapper>
                                <MainHeading>
                                    Create your Sellsage Account
                                </MainHeading>

                                <SignUpTypes>
                                    <Type
                                        isSelected={accountType === 'personal'}
                                        onClick={() =>
                                            setAccountTye('personal')
                                        }
                                    >
                                        For Personal
                                    </Type>
                                    <Type
                                        isSelected={accountType === 'business'}
                                        onClick={() =>
                                            setAccountTye('business')
                                        }
                                    >
                                        For Business
                                    </Type>
                                </SignUpTypes>

                                <SignUpForm>
                                    <PersonalSignUp
                                        isActive={accountType === 'personal'}
                                    >
                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'name')
                                                }
                                                required
                                                type="text"
                                                heading="Name"
                                                placeholder="Ada lovice"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'email')
                                                }
                                                required
                                                type="email"
                                                heading="Your Email"
                                                placeholder="adalovice@company.com"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'password')
                                                }
                                                required
                                                type="password"
                                                heading="Enter Password"
                                                placeholder="Your password"
                                            />
                                        </InputContainer>
                                    </PersonalSignUp>

                                    <BusinessSignUp
                                        isActive={accountType === 'business'}
                                    >
                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'name')
                                                }
                                                required
                                                type="text"
                                                heading="Name"
                                                placeholder="Ada lovice"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'email')
                                                }
                                                required
                                                type="email"
                                                heading="Your Email"
                                                placeholder="adalovice@company.com"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'number')
                                                }
                                                required
                                                type="tel"
                                                heading="Phone No"
                                                placeholder="123-456-7890"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(e, 'pasword')
                                                }
                                                required
                                                type="password"
                                                heading="Enter Password"
                                                placeholder="Your password"
                                            />
                                        </InputContainer>

                                        <Heading3>Company Details</Heading3>
                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(
                                                        e,
                                                        'name-company'
                                                    )
                                                }
                                                required
                                                type="texxt"
                                                heading="Company Name"
                                                placeholder="Your password"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(
                                                        e,
                                                        'email-company'
                                                    )
                                                }
                                                required
                                                type="email"
                                                heading="Company Email"
                                                placeholder="Your password"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Input
                                                onChangeHandler={(e) =>
                                                    handleChange(
                                                        e,
                                                        'number-company'
                                                    )
                                                }
                                                required
                                                type="tel"
                                                heading="Company PhoneNo"
                                                placeholder="123-456-7890"
                                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                            />
                                        </InputContainer>

                                        <InputContainer>
                                            <Textarea
                                                onChangeHandler={(e) =>
                                                    handleChange(
                                                        e,
                                                        'address-company'
                                                    )
                                                }
                                                required
                                                type="text"
                                                heading="Company Address"
                                                placeholder="Address of your company"
                                            />
                                        </InputContainer>
                                    </BusinessSignUp>

                                    <Button
                                        onClick={(e) => submitForm(e)}
                                        varient="secondary"
                                        type="submit"
                                    >
                                        Sign Up
                                    </Button>
                                </SignUpForm>
                            </MainContentWrapper>
                        </MainContent>

                        <SideContent imageLink={'creative-rectangle.png'}>
                            <SideContentText>
                                <Heading3>
                                    Benefits of shopping with us
                                </Heading3>

                                <SideContentPointsWrapper>
                                    {accountType === 'personal' ? (
                                        <>
                                            <SideContentPoint>
                                                Live a More Sustainable
                                                Lifestyle
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Go Green
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Promote Fair Trade
                                            </SideContentPoint>
                                        </>
                                    ) : (
                                        <>
                                            <SideContentPoint>
                                                Make Better Sustainable Choices
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Go Green
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Get Bulk Discounts
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Trusted Certified Brands
                                            </SideContentPoint>
                                            <SideContentPoint>
                                                Custom Quotations
                                            </SideContentPoint>
                                        </>
                                    )}
                                </SideContentPointsWrapper>
                            </SideContentText>
                        </SideContent>
                    </Container>

                    <Footer />
                </>
            ) : null}
            {toggle ? (
                <Confirm
                    email={email}
                    code={code}
                    name={name.replace(/ .*/, '')}
                    password={password}
                    response={
                        name.replace(/ .*/, '') +
                        email.substring(0, email.indexOf('@'))
                    }
                    handlecode={(e) => handleCode(e)}
                    toggle={toggleConfirm}
                />
            ) : null}
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
        </>
    )
}

export default Signup
