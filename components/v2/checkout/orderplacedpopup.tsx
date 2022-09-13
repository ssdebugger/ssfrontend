import { useState } from 'react'
import styled from 'styled-components'
import { Popup } from '@/components/popup'
import { Paragraph } from '@/components/typography/paragraph'
import { Button } from '@/components/buttons'
import  {Check}  from 'react-feather'
import {useRouter}  from 'next/router'


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

export const OrderPlacedPopup = (props) => {
    const router=useRouter()

    const submitForm = (e) => {
           e.preventDefault()
           props.togglePopup()
           router.push('/shop')
           
    }

    return (
        <Popup
            showPopup={props.popup}
            togglePopupFn={props.togglePopup}
            aspectRatio="tall"
            showX={false}
        >
            <EmailSubContainer>
                <h4>Order placed!!!</h4>
                <Paragraph> <Check  size={80} /></Paragraph>
                
                <SubForm>
                    <Button
                        fill='true'
                        size="regular"
                        varient="primary"
                        onClick={(e) => submitForm(e)}
                    >
                        Shop More
                    </Button>
                    <p style={{color:'black',marginTop:'0.5rem'}}>Please check your spam if you do not recieve invoice email</p>
                </SubForm>
            </EmailSubContainer>
        </Popup>
    )
}
