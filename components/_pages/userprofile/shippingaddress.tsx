import { Typography } from 'components/_pages/product/index.style'
import { AddressBox, Save, Boxbutton, Boxdefault } from './style'
import { useEffect } from 'react'
import { useUser, useAddUser, useRemoveUser } from 'context/user'
import Popup from '../auth/popup'
import { GridContainer, GridItem } from '../homepage/style'
import { Heading4 } from '@/components/typography/heading'
import { Button } from '@/components/buttons'
import { Container } from 'components/container/regular'
import styled from 'styled-components'
import Autocompleteform from '../billing/autocomplete'
import { Checkbox } from '@/components/checkbox'
import { useState } from 'react'

const Shippingaddress = () => {
    const ShippingContainer = styled(Container)`
        background-color: #fff;
        width: 100%;
        height: 100%;
        @media only screen and (min-width: 900px) {
            display: flex;
            width: 100%;
        }
    `

    const [isOpen, setIsOpen] = useState(false)
    const togglePopup = () => {
        setIsOpen(!isOpen)
    }
    const user = useUser()

    const addUser = useAddUser()

    const deleteUser = useRemoveUser()

    // const addUserFn = () => {

    //     addUser({address:
    //         { isDefault: true,
    //         username: 'Gokul',
    //         phoneNo: 7981188711,
    //         location: '711-2880 Nulla St. Mankato Mississippi 96522, (257) 563-7401',
    //         landmark: 'No',
    //         city: 'Hyderabad',
    //         zipCode: 411057,
    //         state: 'Manali',
    //         country: 'Where d fck'}})

    // }

    const removeUserFn = () => {
        deleteUser()
    }
    function setdefault(evt) {
        // Declare all variables
        var i, tablinks
        tablinks = document.getElementsByClassName('tablinksactive')

        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(
                'tablinksactive',
                'tablinks'
            )
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        evt.className += 'active'
    }
    return (
        <>
            <Typography marginLeft="2rem" fontSize="1.75rem" fontWeight="500">
                Shipping Addresses
            </Typography>

            {user.user === undefined || user.user === null ? null : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {user.user['address'].map((item, key) => (
                        <AddressBox key={item.zipCode}>
                            <Typography fontSize="1.25rem" fontWeight="600">
                                {item['username']}
                            </Typography>
                            <Typography fontSize="1rem" fontWeight="400">
                                {item['location']}
                            </Typography>
                            {item['isDefault'] ? (
                                <Boxdefault
                                    className="tablinks"
                                    onClick={(e) => setdefault(e.currentTarget)}
                                    background="#000"
                                    color="#fff"
                                >
                                    Set as default
                                </Boxdefault>
                            ) : (
                                <Boxdefault
                                    className="tablinksactive"
                                    onClick={(e) => setdefault(e.currentTarget)}
                                    background="#000"
                                    color="#fff"
                                >
                                    Set as default
                                </Boxdefault>
                            )}
                        </AddressBox>
                    ))}
                </div>
            )}

            <Save onClick={() => togglePopup()}>Add address &#8594;</Save>

            {isOpen && (
                <Popup
                    content={
                        <ShippingContainer id="shippingcontainer">
                            <GridItem sm={100} md={50} lg={50}>
                                <Heading4 margin="1rem 0 1rem 0rem">
                                    Shipping Details
                                </Heading4>
                                <Autocompleteform
                                    id="ship"
                                    type="userprofile"
                                    handleClose={() => togglePopup()}
                                />
                            </GridItem>
                        </ShippingContainer>
                    }
                    handleClose={togglePopup}
                />
            )}
        </>
    )
}

export default Shippingaddress
