import { useState } from 'react'
import AddressContainer from './addresscontainer'
import { AddressHolder } from './style'
import { Typography } from '../product/index.style'
import { Button } from 'components/cta/button'

const Address = (props) => {
    const [active, setActive] = useState([0, 1])
    const n = active.length
    const changeborder = (i) => {
        const modactive = []
        for (let i = 0; i < n; i++) {
            modactive[i] = 0
        }
        modactive[i] = 1
        setActive(modactive)
    }
    const expandHolder = () => {
        let container = document.getElementById('holder')
        container.style.minHeight = '600px'
        document.getElementById('more').style.display = 'none'
    }
    return (
        <>
            <AddressHolder id="holder">
                <AddressContainer
                    changeaddress={props.changeaddress}
                    i={0}
                    activearr={active}
                    setborder={(i) => changeborder(i)}
                    active={active[0]}
                    name="Sam Curran"
                    buttontext="edit"
                    address="Hyderabad Dlf cyber city , Road no 2 "
                />
                <AddressContainer
                    changeaddress={props.changeaddress}
                    i={1}
                    activearr={active}
                    setborder={(i) => changeborder(i)}
                    active={active[1]}
                    name="Jones"
                    buttontext="edit"
                    address="Secunderabad , Station Road , Opposite kanban board"
                />
                <AddressContainer
                    changeaddress={props.changeaddress}
                    i={2}
                    activearr={active}
                    setborder={(i) => changeborder(i)}
                    active={active[2]}
                    name="Samuel Richards"
                    buttontext="edit"
                    address="Strange street, New york , Unknown platform"
                />
                <AddressContainer
                    changeaddress={props.changeaddress}
                    i={3}
                    activearr={active}
                    setborder={(i) => changeborder(i)}
                    active={active[3]}
                    name="Samuel Richards"
                    buttontext="edit"
                    address="Strange street, New york , Unknown platform"
                />
                <AddressContainer
                    changeaddress={props.changeaddress}
                    i={4}
                    activearr={active}
                    setborder={(i) => changeborder(i)}
                    active={active[4]}
                    name="Samuel Richards"
                    buttontext="edit"
                    address="Strange street, New york , Unknown platform"
                />
            </AddressHolder>
            <Typography
                id="more"
                onClick={() => expandHolder()}
                style={{ cursor: 'pointer' }}
                color="#019875"
            >
                More
            </Typography>
            <Button
                varient="primary"
                style={{ width: '80%', margin: '1rem 0 1rem 1rem' }}
                onClick={() => props.addaddress()}
                color="#019875"
            >
                Add new address
            </Button>
        </>
    )
}
export default Address
