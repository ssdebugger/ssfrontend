import { Container } from 'components/container/regular'
import { Heading4 } from 'components/typography/heading'
import { Input } from '@/components/input/oldInput'
import { GridContainer, GridItem } from '@/components/_pages/homepage/style'
import { Form, InputContainer } from '@/components/_pages/auth/auth.style'
import { useState } from 'react'
import { Checkbox } from 'components/checkbox/index'
import { Button } from 'components/cta/button'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Shipping = () => {
    const ShippingContainer = styled(Container)`
        background-color: #eee;
        width: 100%;
        height: 100%;
    `
    const router = useRouter()
    const [name, setName] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZip] = useState('')
    const [number, setNumber] = useState('')
    const [add1, setAdd1] = useState('')
    const [add2, setAdd2] = useState('')
    const [bilname, setBilname] = useState('')
    const [bilcity, setBilcity] = useState('')
    const [bilstate, setBilstate] = useState('')
    const [bilzip, setBilzip] = useState('')
    const [bilnumber, setBilnumber] = useState('')
    const [biladd1, setBiladd1] = useState('')
    const [biladd2, setBiladd2] = useState('')
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
        if (content === 'zip') {
            setZip(e.target.value)
        }
        if (content === 'number') {
            setNumber(e.target.value)
        }
        if (content === 'add1') {
            setAdd1(e.target.value)
        }
        if (content === 'add2') {
            setAdd2(e.target.value)
        }
    }
    const handleChangebil = (e, content) => {
        if (content === 'name') {
            setBilname(e.target.value)
        }
        if (content === 'city') {
            setBilcity(e.target.value)
        }
        if (content === 'state') {
            setBilstate(e.target.value)
        }
        if (content === 'zip') {
            setBilzip(e.target.value)
        }
        if (content === 'number') {
            setBilnumber(e.target.value)
        }
        if (content === 'add1') {
            setBiladd1(e.target.value)
        }
        if (content === 'add2') {
            setBiladd2(e.target.value)
        }
    }
    var open = false

    const toggleAddresscontainer = (e) => {
        e.preventDefault()
        const container = document.getElementById('addresspanel')
        container.classList.toggle('cd-panel--is-visible')

        open = !open
    }
    //useEffect(() => {
    //    document.getElementById('shippingcontainer').addEventListener('click', () => {

    //        if (open === true) {

    //            const container = document.getElementById('addresspanel')
    //            container.classList.toggle('cd-panel--is-visible')
    //            open=!open
    //        }
    //    })
    //},[])

    return (
        <ShippingContainer id="shippingcontainer">
            <GridContainer>
                <GridItem sm={100} md={35} lg={35}>
                    <Heading4 margin="1rem 0 1rem 0rem">
                        Shipping Details
                    </Heading4>

                    <Checkbox id="default" checkboxName="Set as default" />

                    <Form>
                        <InputContainer>
                            <Input
                                key="10"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={name}
                                onChangeHandler={(e) => handleChange(e, 'name')}
                                heading="* Name"
                                type="text"
                            />
                            <Input
                                key="11"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={add1}
                                onChangeHandler={(e) => handleChange(e, 'add1')}
                                heading="* Address line1"
                                type="text"
                            />
                            <Input
                                key="13"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={add2}
                                onChangeHandler={(e) => handleChange(e, 'add2')}
                                heading=". Address line2"
                                type="text"
                            />
                            <Input
                                key="14"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={zip}
                                onChangeHandler={(e) => handleChange(e, 'zip')}
                                heading="* ZIP"
                                type="text"
                            />
                            <Input
                                key="15"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={city}
                                onChangeHandler={(e) => handleChange(e, 'city')}
                                heading="* City"
                                type="text"
                            />
                            <Input
                                key="16"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={state}
                                onChangeHandler={(e) =>
                                    handleChange(e, 'state')
                                }
                                heading="* State"
                                type="text"
                            />
                            <Input
                                key="17"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={number}
                                onChangeHandler={(e) =>
                                    handleChange(e, 'number')
                                }
                                heading="* Phone Number"
                                type="text"
                            />
                        </InputContainer>

                        <Button
                            varient="primary"
                            style={{ width: '80%', margin: '1rem 0 0rem 1rem' }}
                        >
                            Save
                        </Button>

                        <Button
                            onClick={(e) => toggleAddresscontainer(e)}
                            varient="primary"
                            style={{ width: '80%', margin: '1rem 0 1rem 1rem' }}
                        >
                            Select shipping address
                        </Button>
                    </Form>
                </GridItem>

                <GridItem sm={100} md={35} lg={35}>
                    <Heading4 margin="1rem 0 1rem 0rem">
                        Billing Details
                    </Heading4>

                    <Checkbox
                        id="same-as-shipping"
                        checkboxName="Same as shipping address"
                    />
                    <Form>
                        <InputContainer>
                            <Input
                                key="1"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={bilname}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'name')
                                }
                                heading="* Name"
                                type="text"
                            />
                            <Input
                                key="2"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={biladd1}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'add1')
                                }
                                heading="* Address line1"
                                type="text"
                            />
                            <Input
                                key="3"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={biladd2}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'add2')
                                }
                                heading=". Address line2"
                                type="text"
                            />
                            <Input
                                key="4"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={bilzip}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'zip')
                                }
                                heading="* ZIP"
                                type="text"
                            />
                            <Input
                                key="5"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={bilcity}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'city')
                                }
                                heading="* City"
                                type="text"
                            />
                            <Input
                                key="6"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={bilstate}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'state')
                                }
                                heading="* State"
                                type="text"
                            />
                            <Input
                                key="7"
                                height="40px"
                                margin="0rem 0 0.5rem 0"
                                value={bilnumber}
                                onChangeHandler={(e) =>
                                    handleChangebil(e, 'number')
                                }
                                heading="* Phone Number"
                                type="text"
                            />
                        </InputContainer>
                        <Button
                            varient="primary"
                            style={{ width: '80%', margin: '1rem 0 0rem 1rem' }}
                        >
                            Save
                        </Button>

                        <Button
                            onClick={(e) => toggleAddresscontainer(e)}
                            varient="primary"
                            style={{ width: '80%', margin: '1rem 0 1rem 1rem' }}
                        >
                            Select Billing address
                        </Button>
                    </Form>
                </GridItem>
            </GridContainer>
        </ShippingContainer>
    )
}

export default Shipping
