import Head from 'next/head'
import styled from 'styled-components'

import { Button } from '@/components/buttons'
import { HyperLink } from '@/components/cta/link'
import { Input, Textarea } from '@/components/input'
import { LandingLayout } from '@/components/layout/landing'
import { MainHeading } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { Mail, MapPin, Phone } from 'react-feather'
import Footer from '@/components/footer'
import { useState } from 'react'

const ContactUsContainer = styled.div`
    margin: 1.5rem 0 2.5rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        display: flex;
        justify-content: space-between;
        max-width: ${(props) => props.theme.screenMd};
        margin: 3rem auto;
    }
`

const ContactUsContent = styled.div`
    margin: 0 0 2.5rem;

    h1 {
        font-family: ${(props) => props.theme.serif};
        font-weight: 500;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        max-width: 400px;
        padding: 0 4rem 0 0;

        h1 {
            font-size: ${(props) => props.theme.headingXl};
        }
    }
`

const ContactUsLink = styled.div`
    margin: 0 0 1rem;

    svg {
        margin: 0 1rem 0 0;
        stroke: ${(props) => props.theme.green400};
        stroke-width: 1.5;
    }
`

const FormContainer = styled.div``

const Form = styled.form`
    max-width: 400px;

    p a {
        text-decoration: underline;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        max-width: 350px;
    }
`

const InputContainer = styled.div`
    margin: 0 0 1.5rem;
`

const ContactUs = () => {
    const [name,setName]=useState('')
    const [mail,setMail]=useState('')
    const [contact,setContact]=useState('')
    const [message,setMessage]=useState('')
    const onChange= (e,target) => {
             if(target=='name'){
                 setName(e.target.value)
             }
             if(target=='mail'){
                setMail(e.target.value)
            }
            if(target=='contact'){
                setContact(e.target.value)
            }
            if(target=='message'){
                setMessage(e.target.value)
            }
    }
    const contactemail = (e) => {
        e.target.innerHTML = 'Submitted'
        e.target.disabled = true

        setTimeout(() => {
            e.target.innerHTML = 'Submit'
            e.target.disabled = false
        }, 1500)
        let data={
            "name": name,
            "email": mail,
            "contact": contact,
            "message": message
            }
            fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/contactus',
                {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'no-cors', // no-cors, *cors, same-origin
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body:JSON.stringify(data)
                }
            )   
    }
    return (
        <>
            <Head>
                <meta name='title' content='Contact Us | Sustainable & Compostable Disposable Dinnerware'>
                </meta>
                <meta name='description' content='You have a question about our compostable, natural, palm leaf plates and dinnerware? You want to learn more about our sustainable practice? Get in touch!'>
                </meta>
                <title>Contact Us | Sustainable & Compostable Disposable Dinnerware</title>
            </Head>

            <LandingLayout>
                <ContactUsContainer>
                    <ContactUsContent>
                        <MainHeading>Contact Us</MainHeading>
                        <Paragraph>
                            Let’s explore how we can help you. We will get back
                            to you within two working days.
                        </Paragraph>

                        <ContactUsLink>
                            <Phone />
                            <a href="tel:+1 734 331-9766">+1 734 331-9766</a>
                        </ContactUsLink>
                        <ContactUsLink>
                            <Mail />
                            <a href="mailto:connect@sellsage.com">
                                connect@sellsage.com
                            </a>
                        </ContactUsLink>
                        <ContactUsLink>
                            <MapPin />
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://goo.gl/maps/omS4DrsBMo92UWrt9"
                            >
                                41150 Van Born Rd, Canton, MI 48188{' '}
                            </a>
                        </ContactUsLink>
                    </ContactUsContent>

                    <FormContainer>
                        <Form>
                            <InputContainer>
                                <Input
                                    heading="Name"
                                    placeholder="Ada Centai"
                                    type="text"
                                    value={name}
                                    onChangeHandler={(e) => onChange(e,'name')}
                                    required
                                />
                            </InputContainer>

                            <InputContainer>
                                <Input
                                    heading="Email"
                                    placeholder="centai@company.com"
                                    type="email"
                                    value={mail}
                                    onChangeHandler={(e) => onChange(e,'mail')}
                                    required
                                />
                            </InputContainer>

                            <InputContainer>
                                <Input
                                    heading="Phone No"
                                    placeholder="123-456-7890"
                                    type="tel"
                                    value={contact}
                                    onChangeHandler={(e) => onChange(e,'contact')}
                                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                />
                            </InputContainer>

                            <InputContainer>
                                <Textarea
                                    heading="Your message"
                                    placeholder="How can we help you today?"
                                    value={message}
                                    onChangeHandler={(e) => onChange(e,'message')}
                                    type="text"
                                    required
                                />
                            </InputContainer>

                            <Paragraph margin="0 0 1rem">
                                By submitting this form, I acknowledge receipt
                                of the{' '}
                                <HyperLink
                                    href="legal/privacy-policy"
                                    varient="tertiary"
                                >
                                    Sellsage Privacy Policy.
                                </HyperLink>
                            </Paragraph>

                            <Paragraph>
                                Fields marked with an asterisk (
                                <span
                                    style={{
                                        color: '#FA3B56',
                                        fontWeight: 600,
                                    }}
                                >
                                    *
                                </span>
                                ) are required.
                            </Paragraph>

                            <Button onClick={(e) => contactemail(e)} varient="secondary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </FormContainer>
                </ContactUsContainer>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default ContactUs
