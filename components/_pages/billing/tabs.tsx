import { useEffect, useRef, useState } from 'react'
import Popup from '../auth/popup'
import { GridContainer, GridItem } from 'components/_pages/homepage/style'
import { Container } from 'components/container/regular'
import styled from 'styled-components'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Heading3, Heading4 } from 'components/typography/heading'
import Autocompleteform from './autocomplete'
import { Checkbox } from 'components/checkbox/index'
import BillingDetails from './ordertotal'
import PaymentGateway from './payment'
import { useAddUser, useUser } from '@/context/user'
import { useCart } from '@/context/cart'
import {
    AddressBox,
    Boxbutton,
    Boxdefault,
    ShippingButtonHolder,
    ShippingHolder,
    AddButtonholder,
    UserBillingContainer,
} from './style'
import { Typography } from '../product/index.style'
import { Button } from '@/components/buttons'
import { useAuth } from 'context/auth'
import { ShippingAddressContainer } from './payment.style'
import {
    BillingAddressContainer,
    AddressContainer,
    ShippingAddressList,
    AddAddressBtn,
} from './tabs.style'
import { Plus } from 'react-feather'
import { limitDecimal } from '@/utils/limt-decimal'

const GuestAddress = (props) => {
    const router = useRouter()
    const displayGuestBillingAddress = useRef(true)
    const ShippingContainer = styled(Container)`
        background-color: #fff;
        width: 100%;
        height: 100%;
        @media only screen and (min-width: 900px) {
            display: flex;
            width: 70%;
        }
    `
    const handleDisplayBilling = () => {
        const container = document.getElementById('guestbillingcontainer')
        const checkbox = document.getElementById(
            'checkboxinput'
        ) as HTMLInputElement

        if (displayGuestBillingAddress.current) {
            container.style.height = '0px'
            container.style.opacity = '0'
            container.style.pointerEvents = 'none'
            displayGuestBillingAddress.current = false
            checkbox.checked = true
        } else {
            container.style.height = 'auto'
            container.style.opacity = '1'
            container.style.pointerEvents = 'all'

            displayGuestBillingAddress.current = true
            checkbox.checked = false
        }
    }
    return (
        <div id="Address" className="tabcontent">
            <GridContainer>
                <ShippingContainer id="shippingcontainer">
                    <GridItem sm={100} md={50} lg={50}>
                        <Heading4 margin="1rem 0 2.5rem 0rem">
                            Shipping Details
                        </Heading4>
                        <Autocompleteform
                            id="guestship"
                            // setShip={props.setShip}
                            // setBill={props.setBill}
                            ship={props.ship}
                        />
                    </GridItem>
                    <GridItem sm={100} md={50} lg={50}>
                        <Heading4 margin="1rem 0 1rem 0rem">
                            Billing Details
                        </Heading4>
                        <input
                            type="checkbox"
                            id="checkboxinput"
                            onClick={handleDisplayBilling}
                        />
                        <label> Same as shipping address</label>
                        <div id="guestbillingcontainer">
                            <Autocompleteform
                                id="guestbill"
                                // setShip={props.setShip}
                                ship={props.ship}
                                // setBill={props.setBill}
                            />
                        </div>
                    </GridItem>
                </ShippingContainer>
                {/* <GridItem sm={100} md={30} lg={30}>
                    <Heading4 margin="1rem 0 1rem 2rem">Cart Total</Heading4>
                    <BillingDetails
                        current="checkout"
                        subtotal={router.query.subtotal}
                    />
                </GridItem> */}
            </GridContainer>
        </div>
    )
}

const UserAddress = (props) => {
    const ShippingContainer = styled(Container)`
        background-color: #fff;
        width: 100%;
        height: 100%;
        @media only screen and (min-width: 900px) {
            display: flex;
            width: 70%;
        }
    `

    const [isOpen, setIsOpen] = useState(false)
    const [displayBillingAddress, setDisplayBillingAddress] = useState(true)

    const togglePopup = () => {
        setIsOpen(!isOpen)
    }

    const handleDisplayBilling = () => {
        setDisplayBillingAddress((prevState) => !prevState)
    }

    useEffect(() => {
        const container = document.getElementById('billingcontainer')

        if (displayBillingAddress) {
            container.style.height = 'auto'
            container.style.opacity = '1'
            container.style.pointerEvents = 'all'
        } else {
            container.style.height = '0px'
            container.style.opacity = '0'
            container.style.pointerEvents = 'none'
        }
    }, [displayBillingAddress])

    function setdefault(evt, item) {
        // Declare all variables
        var i, tablinks
        tablinks = document.getElementsByClassName('tablinksshipactive')
        window.localStorage.setItem('ship', JSON.stringify(item))

        props.setShip(JSON.parse(window.localStorage.getItem('ship')))
        if (
            window.localStorage.getItem('bill') == undefined ||
            window.localStorage.getItem('bill') == null
        ) {
            window.localStorage.setItem('bill', JSON.stringify(item))
            props.setBill(JSON.parse(window.localStorage.getItem('bill')))
        }
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].innerHTML = 'Select Address'
            tablinks[i].style.background = '#000'
            tablinks[i].style.color = '#fff'
            tablinks[i].className = tablinks[i].className.replace(
                'tablinksshipactive',
                'tablinksship'
            )
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        evt.target.className += 'active'
        evt.target.innerHTML = 'Delivery address'
        evt.target.style.background = '#D39B75'
        evt.target.style.color = '#000'
    }
    function setdefaultbill(evt, item) {
        // Declare all variables
        var i, tablinks
        tablinks = document.getElementsByClassName('tablinksbillactive')
        window.localStorage.setItem('bill', JSON.stringify(item))
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].innerHTML = 'Select Address'
            tablinks[i].style.background = '#000'
            tablinks[i].style.color = '#fff'
            tablinks[i].className = tablinks[i].className.replace(
                'tablinksbillactive',
                'tablinksbill'
            )
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        evt.target.className += 'active'
        evt.target.innerHTML = 'Billing address'
        evt.target.style.background = '#D39B75'
        evt.target.style.color = '#000'
        props.setBill(JSON.parse(window.localStorage.getItem('bill')))
    }
    const user = useUser()
    const addUser = useAddUser()
    return (
        <div id="Address" className="tabcontent">
            <AddressContainer>
                <ShippingAddressContainer>
                    <ShippingButtonHolder>
                        <ShippingHolder>
                            <Typography
                                marginLeft="1rem"
                                fontSize="1.75rem"
                                fontWeight="500"
                            >
                                Shipping Addresses
                            </Typography>
                        </ShippingHolder>
                    </ShippingButtonHolder>

                    <ShippingAddressList>
                        {user.user === undefined ||
                        user.user === null ? null : (
                            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {user.user['address'].map((item, key) => (
                                    <AddressBox key={key}>
                                        <Typography
                                            fontSize="1.5rem"
                                            fontWeight="600"
                                            style={{
                                                textTransform: 'capitalize',
                                            }}
                                        >
                                            {item['username']}
                                        </Typography>

                                        <Typography
                                            fontSize="1rem"
                                            fontWeight="400"
                                            marginTop="1rem"
                                        >
                                            {item['location']}
                                        </Typography>

                                        <Boxdefault
                                            onClick={(e) => setdefault(e, item)}
                                            className="tablinksship"
                                            id="defaultopen"
                                            background="#000"
                                            color="#fff"
                                        >
                                            Select address
                                        </Boxdefault>
                                    </AddressBox>
                                ))}
                            </div>
                        )}

                        <AddAddressBtn onClick={togglePopup}>
                            <Plus />
                            <span>Add new Address</span>
                        </AddAddressBtn>
                    </ShippingAddressList>
                </ShippingAddressContainer>

                <BillingAddressContainer>
                    <Typography
                        marginLeft="1rem"
                        fontSize="1.75rem"
                        fontWeight="500"
                    >
                        Billing address
                    </Typography>

                    <div style={{ margin: '0 0 1rem 1rem' }}>
                        <Checkbox
                            onChange={handleDisplayBilling}
                            id="default"
                            checked={!displayBillingAddress}
                            checkboxName="Same as shipping address"
                        />
                    </div>

                    <UserBillingContainer id="billingcontainer">
                        <ShippingAddressList>
                            {user.user === undefined ||
                            user.user === null ? null : (
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    {user.user['address'].map((item, key) => (
                                        <AddressBox key={key}>
                                            <Typography
                                                fontSize="1.5rem"
                                                fontWeight="600"
                                                style={{
                                                    textTransform: 'capitalize',
                                                }}
                                            >
                                                {item['username']}
                                            </Typography>

                                            <Typography
                                                fontSize="1rem"
                                                fontWeight="400"
                                                marginTop="1rem"
                                            >
                                                {item['location']}
                                            </Typography>

                                            <Boxdefault
                                                onClick={(e) =>
                                                    setdefaultbill(e, item)
                                                }
                                                className="tablinksbill"
                                                id="defaultopen"
                                                background="#000"
                                                color="#fff"
                                            >
                                                Select address
                                            </Boxdefault>
                                        </AddressBox>
                                    ))}
                                </div>
                            )}

                            <AddAddressBtn onClick={togglePopup}>
                                <Plus />
                                <span>Add new Address</span>
                            </AddAddressBtn>
                        </ShippingAddressList>
                    </UserBillingContainer>

                    {isOpen && (
                        <Popup
                            content={
                                <ShippingContainer id="shippingcontainer">
                                    <GridItem sm={100} md={50} lg={50}>
                                        <Heading4 margin="1rem 0 1rem 0rem">
                                            Shipping Details
                                        </Heading4>
                                        {/* <Checkbox
                                            id="default"
                                            checkboxName="Set as default"
                                        /> */}
                                        <Autocompleteform
                                            id="ship"
                                            handleClose={() => togglePopup()}
                                        />
                                    </GridItem>
                                </ShippingContainer>
                            }
                            handleClose={togglePopup}
                        />
                    )}
                </BillingAddressContainer>
            </AddressContainer>
        </div>
    )
}

const Tabs = () => {
    const [ship, setShip] = useState({ username: '', location: '' })
    const [bill, setBill] = useState({ username: '', location: '' })
    const [price, setPrice] = useState(0)
    const [tax, setTax] = useState(0)
    const [discount, setDiscount] = useState(0)

    const [tmp, setTmp] = useState({
        originalPrice: 0,
        discount: {
            discountId: null,
            type: null,
            discountValue: 0,
            totalDiscount: 0,
        },
        bagTotal: 0,
        zipCode: null,
    })

    const ShippingContainer = styled(Container)`
        background-color: #fff;
        width: 100%;
        height: 100%;
        @media only screen and (min-width: 900px) {
            display: flex;
            width: 70%;
        }
    `
    const isLoggedIn = useAuth()

    function openCity(evt, action) {
        // Declare all variables
        const shipStorage = JSON.parse(window.localStorage.getItem('ship'))
        const billStorage = JSON.parse(window.localStorage.getItem('bill'))
        if (
            shipStorage === undefined ||
            shipStorage === null ||
            shipStorage === '' ||
            billStorage === undefined ||
            billStorage === null ||
            billStorage === ''
        ) {
        } else {
            setTmp(JSON.parse(window.localStorage.getItem('billDetails')))
            if (action == 'Payment') {
                fetch(
                    'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/shippingtaxesv2?zipcode=' +
                        shipStorage['zipCode'] +
                        '&subtotal=' +
                        tmp['bagTotal']
                )
                    .then((res) => res.json())
                    .then((res) => {
                        let taxValue = limitDecimal(
                            res['tax_to_add'] + res['shipping_cost']
                        )

                        setTax(taxValue)
                    })

                let getshipdetails = {
                    username: shipStorage['username'],
                    location: shipStorage['location'],
                }
                let getbilldetails = {
                    username: billStorage['username'],
                    location: billStorage['location'],
                }
                setShip((ship) => getshipdetails)
                setBill((bill) => getbilldetails)
            }

            setPrice((price) => tmp['bagTotal'])
            setDiscount((discount) => tmp['discount']['totalDiscount'])

            var i, tabcontent, tablinks
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName('tabcontent')
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = 'none'
            }
            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName('tablinksactive')
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(
                    'active',
                    ''
                )
            }

            // Show the current tab, and add an "active" class to the button that opened the tab
            document.getElementById(action).style.display = 'block'
            evt.currentTarget.className += 'active'
        }
    }
    const { cart } = useCart()

    useEffect(() => {
        setTimeout(() => {
            let temp = JSON.parse(window.localStorage.getItem('billDetails'))
            let tempobj = Object.create(temp)

            setTmp((tmp) => tempobj)
            let temptotal = temp['bagTotal']
            let tempdisc = temp['discount']['totalDiscount']
            setPrice((price) => temptotal)
            setDiscount((discount) => tempdisc)
        }, 1000)
    }, [cart])
    useEffect(() => {
        let temp = JSON.parse(window.localStorage.getItem('billDetails'))
        setTmp((tmp) => temp)
        let temptotal = tmp['bagTotal']
        let tempdisc = tmp['discount']['totalDiscount']
        setPrice((price) => temptotal)
        setDiscount((discount) => tempdisc)
    }, [])
    return (
        <>
            <Head>
                <script
                    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDtDZuMfT96MQUfJvR4gRDK2VxoLPQYcao&libraries=places"
                    async
                    defer
                ></script>
            </Head>
            <div className="tab">
                <button
                    className="tablinksactive"
                    id="defaultopen"
                    onClick={(event) => openCity(event, 'Address')}
                >
                    Select Address
                </button>
                <button
                    className="tablinks"
                    onClick={(event) => openCity(event, 'Payment')}
                >
                    Proceed To Buy
                </button>
            </div>
            {isLoggedIn ? (
                <UserAddress setShip={setShip} setBill={setBill} />
            ) : (
                <GuestAddress ship={ship} />
            )}

            <div
                id="Payment"
                className="tabcontent"
                style={{ overflowY: 'auto' }}
            >
                <PaymentGateway
                    ship={ship}
                    bill={bill}
                    price={price}
                    tax={tax}
                    discount={discount}
                    total={price + discount}
                />
            </div>

            <style jsx>
                {`
                    .tab {
                        overflow: hidden;
                        border: 1px solid #ccc;
                        background-color: #f1f1f1;
                    }

                    .tabcontent {
                        animation: fadeEffect 1s; /* Fading effect takes 1 second */
                    }

                    /* Go from zero to full opacity */
                    @keyframes fadeEffect {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }

                    /* Style the buttons that are used to open the tab content */
                    .tab button {
                        background: #fff;
                        float: left;
                        width: 50%;
                        border: none;
                        outline: none;
                        cursor: pointer;
                        padding: 14px 16px;
                        transition: 0.3s;
                        color: #000;
                        border: 2px solid black;
                    }

                    /* Change background color of buttons on hover */
                    .tab button:hover {
                        color: black;
                        background-color: #ddd;
                    }

                    /* Create an active/current tablink className */
                    .tab button.tablinksactive {
                        background: #007257;

                        border: 2px solid #007257;
                        color: #fff;
                    }

                    /* Style the tab content */
                    .tabcontent {
                        display: none;
                        padding: 6px 12px;
                        border: 1px solid #ccc;
                        border-top: none;
                    }
                `}
            </style>
        </>
    )
}

export default Tabs
