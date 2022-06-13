import { GridContainer, GridItem } from '../homepage/style'
import { Typography } from '../product/index.style'
import { SectionHeading } from '../homepage/style'
import { useEffect, useState } from 'react'

const BillingDetails = (props) => {
    const shipping = 0
    const tax = 0
    const position = props.position
    const [total,setTotal]=useState(0)
    useEffect(() => {
        let temp=JSON.parse(window.localStorage.getItem('billDetails'))
        setTotal(temp['bagTotal'])

    },[])
    return (
        <div className="container">
            <GridContainer>
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
                            $ {total}
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
                            $ {total + shipping + tax}
                        </Typography>
                    </GridContainer>
                </GridItem>
            </GridContainer>
            

            <style jsx>{`
                .container {
                    position: static;
                }
                @media only screen and (min-width: 600px) {
                    .container {
                        top: 10%;
                        position: ${position};
                        padding-right: 30%;
                    }
                }
            `}</style>
        </div>
    )
}
export default BillingDetails
