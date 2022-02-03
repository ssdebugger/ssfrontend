import { LandingLayout } from '@/components/layout/landing'
import { GridContainer, GridItem } from '../homepage/style'
import { Button, Typography } from '../product/index.style'
import { AddressField, AddressForm } from './style'

const CheckoutAddAddress = () => {
    return (
        <GridContainer>
            <GridItem sm={100} md={100} lg={100}>
                <Typography>Where should we deliver your order to</Typography>
                <Typography>Add a new address</Typography>
            </GridItem>
            <GridItem sm={100} md={100} lg={100}>
                <AddressForm>
                    <AddressField type="text" placeholder="First Name" />
                    <AddressField type="text" placeholder="Last Name" />
                    <AddressField type="text" placeholder="Street Address" />
                    <AddressField type="text" placeholder="House/Building No" />
                    <AddressField type="text" placeholder="City" />
                    <AddressField type="text" placeholder="State" />
                    <AddressField type="text" placeholder="Country" />
                    <AddressField type="text" placeholder="Phone Number" />
                    <AddressField type="text" placeholder="Email" />
                    <Button>Save and Continue to Payment</Button>
                </AddressForm>
            </GridItem>
        </GridContainer>
    )
}

export default CheckoutAddAddress
