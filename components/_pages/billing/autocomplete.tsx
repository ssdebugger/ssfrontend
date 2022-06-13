import {  useState } from 'react'
import { usePlacesWidget } from 'react-google-autocomplete'
import { Button } from '@/components/buttons'
import { useAddUser, useUser } from '@/context/user'

const Autocompleteform = (props) => {
    const componentForm = [
        'location',
        'locality',
        'administrative_area_level_1',
        'country',
        'postal_code',
    ]
    const { ref, autocompleteRef } = usePlacesWidget({
        apiKey: 'AIzaSyDtDZuMfT96MQUfJvR4gRDK2VxoLPQYcao',
        options: {
            fields: ['address_components', 'geometry', 'name'],
            types: ['address'],
        },
        onPlaceSelected: (place) => {
           
            let address = (
                document.getElementById(
                    'location' + props.id
                ) as HTMLInputElement
            ).value
        
            setAddress(address)

            place['address_components'].map((x, i) => {
                if (x['types'][0] === 'postal_code') {
                    ;(
                        document.getElementById(
                            'postal_code' + props.id
                        ) as HTMLInputElement
                    ).value = x['long_name']
                    setZip(x['long_name'])
                } else if (x['types'][0] === 'country') {
                    ;(
                        document.getElementById(
                            'country' + props.id
                        ) as HTMLInputElement
                    ).value = x['long_name']
                    setCountry(x['long_name'])
                } else if (x['types'][0] === 'administrative_area_level_1') {
                    ;(
                        document.getElementById(
                            'administrative_area_level_1' + props.id
                        ) as HTMLInputElement
                    ).value = x['long_name']
                    setState(x['long_name'])
                } else if (x['types'][0] === 'locality') {
                    ;(
                        document.getElementById(
                            'locality' + props.id
                        ) as HTMLInputElement
                    ).value = x['long_name']
                    setCity(x['long_name'])
                }
            })
        },
    })

    // useEffect(() => {
    //     const componentForm = [
    //         'location',
    //         'locality',
    //         'administrative_area_level_1',
    //         'country',
    //         'postal_code',
    //     ];

    //     const input = document.getElementById('location'+props.id) as HTMLInputElement

    //     const autocomplete = new google.maps.places.Autocomplete(input, {
    //         fields: ["address_components", "geometry", "name"],
    //         types: ["address"],
    //     })
    //     autocomplete.setComponentRestrictions({
    //         country: ["us"]
    //     })
    //     autocomplete.addListener('place_changed', function () {
    //         const place = autocomplete.getPlace();
    //         if (!place.geometry) {
    //             // User entered the name of a Place that was not suggested and
    //             // pressed the Enter key, or the Place Details request failed.
    //             window.alert('No details available for input: \'' + place.name + '\'');
    //             return;
    //         }
    //         fill='true'InAddress(place);
    //     });

    //     function fill='true'InAddress(place) {  // optional parameter
    //         const addressNameFormat = {
    //             'street_number': 'short_name',
    //             'route': 'long_name',
    //             'locality': 'long_name',
    //             'administrative_area_level_1': 'short_name',
    //             'country': 'long_name',
    //             'postal_code': 'short_name',
    //         };
    //         const getAddressComp = function (type) {
    //             for (const component of place.address_components) {
    //                 if (component.types[0] === type) {
    //                     return component[addressNameFormat[type]];
    //                 }
    //             }
    //             return '';
    //         };
    //         (document.getElementById('location'+props.id) as HTMLInputElement).value = getAddressComp('street_number') + ' '
    //             + getAddressComp('route');
    //         for (const component of componentForm) {
    //             // Location field is handled separately above as it has different logic.
    //             if (component !== 'location') {
    //                 (document.getElementById('location'+props.id) as HTMLInputElement).value = getAddressComp(component);
    //             }
    //         }
    //     }

    // },[])

    const user = useUser()
    const addUser = useAddUser()
    const onSubmit = (e) => {
        e.target.innerHTML = 'Address Saved'
        e.target.disabled = true

        setTimeout(() => {
            e.target.innerHTML = 'save address'
            e.target.disabled = false
        }, 1500)
        if (props.id == 'guestship') {
            let newaddress = {
                isDefault: false,
                username: (document.getElementById('name') as HTMLInputElement)
                    .value,
                phoneNo: Number(
                    (document.getElementById('mobile') as HTMLInputElement)
                        .value
                ),
                location: (
                    document.getElementById(
                        'location' + props.id
                    ) as HTMLInputElement
                ).value,
                landmark: (
                    document.getElementById(
                        'landmark' + props.id
                    ) as HTMLInputElement
                ).value,
                city: (
                    document.getElementById(
                        'locality' + props.id
                    ) as HTMLInputElement
                ).value,
                zipCode: Number(
                    (
                        document.getElementById(
                            'postal_code' + props.id
                        ) as HTMLInputElement
                    ).value
                ),
                state: (
                    document.getElementById(
                        'administrative_area_level_1' + props.id
                    ) as HTMLInputElement
                ).value,
                country: (
                    document.getElementById(
                        'country' + props.id
                    ) as HTMLInputElement
                ).value,
            }
            window.localStorage.setItem('ship', JSON.stringify(newaddress))
            // props.setShip(newaddress)
            if (
                JSON.parse(window.localStorage.getItem('bill')) == undefined ||
                null
            ) {
                window.localStorage.setItem('bill', JSON.stringify(newaddress))
                //    props.setBill(bill => newaddress)
            }
        } else if (props.id == 'guestbill') {
            let newaddress = {
                isDefault: false,
                username: (document.getElementById('name') as HTMLInputElement)
                    .value,
                phoneNo: Number(
                    (document.getElementById('mobile') as HTMLInputElement)
                        .value
                ),
                location: (
                    document.getElementById(
                        'location' + props.id
                    ) as HTMLInputElement
                ).value,
                landmark: (
                    document.getElementById(
                        'landmark' + props.id
                    ) as HTMLInputElement
                ).value,
                city: (
                    document.getElementById(
                        'locality' + props.id
                    ) as HTMLInputElement
                ).value,
                zipCode: Number(
                    (
                        document.getElementById(
                            'postal_code' + props.id
                        ) as HTMLInputElement
                    ).value
                ),
                state: (
                    document.getElementById(
                        'administrative_area_level_1' + props.id
                    ) as HTMLInputElement
                ).value,
                country: (
                    document.getElementById(
                        'country' + props.id
                    ) as HTMLInputElement
                ).value,
            }
            window.localStorage.setItem('bill', JSON.stringify(newaddress))

            // props.setBill(bill => newaddress)
        } else {
            let addresslist = user.user['address']
            let newaddress = {
                isDefault: false,
                username: (document.getElementById('name') as HTMLInputElement)
                    .value,
                phoneNo: Number(
                    (document.getElementById('mobile') as HTMLInputElement)
                        .value
                ),
                location: (
                    document.getElementById(
                        'location' + props.id
                    ) as HTMLInputElement
                ).value,
                landmark: (
                    document.getElementById(
                        'landmark' + props.id
                    ) as HTMLInputElement
                ).value,
                city: (
                    document.getElementById(
                        'locality' + props.id
                    ) as HTMLInputElement
                ).value,
                zipCode: Number(
                    (
                        document.getElementById(
                            'postal_code' + props.id
                        ) as HTMLInputElement
                    ).value
                ),
                state: (
                    document.getElementById(
                        'administrative_area_level_1' + props.id
                    ) as HTMLInputElement
                ).value,
                country: (
                    document.getElementById(
                        'country' + props.id
                    ) as HTMLInputElement
                ).value,
            }
            addresslist.push(newaddress)
            let data = {
                email: window.localStorage.getItem('useremail'),
                activity_type: 'add',
                address: newaddress,
            }

            fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/crudaddress',
                {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'no-cors', // no-cors, *cors, same-origin
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify(data), // body data type must match "Content-Type" header
                }
            )

            let userdetails = {
                verified: user.user['verified'],
                type: user.user['type'],
                name: user.user['name'],
                phone: user.user['phone'],
                email: user.user['email'],
                address: addresslist,
                wishlist: user.user['wishlist'],
            }
            addUser(userdetails)
            props.handleClose()
        }
    }
    const [name, setName] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')
    const [country,setCountry]=useState('')

    const handlechange = (e, tar) => {
        if (tar == 'name') {
            setName((name) => e.target.value)
        } else if (tar == 'mobile') {
            setMobile((mobile) => e.target.value)
        } else if (tar == 'address') {
            setAddress((address) => e.target.value)
        } else if (tar == 'zip') {
            setZip((zip) => e.target.value)
        }
        else if (tar == 'city') {
            setCity((city) => e.target.value)
        }
        else if (tar == 'state') {
            setState((state) => e.target.value)
        }
        else if (tar == 'country') {
            setCountry((country) => e.target.value)
        }
    }

    return (
        <>
            <div className="card-container">
                <div className="panel">
                    <div>
                        <span className="sb-title">Address Selection</span>
                    </div>
                    <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => handlechange(e, 'name')}
                    />
                    <input
                        id="mobile"
                        type="text"
                        placeholder="Mobile"
                        value={mobile}
                        onChange={(e) => handlechange(e, 'mobile')}
                    />
                    <input
                        ref={ref}
                        type="text"
                        placeholder="Address"
                        id={'location' + props.id}
                        value={address}
                        onChange={(e) => handlechange(e, 'address')}
                    />
                    <input
                        type="text"
                        placeholder="Apt, Suite, etc (optional)"
                        id={'landmark' + props.id}
                    />
                    <input
                        type="text"
                        placeholder="City"
                        id={'locality' + props.id}
                        value={city}
                        onChange={(e) => handlechange(e, 'city')}
                    />
                    <div className="half-input-container">
                        <input
                            type="text"
                            className="half-input"
                            placeholder="State/Province"
                            value={state}
                            id={'administrative_area_level_1' + props.id}
                            onChange={(e) => handlechange(e, 'state')}
                        />
                        <input
                            type="text"
                            className="half-input"
                            placeholder="Zip/Postal code"
                            id={'postal_code' + props.id}
                            value={zip}
                            onChange={(e) => handlechange(e, 'zip')}
                        />
                    </div>
                    <input
                        type="text"
                        placeholder="Country"
                        id={'country' + props.id}
                        value={country}
                        onChange={(e) => handlechange(e, 'country')}
                    />
                    <Button
                        disabled={
                            name.length < 1 ||
                            address.length < 1 ||
                            zip.length < 1 ||
                            mobile.length < 1
                        }
                        fill="true"
                        onClick={(e) => onSubmit(e)}
                        varient="primary"
                    >
                        Save address
                    </Button>
                </div>
            </div>

            <style jsx>
                {`
                    body {
                        margin: 0;
                    }

                    .sb-title {
                        position: relative;
                        top: -12px;
                        font-family: Roboto, sans-serif;
                        font-weight: 500;
                    }

                    .sb-title-icon {
                        position: relative;
                        top: -5px;
                    }

                    .card-container {
                        display: flex;
                        height: 400px;
                        width: 300px;
                    }

                    .panel {
                        background: white;
                        width: 300px;
                        padding: 20px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                    }

                    .half-input-container {
                        display: flex;
                        justify-content: space-between;
                    }

                    .half-input {
                        width: 120px;
                    }

                    h2 {
                        margin: 0;
                        font-family: Roboto, sans-serif;
                    }

                    input {
                        height: 30px;
                    }

                    input {
                        border: 0;
                        border-bottom: 1px solid black;
                        font-size: 14px;
                        font-family: Roboto, sans-serif;
                        font-style: normal;
                        font-weight: normal;
                    }

                    input:focus::placeholder {
                        color: white;
                    }

                    .button-cta {
                        height: 40px;
                        width: 40%;
                        background: #3367d6;
                        color: white;
                        font-size: 15px;
                        text-transform: uppercase;
                        font-family: Roboto, sans-serif;
                        border: 0;
                        border-radius: 3px;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.48);
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    )
}
export default Autocompleteform
