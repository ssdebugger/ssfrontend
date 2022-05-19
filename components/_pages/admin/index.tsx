import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Auth } from 'aws-amplify'
import { Button } from '@/components/buttons'
import { Input } from '@/components/input'
import { LandingLayout } from '@/components/layout/landing'
import { useAuth, useAuthLogin } from '@/context/auth'
import { HyperLink } from '@/components/header'
import Footer from '@/components/footer'
import { Paragraph } from '@/components/typography/paragraph'
import { SubHeading,MainHeading } from '@/components/typography/heading'
import {useAlert} from 'react-alert'
import {
    Form,
    InputContainer,
    Content,
    AlertContainer,
} from 'components/_pages/auth/auth.style'
import { AlertBar } from '@/components/alert/alert-bar'
import styled from 'styled-components'

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
width:40%;
padding-left:2rem;
cursor:pointer;

`

const Admin = () => {
    const [orderid, setOrderid] = useState('')
    const [trackno, setTrackno] = useState('')
    const [alert, setAlert] = useState('')
    const [status,setStatus]=useState('Processing')
    const [shipmethod,setShipmethod]=useState('FedEx')

    const handleChange = (e, targetfield) => {
        setAlert('')

        if (targetfield === 'orderid') {
            setOrderid(e.target.value)
        }
        if (targetfield === 'trackno') {
            setTrackno(e.target.value)
        }
        if (targetfield === 'status') {
           
            setStatus(e.target.value)
        }
        if (targetfield === 'shipmethod') {
           
            setShipmethod(e.target.value)
        }
    }
    const alertstatus=useAlert()
    const submitForm = (e) => {
        e.target.innerHTML = 'UPDATING...'
        e.target.disabled = true     
        e.preventDefault()
        let data={
            "order_no": Number(orderid),
            "tracking_id": Number(trackno),
            "tracking_status": status,
            "shipping_method":shipmethod
            }
        fetch('https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/updatetrackingid', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'no-cors', // no-cors, *cors, same-origin
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
           body: JSON.stringify(data) // body data type must match "Content-Type" header
          }).then(res => 
            
            {   
                e.target.innerHTML = 'UPDATE DETAILS'
                e.target.disabled = false
                alertstatus.show('Order Details Updated')
              
        
        
        })
          .catch(err => alertstatus.show('user post error'))
      
      
    }
    return (
        <>
            <Head>
                <title>Admin - Sellsage</title>
            </Head>

            <LandingLayout>
                <Content>
                    <MainHeading>Admin Panel</MainHeading>
                    <Paragraph>Update order details.</Paragraph>

                    {alert.length > 0 && (
                        <AlertContainer>
                            <AlertBar alertMessage={alert} alertType="red" />
                        </AlertContainer>
                    )}

                    <Form>
                        <InputContainer>
                            <Input
                                required
                                value={orderid}
                                placeholder="1007"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'orderid')
                                }
                                heading="Order ID"
                                type="number"
                            />
                        </InputContainer>

                        <InputContainer>
                            <Input
                                required
                                value={trackno}
                                placeholder="Tracking number"
                                onChangeHandler={(e) =>
                                    handleChange(e, 'trackno')
                                }
                                heading="Tracking Number"
                                type="number"
                            />
                        </InputContainer>

                        <InputContainer>
                            <Label>Shipping Method</Label>
                            <SelectOptions onChange={(e) => handleChange(e, 'shipmethod')}>
                                <option value="FedEx">FedEx</option>
                                <option value="USPS">USPS</option>
                            </SelectOptions>
                        </InputContainer>
                        <InputContainer>
                            <Label>Select Status</Label>
                            <SelectOptions onChange={(e) => handleChange(e, 'status')}>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                            </SelectOptions>
                        </InputContainer>

                        <Button
                            fill='true'
                            size="large"
                            varient="primary"
                            onClick={(e) => submitForm(e)}
                        >
                            Update Details
                        </Button>
                    </Form>
                </Content>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default Admin
