import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Popup } from '@/components/popup'
import { Paragraph } from '@/components/typography/paragraph'
import { Input } from '@/components/input'
import { Button } from '@/components/buttons'

export const EmailSubContainer = styled.div`
    cursor:pointer;
    h4 {
        font-family: 'marcellus';
        font-size: 1.5rem;

        font-weight: 500;

        margin-bottom: 1.25rem;
        text-align: center;
    }

    p {
        text-align: center;
        font-size: 0.875rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 1rem;

        h4 {
            font-size: 2rem;
        }

        p {
            font-size: 1rem;
        }
    }
`

export const SubForm = styled.form`
    margin: 0 0 0;

    input {
        margin: 0 0 1.5rem;
    }
`

export const EmailSubscription = () => {
    const [showPopup, setShowPopup] = useState(false)
    const [email, SetEmail] = useState('')

    const togglePopup = () => {
        setShowPopup((prevState) => !prevState)
    }

    const handleChange = (e: { target: { value: string } }) => {
        SetEmail(e.target.value)
    }

    const submitForm = () => {
    
    }

    useEffect(() => {
        let emailPopupTimeout=false
        let documentHeight = document.body.offsetHeight
        console.log('in useEffect')
        function scrollListener() {
            console.log('in scroll')
            let amountScrolled = window.pageYOffset
            let scrollLeft =
                ((documentHeight - amountScrolled) / documentHeight) * 100
            // Show popup after 5sec once user has scrolled down.
            if (scrollLeft < 50 && !showPopup && !emailPopupTimeout) {
                window.removeEventListener('scroll', scrollListener)
                emailPopupTimeout=true
                console.log('in pop up')
              setShowPopup(true)
            }
        }

        window.addEventListener('scroll', () => scrollListener())
        return
    }, [])

    // useEffect(() => {
    //     if (showPopup) {
    //         window.removeEventListener('scroll', () => {})
    //     }
    // }, [showPopup])

    return (
        <Popup
            showPopup={showPopup}
            togglePopupFn={togglePopup}
            aspectRatio="tall"
        >
            <EmailSubContainer>
                {/* <h4>Don&#39;t leave us yet!</h4> */}
                <img style={{width:'100%',height:'auto'}} src='/popup2.webp' alt='Subscribe to our newsletter'/>
                {/* <Paragraph>
                    We keep adding to our disposable dinnerware and disposable cutlery collection. Leave us your email
                    address to get updates from us.
                </Paragraph> */}
                <SubForm>
                {/* <Input
                        required
                        value={email}
                        type="name"
                        heading="Your Name"
                        placeholder="Ade Chipole"
                        onChangeHandler={(e) => handleChange(e)}
                    /> */}
                    {/* <Input
                        required
                        value={email}
                        type="email"
                        heading="Your Email"
                        placeholder="ada@company.com"
                        onChangeHandler={(e) => handleChange(e)}
                    /> */}
                    <Button
                        fill='true'
                        size="regular"
                        varient="primary"
                        onClick={() => submitForm()}
                    >
                        Subscribe
                    </Button>
                    <p style={{color:'black',marginTop:'0.5rem'}}>Join our movement of changemakers</p>
                </SubForm>
            </EmailSubContainer>
        </Popup>
    )
}
