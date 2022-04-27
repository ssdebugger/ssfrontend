import { useState } from 'react'
import {  Form, InputContainer, SubmitBtn } from './auth.style'
import { Input } from '@/components/input/oldInput'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'

import Popup from './popup'

const Confirm = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [alert, setAlert] = useState('')
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    Auth.configure({
        region: 'us-east-2',
        userPoolId: 'us-east-2_PtilY0Lzj',
        userPoolWebClientId: '449s5sgctbta5ao7ku7qg9r1dq',
    })
    
    const router = useRouter()
    const handleClick = (e) => {
        e.preventDefault()
        Auth.confirmSignUp(props.response, props.code)
            .then((res) => {
                const data={
                    "email": props.email,
                    "name": props.name,
                    "password": props.password

                }
              
                fetch('https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/welcomeemail?email='+props.email)               
                fetch('https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/putuserdetails', {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'no-cors', // no-cors, *cors, same-origin
                    headers: {
                      'Content-Type': 'application/json'
                      // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                   body: JSON.stringify(data) // body data type must match "Content-Type" header
                  }).then(res => console.log('Posted user details',res))
                  .catch(err => console.log(err,'user post error'))
                router.push({ pathname: '/signin' })
            })
            .catch((err) => {
                setIsOpen(!isOpen)
                setAlert(err.message)
            })
    }
    const handleCloseClick = () => {
        props.toggle()
    }

    const handleChange = (e) => {
        props.handlecode(e)
    }
    return (
        <div className="modal">
            <div className="modal_content">
                <h1>
                    Verification code has been sent to{' '}
                    <span>{props.email}</span>
                </h1>
                <span className="close" onClick={() => handleCloseClick()}>
                    &times;
                </span>
                <Form>
                    <InputContainer>
                        <Input
                            value={props.code}
                            onChangeHandler={(e) => handleChange(e)}
                            heading="Verification Code"
                            type="text"
                        />
                    </InputContainer>
                    <SubmitBtn onClick={(e) => handleClick(e)}>
                        Verify
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
            </div>

            <style jsx>{`
                .modal {
                    width: 80%;
                    height: auto;
                    margin-left: 0;
                    background-color: rgba(0, 0, 0, 0.25);
                }

                .modal_content {
                    background: #fff;
                    position: absolute;
                    top: 20%;
                    left: 10%;
                    width: 50%;
                    height: auto;
                    object-fit: fill;
                    padding: 10px;
                    border-radius: 5px;
                    border: 2px solid black;
                }
                .close {
                    color: Black;
                    float: right;
                    font-size: 2rem;
                }

                .close:hover {
                    color: red;
                    cursor: pointer;
                }

                @media only screen and (max-width: 600px) {
                    .modal_content {
                        height: 80%;
                        width: 80%;
                    }
                }
            `}</style>
        </div>
    )
}

export default Confirm
