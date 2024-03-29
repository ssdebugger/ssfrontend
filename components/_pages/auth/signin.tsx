import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Button } from '@/components/buttons'
import { Input } from '@/components/input'
import { LandingLayout } from '@/components/layout/landing'
import { useAuth, useAuthLogin } from '@/context/auth'
import { HyperLink } from '@/components/header'
import Footer from '@/components/footer'
import { Paragraph } from '@/components/typography/paragraph'
import { MainHeading } from '@/components/typography/heading'
import { Form, InputContainer, Content, AlertContainer } from './auth.style'
import { AlertBar } from '@/components/alert/alert-bar'
import { useAddItem } from '@/context/cart'
import { GetCartItems } from '@/utils/get-cart-items'
import { useAddUser } from '@/context/user'

const SignIn = () => {
    const router = useRouter()
    const loginFn = useAuthLogin()
    const isLoggedIn = useAuth()
    const addToCart = useAddItem()
    const adddToUser = useAddUser()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [alert, setAlert] = useState('')

    const handleChange = (e, targetfield) => {
        setAlert('')

        if (targetfield === 'email') {
            setEmail(e.target.value)
        }
        if (targetfield === 'password') {
            setPassword(e.target.value)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        fetch(
            `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/usersignin?email=${email}&password=${password}`
        )
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                    if(res.statusCode==200){
                        console.log('pass')
                        fetch(
                            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getuserattributes?email='+email
                        )
                            .then((response) => response.json())
                            .then((response) => {
                                let userdetails = {
                                    verified: response.body[0]['email_verified'],
                                    type: response.body[0]['business']
                                        ? 'business'
                                        : 'general',
                                    name: response.body[0]['firstname'],
                                    phone: 0,
                                    email: email,
                                    address: response.body[0]['address'],
                                    wishlist: response.body[0]['wishlist'],
                                }
                                adddToUser(userdetails)

                                window.localStorage.setItem(
                                    'username',
                                    response.body[0]['firstname']
                                )
                            })
                        window.localStorage.setItem('useremail', email)
                        loginFn()

                        router.push({ pathname: '/' })
                    }
                    else{
                        console.log('fail')
                        setAlert(res.body)
                    }
                    }
                  )
                .catch((err) => {
                    setAlert(err.message)
                
            })
    }

    useEffect(() => {
        window.localStorage.setItem('useremail', 'False')
    }, [])

    useEffect(() => {
        const AddTOCartFn = async () => {
            if (
                isLoggedIn &&
                window.localStorage.getItem('useremail') !== undefined &&
                window.localStorage.getItem('useremail').length !== 0
            ) {
                let data = await GetCartItems(
                    window.localStorage.getItem('useremail')
                )

                setTimeout(function () {
                    data.map((item) => {
                        if (Number(item.quantity) !== 0) {
                            let itemDetails = {
                                sku: item.sku_code['S'],
                                quantity: item.quantity,
                                title: item.product_name['S'],
                                img: item.image0,
                                productid: Number(item.product_id['N']),
                                price: Number(item.sale_price['N']),
                                inStockQuantity: Number(item.in_stock['N']),
                            }
                            addToCart(itemDetails)
                        }
                    })
                }, 2000)
            }
        }

        AddTOCartFn()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn])

    return (
        <>
            <Head>
                <title>Sign in - Sellsage</title>
                
            </Head>

            <LandingLayout>
                <Content>
                    <MainHeading>Welcome Back</MainHeading>
                    <Paragraph>Sign in to see your order details.</Paragraph>

                    {alert.length > 0 && (
                        <AlertContainer>
                            <AlertBar alertMessage={alert} alertType="red" />
                        </AlertContainer>
                    )}

                    <Form>
                        <InputContainer>
                            <Input
                                required
                                value={email}
                                placeholder="ade@company.com"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'email')
                                }
                                heading="Email"
                                type="text"
                            />
                        </InputContainer>

                        <InputContainer>
                            <Input
                                required
                                value={password}
                                placeholder="Your Password"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'password')
                                }
                                heading="Password"
                                type="password"
                            />

                            {/* <HyperLink href="/forgot-password">
                                Forgot password ?
                            </HyperLink> */}
                        </InputContainer>

                        <Button
                            fill="true"
                            size="large"
                            varient="primary"
                            onClick={(e) => submitForm(e)}
                        >
                            Sign In
                        </Button>
                    </Form>

                    <Paragraph>
                        Don&apos;t have an account?{' '}
                        <HyperLink href="/signup">Create one now.</HyperLink>
                    </Paragraph>
                </Content>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default SignIn
