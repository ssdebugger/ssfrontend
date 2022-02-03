import { LandingLayout } from '@/components/layout/landing'
import { GridContainer, GridItem } from '../homepage/style'
import Billing from '../cart/billing'
import { Button, Typography } from '../product/index.style'
import Address from './address'
import TopPicks from '../product/toppicks'
import Footer from '@/components/footer'
import { withRouter } from 'next/router'
import { useState } from 'react'
import Addaddress from './addaddress'
import PopupCheckout from './popupcheckout'

const Checkout = (props) => {
    const [toggle, setToggle] = useState(false)
    const toggleConfirm = () => {
        console.log('Toggle confirm screen from ', toggle)
        setToggle(!toggle)
    }
    const [address, setAddress] = useState({
        name: 'DefaultName',
        address:
            'Default addresscity,defaukt address street,default address BuILDING',
    })
    const changeaddress = (e) => {
        console.log('setting new address')
        setAddress({ name: e['name'], address: e['address'] })
    }
    return (
        <>
            {!toggle ? (
                <PopupCheckout
                    ship={props.ship}
                    bill={props.bill}
                    toggle={props.toggle}
                    addaddress={() => toggleConfirm()}
                    changeaddress={(e) => changeaddress(e)}
                />
            ) : null}
            {toggle ? <Addaddress toggle={toggleConfirm} /> : null}
        </>
    )
}

export default withRouter(Checkout)
