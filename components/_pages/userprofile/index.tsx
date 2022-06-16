import { GridContainer, GridItem } from '../homepage/style'
import { LandingLayout } from 'components/layout/landing'
import {
    User,
    Settings,
    Truck,
    HelpCircle,
    LogOut,
    Archive,
} from 'react-feather'
import { UserIcons, Tab, Button, Text } from './style'
import Userdetails from './userdetails'
import SettingsContent from './settings'
import { useEffect } from 'react'
import Footer from 'components/footer/index'
import { useRouter } from 'next/router'
import { useAuthLogout } from 'context/auth'
import Head from 'next/head'

const Userprofile = (props) => {
    const router = useRouter()
    const logout = useAuthLogout()

    const useremail = props.response.body[0]['email_id']
    const isbusiness = props.response.body[0]['business']
    const username = props.response.body[0]['firstname']
    const routelogout = () => {
        logout()
        window.localStorage.removeItem('user')
        router.push('./signin')
    }
    const routefaq = () => {
        router.push('./faq')
    }
    const routeOrders = () => {
        router.push(`/orders?email=${useremail}`)
    }
    useEffect(() => {
        document.getElementById('defaultopen').click()
    }, [])
    function openContent(evt, name) {
        // Declare all variables
        var i, tabcontent, tablinks
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName('tabcontent')
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = 'none'
        }
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName('tablinksactive')
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace('active', '')
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(name).style.display = 'block'
        evt.currentTarget.className += 'active'
    }
    return (
        <>
            <Head>
                <title>UserProfile - Sellsage</title>
            </Head>
            <LandingLayout>
                <GridContainer>
                    <GridItem sm={100} md={30} lg={25}>
                        <Tab className="tab">
                            <Button
                                className="tablinks"
                                id="defaultopen"
                                onClick={(event) =>
                                    openContent(event, 'Userprofile')
                                }
                            >
                                <UserIcons>
                                    <User />
                                </UserIcons>
                                <Text>User Profile</Text>
                            </Button>

                            <Button
                                className="tablinks"
                                onClick={(event) =>
                                    openContent(event, 'Settings')
                                }
                            >
                                <UserIcons>
                                    <Settings />
                                </UserIcons>
                                <Text>Change Password</Text>
                            </Button>

                            <Button
                                className="tablinks"
                                onClick={() => routeOrders()}
                            >
                                <UserIcons>
                                    <Archive />
                                </UserIcons>
                                <Text>Your orders</Text>
                            </Button>

                            {/* <Button
                                className="tablinks"
                                onClick={(event) =>
                                    openContent(event, 'Address')
                                }
                            >
                                <UserIcons>
                                    <Truck />
                                </UserIcons>
                                <Text>Addresses</Text>
                            </Button> */}
                            <Button
                                className="tablinks"
                                onClick={() => routefaq()}
                            >
                                <UserIcons>
                                    <HelpCircle />
                                </UserIcons>
                                <Text>Help</Text>
                            </Button>
                            <Button
                                className="tablinks"
                                onClick={() => routelogout()}
                            >
                                <UserIcons>
                                    <LogOut />
                                </UserIcons>
                                <Text>Logout</Text>
                            </Button>
                        </Tab>
                    </GridItem>
                    <GridItem sm={100} md={70} lg={70}>
                        <div id="Userprofile" className="tabcontent">
                            <Userdetails
                                useremail={useremail}
                                username={username}
                                isbusiness={isbusiness}
                            />
                        </div>
                        <div id="Settings" className="tabcontent">
                            <SettingsContent />
                        </div>
                        <div id="Settings" className="tabcontent">
                            <SettingsContent />
                        </div>
                        {/* <div id="Address" className="tabcontent">
                            <Shippingaddress />
                        </div> */}
                    </GridItem>
                </GridContainer>
                <style jsx>
                    {`
                        .tabcontent {
                            animation: fadeEffect 1s; /* Fading effect takes 1 second */
                            color: black;
                            display: none;
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
                    `}
                </style>
            </LandingLayout>

            <Footer />
        </>
    )
}

export default Userprofile
