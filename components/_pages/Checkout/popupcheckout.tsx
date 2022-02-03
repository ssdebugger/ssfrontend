import { Popupoverlay, Popupcontent, Mainpopup } from './style'
import { useState } from 'react'
import AddressContainer from './addresscontainer'
import { AddressHolder } from './style'
import { Heading4 } from 'components/typography/heading'
import { Button } from 'components/cta/button'
import Popup from '../auth/popup'
const PopupCheckout = (props) => {
    return (
        <Popupoverlay>
            <Mainpopup id="Mainpopup">
                <Popupcontent>
                    <>
                        <span
                            className="close"
                            onClick={(e) => props.toggle(e)}
                        >
                            &times;
                        </span>

                        <Heading4 margin="1rem 0 0 1rem">
                            Select a delivery address
                        </Heading4>

                        <AddressHolder id="holder">
                            <AddressContainer
                                ship={props.ship}
                                bill={props.bill}
                                changeaddress={props.changeaddress}
                                i={0}
                                buttontext="edit"
                            />

                            <AddressContainer
                                ship={props.ship}
                                bill={props.bill}
                                changeaddress={props.changeaddress}
                                i={1}
                                buttontext="edit"
                            />
                        </AddressHolder>
                    </>
                </Popupcontent>
            </Mainpopup>

            <style jsx>{`
                .close {
                    color: Black;
                    float: right;
                    font-size: 2rem;
                    margin-right: 1rem;
                }

                .close:hover {
                    color: red;
                    cursor: pointer;
                }
            `}</style>
        </Popupoverlay>
    )
}

export default PopupCheckout
