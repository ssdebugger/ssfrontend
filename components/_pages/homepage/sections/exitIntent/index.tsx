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

export const ExitIntentPopup = () => {
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
        let emailPopupTimeout=false
        let documentHeight = document.body.offsetHeight
        function mouseListener(event) {
        
            if(event.clientY<=0 || event.clientY>=window.innerHeight){
                window.removeEventListener('mousemove',mouseListener)
                emailPopupTimeout=true
                setShowPopup(true)
            }
            // Show popup after 5sec once user has scrolled down.
            // if (scrollLeft < 50 && !showPopup && !emailPopupTimeout) {
             
            // }
        }

        window.addEventListener('mouseout', (event) => mouseListener(event))
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
                <h4>Don&#39;t leave us yet!</h4>
               <Paragraph>
                    We keep adding to our disposable dinnerware and disposable cutlery collection. Leave us your email
                    address to get updates from us.
                </Paragraph>
                <SubForm>
                {/* <Input
                        required
                        value={email}
                        type="name"
                        heading="Your Name"
                        placeholder="Ade Chipole"
                        onChangeHandler={(e) => handleChange(e)}
                    /> */}
                    <Input
                        required
                        value={email}
                        type="email"
                        heading="Your Email"
                        placeholder="ada@company.com"
                        onChangeHandler={(e) => handleChange(e)}
                    />
                    <Button
                        fill='true'
                        size="regular"
                        varient="primary"
                        onClick={(e) => submitForm(e)}
                    >
                        Subscribe
                    </Button>
               </SubForm>
            </EmailSubContainer>
        </Popup>
    )
}
