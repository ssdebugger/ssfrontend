import { useEffect, useRef, useState } from 'react'
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

    const submitForm = (e) => {
           e.preventDefault()
           togglePopup()
           const data= {
               "email":email
           }
           fetch('https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/addsubscriber', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           body: JSON.stringify(data) // body data type must match "Content-Type" header
          })
    }
    
    useEffect(() => {
        let emailPopupTimeout=window.sessionStorage.getItem('popup')?window.sessionStorage.getItem('popup'):false
        let documentHeight = document.body.offsetHeight
        function scrollListener() {
            let amountScrolled = window.pageYOffset
            emailPopupTimeout = String(emailPopupTimeout)==='true'
            let scrollLeft =
                ((documentHeight - amountScrolled) / documentHeight) * 100
            // Show popup after 5sec once user has scrolled down.
            console.log(showPopup,emailPopupTimeout)
            if (scrollLeft < 90 && !showPopup && !emailPopupTimeout) {
                window.sessionStorage.setItem('popup','true')
                emailPopupTimeout=window.sessionStorage.getItem('popup')
                window.removeEventListener('scroll', scrollListener)
              setShowPopup(showPopup => (true))
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
            showX={true}
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
                    <input
                        required
                        style={{color:'#000',
                            border: '1px solid ${(props) => props.theme.blueGray300}',
                            padding:'0.5rem 0.5rem',
                            transition:'${(props) => props.theme.transition}',
                            width:'100%'}}
                        value={email}
                        type="email"
                        placeholder="sellsage@company.com"
                        onChange={(e) => handleChange(e)}
                    />
                    <Button
                        fill='true'
                        size="regular"
                        varient="primary"
                        onClick={(e) => submitForm(e)}
                    >
                        Subscribe
                    </Button>
                    <p style={{color:'black',marginTop:'0.5rem'}}>Join our movement of changemakers</p>
                </SubForm>
            </EmailSubContainer>
        </Popup>
    )
}
