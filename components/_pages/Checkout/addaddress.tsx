import { Form, InputContainer, SubmitBtn } from '../auth/auth.style'
import { Input } from '@/components/input/oldInput'
import { useRouter } from 'next/router'
import Popup from '../auth/popup'
import { useState } from 'react'

const Addaddress = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [alert, setAlert] = useState('')
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [pincode, setPincode] = useState('')
    const [number, setNumber] = useState('')
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const router = useRouter()
    const handleCloseClick = () => {
        props.toggle()
    }
    const handleChange = (e, content) => {
        if (content === 'name') {
            setName(e.target.value)
        }
        if (content === 'city') {
            setCity(e.target.value)
        }
        if (content === 'state') {
            setState(e.target.value)
        }
        if (content === 'pincode') {
            setPincode(e.target.value)
        }
        if (content === 'number') {
            setNumber(e.target.value)
        }
    }

    const handleClick = (e) => {
        console.log({
            name: name,
            address: city + ' ' + state + ' ' + pincode + ' ' + number,
        })
    }
    return (
        <div className="modal">
            <div className="modal_content">
                <h1>Add your address.</h1>
                <span className="close" onClick={() => handleCloseClick()}>
                    &times;
                </span>
                <Form>
                    <InputContainer>
                        <Input
                            value={name}
                            onChangeHandler={(e) => handleChange(e, 'name')}
                            heading="Name"
                            type="text"
                        />
                        <Input
                            value={city}
                            onChangeHandler={(e) => handleChange(e, 'city')}
                            heading="City"
                            type="text"
                        />
                        <Input
                            value={state}
                            onChangeHandler={(e) => handleChange(e, 'state')}
                            heading="State"
                            type="text"
                        />
                        <Input
                            value={pincode}
                            onChangeHandler={(e) => handleChange(e, 'pincode')}
                            heading="Pin Code"
                            type="text"
                        />
                        <Input
                            value={number}
                            onChangeHandler={(e) => handleChange(e, 'number')}
                            heading="Phone Number"
                            type="text"
                        />
                    </InputContainer>
                    <SubmitBtn onClick={(e) => handleClick(e)}>Add</SubmitBtn>
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

export default Addaddress
