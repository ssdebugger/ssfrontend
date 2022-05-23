
import { withRouter } from 'next/router'
import { useState } from 'react'
import Addaddress from './addaddress'
import PopupCheckout from './popupcheckout'

const Checkout = (props) => {
    const [toggle, setToggle] = useState(false)
    const toggleConfirm = () => {
        setToggle(!toggle)
    }
    const [address, setAddress] = useState({
        name: 'DefaultName',
        address:
            'Default addresscity,defaukt address street,default address BuILDING',
    })
    const changeaddress = (e) => {
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
