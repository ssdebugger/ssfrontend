import { useState } from 'react'

import Head from 'next/head'
import { Button } from '@/components/buttons'
import { Input } from '@/components/input'
import Footer from '@/components/footer'
import { Paragraph } from '@/components/typography/paragraph'
import { MainHeading } from '@/components/typography/heading'
import { useAlert } from 'react-alert'
import {
    Form,
    InputContainer,
    Content,
    AlertContainer,
} from 'components/_pages/auth/auth.style'
import { AlertBar } from '@/components/alert/alert-bar'
import styled from 'styled-components'
import { LandingLayout } from '@/components/layout/landing'

const Label = styled.label`
    display: block;
    color: ${(props) => props.theme.blueGray900};
    margin-bottom: 0.875rem;
    span {
        color: ${(props) => props.theme.red400};
    }
`

const SelectOptions = styled.select`
    height: 45px;
    width: 40%;
    padding-left: 2rem;
    cursor: pointer;
`

const Coupon = () => {
    const [promocode, setPromocode] = useState('')
    const [ordermin, setOrdermin] = useState('')
    const [alert, setAlert] = useState('')
    const [discountpercent, setDiscountpercent] = useState('')
    const [couponlimit, setCouponlimit] = useState('')

    const handleChange = (e, targetfield) => {
        setAlert('')

        if (targetfield === 'promocode') {
            setPromocode(e.target.value)
        }
        if (targetfield === 'ordermin') {
            setOrdermin(e.target.value)
        }
        if (targetfield === 'discountpercent') {
            setDiscountpercent(e.target.value)
        }
        if (targetfield === 'couponlimit') {
            setCouponlimit(e.target.value)
        }
    }
    const alertdiscountpercent = useAlert()
    const submitForm = (e) => {
        e.target.innerHTML = 'CREATING...'
        e.target.disabled = true
        e.preventDefault()
        let data = {
            coupon: String(promocode),
            orderminimum: String(ordermin),
            discount: String(discountpercent),
            limit: String(couponlimit),
        }
        fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/createcoupon',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                headers: {
                    'Content-Type': 'application/json',
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(data), // body data type must match "Content-Type" header
            }
        )
            .then((res) => {
                e.target.innerHTML = 'CREATE  COUPON'
                e.target.disabled = false
                alertdiscountpercent.show('Coupon created')
            })
            .catch((err) => {
                console.log(err)
                e.target.innerHTML = 'CREATE  COUPON'
                e.target.disabled = false
                alertdiscountpercent.show('Fill all details')
            })
    }
    return (
        <>
            <Head>
                <title>Coupon - Sellsage</title>
                <meta name="robots" content="noindex"></meta>
            </Head>

            <LandingLayout>
                <Content>
                    <MainHeading>Coupon Panel</MainHeading>
                    <Paragraph>Create your own custom coupon.</Paragraph>

                    {alert.length > 0 && (
                        <AlertContainer>
                            <AlertBar alertMessage={alert} alertType="red" />
                        </AlertContainer>
                    )}

                    <Form>
                        <InputContainer>
                            <Input
                                required
                                value={promocode}
                                placeholder="COUPON20"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'promocode')
                                }
                                heading="Promo Code"
                                type="string"
                            />
                        </InputContainer>

                        <InputContainer>
                            <Input
                                required
                                value={ordermin}
                                placeholder="0"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'ordermin')
                                }
                                heading="Order Minimum"
                                type="number"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                required
                                value={discountpercent}
                                placeholder="15"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'discountpercent')
                                }
                                heading="Discount Percent"
                                type="number"
                            />
                        </InputContainer>
                        <InputContainer>
                            <Input
                                required
                                value={couponlimit}
                                placeholder="1"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'couponlimit')
                                }
                                heading="Coupon Limit "
                                type="number"
                            />
                        </InputContainer>

                        <Button
                            fill="true"
                            size="large"
                            varient="primary"
                            onClick={(e) => submitForm(e)}
                        >
                            CREATE COUPON
                        </Button>
                    </Form>
                </Content>
            </LandingLayout>

        </>
    )
}

export default Coupon;
