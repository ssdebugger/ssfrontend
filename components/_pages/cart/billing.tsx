import { GridContainer, GridItem } from '../homepage/style'
import { Typography } from '../product/index.style'
import { Button } from 'components/buttons'
import { useRouter } from 'next/router'
import { SectionHeading } from '../homepage/style'
import { Input, CouponCard } from './style'

import { BagImage, Slidebutton, Circularselect } from './style'

const BillingDetails = (props) => {
    const router = useRouter()
    const routeCheckout = () => {
        router.push({
            pathname: './checkout',
        })
    }
    const shipping = 100
    const tax = 10

    const position = props.position
    return (
        <div className="container">
            <GridContainer>
                <GridItem sm={100} md={100} lg={100}>
                    <Typography
                        marginLeft="0"
                        fontSize="1.25rem"
                        fontWeight="500"
                    >
                        Coupon / Gift card
                    </Typography>
                    <Typography
                        marginLeft="0"
                        color="#555"
                        fontWeight="100"
                        fontSize="1rem"
                    >
                        Add a coupon / Gift card
                    </Typography>

                    <div className="coupon">
                        <Input placeholder="Enter Coupon Code" />
                        <CouponCard>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography
                                        color="#21574A"
                                        fontWeight="400"
                                        fontSize="19px"
                                    >
                                        WELCOME30
                                    </Typography>
                                </div>
                                <Circularselect />
                            </div>
                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use and save $ 5
                            </Typography>

                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use this coupon and get $10 discount on orders
                                above $ 100
                            </Typography>
                        </CouponCard>
                        <CouponCard>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography
                                        color="#21574A"
                                        fontWeight="400"
                                        fontSize="19px"
                                    >
                                        WELCOME30
                                    </Typography>
                                </div>
                                <Circularselect />
                            </div>

                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use and save $ 5
                            </Typography>

                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use this coupon and get $10 discount on orders
                                above $ 100
                            </Typography>
                        </CouponCard>
                        <CouponCard>
                            <div style={{ display: 'flex' }}>
                                <div style={{ flex: 1 }}>
                                    <Typography
                                        color="#21574A"
                                        fontWeight="400"
                                        fontSize="19px"
                                    >
                                        WELCOME30
                                    </Typography>
                                </div>
                                <Circularselect />
                            </div>

                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use and save $ 5
                            </Typography>

                            <Typography
                                color="#21574A"
                                fontWeight="400"
                                fontSize="13px"
                            >
                                Use this coupon and get $10 discount on orders
                                above $ 100
                            </Typography>
                        </CouponCard>
                    </div>
                </GridItem>

                <GridItem sm={100} md={100} lg={100}>
                    <GridContainer>
                        <SectionHeading margin="1rem 1rem">
                            Payment
                        </SectionHeading>
                        <Typography fontSize="1rem" fontWeight="400">
                            SubTotal
                        </Typography>
                        <Typography
                            fontSize="1rem"
                            fontWeight="400"
                            marginLeft="auto"
                        >
                            $ {props.subtotal}
                        </Typography>
                    </GridContainer>
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <GridContainer>
                        <Typography fontSize="1rem" fontWeight="400">
                            Shipping
                        </Typography>
                        <Typography
                            fontSize="1rem"
                            fontWeight="400"
                            marginLeft="auto"
                        >
                            ${shipping}
                        </Typography>
                    </GridContainer>
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <GridContainer>
                        <Typography fontSize="1rem" fontWeight="400">
                            Estimated-Tax
                        </Typography>
                        <Typography
                            fontSize="1rem"
                            fontWeight="400"
                            marginLeft="auto"
                        >
                            $ {tax}
                        </Typography>
                    </GridContainer>
                </GridItem>
                <GridItem sm={100} md={100} lg={100}>
                    <GridContainer>
                        <Typography fontSize="1rem" fontWeight="800">
                            Total
                        </Typography>
                        <Typography
                            fontSize="1rem"
                            fontWeight="800"
                            marginLeft="auto"
                        >
                            $ {parseFloat(props.subtotal) + shipping + tax}
                        </Typography>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            <Button
                varient="primary"
                size="regular"
                fill='true'
                onClick={routeCheckout}
            >
                Proceed to Buy
            </Button>

            <style jsx>{`
                .container {
                    position: static;
                }
                @media only screen and (min-width: 600px) {
                    .container {
                        top: 10%;
                        position: ${position};
                    }
                }
            `}</style>
        </div>
    )
}
export default BillingDetails
