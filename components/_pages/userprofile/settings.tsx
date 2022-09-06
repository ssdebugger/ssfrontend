import { Typography } from 'components/_pages/product/index.style'
import { InputField, Save } from './style'
import { GridContainer, GridItem } from '../homepage/style'
import { useState } from 'react'

const SettingsContent = () => {
    const [newpwd, setNewpwd] = useState('')
    const [oldpwd, setOldpwd] = useState('')
    const [confirmpwd, setConfirmpwd] = useState('')
    const [unmatch, setUnmatch] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [length, setLength] = useState(false)
    const [wrongpwd, setWrongpwd] = useState(false)
    const updatepwd = () => {
        if (newpwd === '' || newpwd === null || newpwd === undefined) {
            setEmpty(true)
            setUpdated(false)
            setUnmatch(false)
            setLength(false)
            setWrongpwd(false)
        } else if (newpwd === confirmpwd) {
            if (newpwd.length < 8) {
                setEmpty(false)
                setUpdated(false)
                setUnmatch(false)
                setLength(true)
                setWrongpwd(false)
            } else {
                        const email = window.localStorage.getItem('useremail')
                        console.log(email,oldpwd,confirmpwd)
                        fetch(
                            `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/passwordchange?email=${email.trim()}&password=${oldpwd.trim()}&newpassword=${confirmpwd.trim()}`
                        ).then(res => res.json()).then(res => {
                          if(res.statusCode==200){
                            console.log('200')  
                            setEmpty(false)
                            setUpdated(true)
                            setUnmatch(false)
                            setLength(false)
                            setWrongpwd(false)
                          }
                          else{
                            console.log('400')  
                            setWrongpwd(true)
                            setEmpty(false)
                            setUpdated(false)
                            setUnmatch(false)
                            setLength(false)
                          }
                         
                        })  
                    }
        } else {
            setUnmatch(true)
            setEmpty(false)
            setUpdated(false)
            setLength(false)
            setWrongpwd(false)
        }
    }
    return (
        <GridContainer>
            <GridItem sm={100} md={50} lg={50}>
                <Typography
                    marginLeft="2rem"
                    fontWeight="500"
                    fontSize="1.75rem"
                >
                    Change Password
                </Typography>
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="500"
                    fontSize="1rem"
                >
                    Old Password
                </Typography>
                <InputField
                    onChange={(e) => setOldpwd(e.target.value)}
                    placeholder=""
                />
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="500"
                    fontSize="1rem"
                >
                    New Password
                </Typography>
                <InputField
                    onChange={(e) => setNewpwd(e.target.value)}
                    placeholder=""
                />
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="500"
                    fontSize="1rem"
                >
                    Confirm Password
                </Typography>
                <InputField
                    onChange={(e) => setConfirmpwd(e.target.value)}
                    placeholder=""
                />
                {empty ? (
                    <Typography
                        marginLeft="2rem"
                        color="red"
                        fontSize="1rem"
                        fontWeight="500"
                    >
                        Password Empty
                    </Typography>
                ) : null}
                {unmatch ? (
                    <Typography
                        marginLeft="2rem"
                        color="red"
                        fontSize="1rem"
                        fontWeight="500"
                    >
                        Passwords did not match
                    </Typography>
                ) : null}
                {updated ? (
                    <Typography
                        marginLeft="2rem"
                        color="green"
                        fontSize="1rem"
                        fontWeight="500"
                    >
                        Password Updated
                    </Typography>
                ) : null}
                {length ? (
                    <Typography
                        marginLeft="2rem"
                        color="red"
                        fontSize="1rem"
                        fontWeight="500"
                    >
                        Enter minimum 8 characters
                    </Typography>
                ) : null}
                {wrongpwd ? (
                    <Typography
                        marginLeft="2rem"
                        color="red"
                        fontSize="1rem"
                        fontWeight="500"
                    >
                        Old passwords did not match
                    </Typography>
                ) : null}
                <Save onClick={() => updatepwd()}>Update</Save>
            </GridItem>
        </GridContainer>
    )
}

export default SettingsContent
