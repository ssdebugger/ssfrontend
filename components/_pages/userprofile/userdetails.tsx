import { Typography } from 'components/_pages/product/index.style'
import { InputField, Save, DropDown } from './style'
import { GridContainer, GridItem } from '../homepage/style'

const Userdetails = (props) => {
    const businessdisplay = (e) => {
        const dropdown = document.getElementById('dropdown') as HTMLInputElement
        const value = dropdown.value
        const business = document.getElementById('businessclass')

        if (value === 'business') {
            business.style.display = 'block'
        } else {
            business.style.display = 'none'
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
                    User Profile
                </Typography>
                <Typography
                    marginLeft="2rem"
                    marginTop="2rem"
                    fontWeight="400"
                    fontSize="1rem"
                >
                    Username
                </Typography>
                <InputField placeholder={props.username} />
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="400"
                    fontSize="1rem"
                >
                    Email
                </Typography>
                <InputField disabled placeholder={props.useremail} />
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="400"
                    fontSize="1rem"
                >
                    Phone Number
                </Typography>
                <InputField placeholder="" />
                <Typography
                    marginLeft="2rem"
                    marginTop="1.5rem"
                    fontWeight="400"
                    fontSize="1rem"
                >
                    Account Type
                </Typography>
                <DropDown id="dropdown" onChange={(e) => businessdisplay(e)}>
                    <option value="personal">Personal</option>
                    <option value="business">Business</option>
                </DropDown>
                <Save>Save</Save>
            </GridItem>
            <GridItem sm={100} md={50} lg={50}>
                <div id="businessclass">
                    <Typography
                        marginLeft="2rem"
                        marginTop="2rem"
                        fontWeight="500"
                        fontSize="1rem"
                    >
                        * These fields are required for business account
                    </Typography>
                    <Typography
                        marginLeft="2rem"
                        marginTop="2rem"
                        fontWeight="400"
                        fontSize="1rem"
                    >
                        Name
                    </Typography>
                    <InputField placeholder="Test User" />
                    <Typography
                        marginLeft="2rem"
                        marginTop="1.5rem"
                        fontWeight="400"
                        fontSize="1rem"
                    >
                        Business Email
                    </Typography>
                    <InputField placeholder="Test@gmail.com" />
                    <Typography
                        marginLeft="2rem"
                        marginTop="1.5rem"
                        fontWeight="400"
                        fontSize="1rem"
                    >
                        Phone Number
                    </Typography>
                    <InputField placeholder="+21276" />
                </div>
            </GridItem>

            <style jsx>
                {`
                    #businessclass {
                        display: none;
                        animation: fadeEffect 1s; /* Fading effect takes 1 second */
                    }
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
        </GridContainer>
    )
}

export default Userdetails
