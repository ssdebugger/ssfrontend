import { Typography } from '../product/index.style'
import { AddressBox, CheckoutButtons } from './style'
import { Button } from 'components/cta/button'
import styled from 'styled-components'
import { Paragraph } from 'components/typography/paragraph'

const AddressContainer = (props) => {
    const Checkoutbtn = styled(Button)<{ active: number }>`
        width: 10vw;
        margin: 1rem 1rem;
        font-size: 1rem;
        height: 3rem;
        padding: 0;
        display: ${(props) => (props.active ? 'inline' : 'none')};
        @media only screen and (max-width: 600px) {
            width: 30vw;
            font-size: 0.8rem;
        }
    `

    const changebackground = () => {
        props.setborder(props.i)
    }
    return props.buttontext !== 'Change' ? (
        <AddressBox onClick={() => changebackground()} active={props.active}>
            <Paragraph>{props.name}</Paragraph>
            <Paragraph>{props.address}</Paragraph>
            <Checkoutbtn active={props.active} varient="secondary">
                select
            </Checkoutbtn>
        </AddressBox>
    ) : (
        <AddressBox active={props.active}>
            <Typography>{props.name}</Typography>
            <Typography>{props.address}</Typography>
            <Button
                onClick={() => props.openCheckout()}
                style={{ width: '80%', margin: '1rem 1rem' }}
                varient="primary"
            >
                Change
            </Button>
        </AddressBox>
    )
}

export default AddressContainer
