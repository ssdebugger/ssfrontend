import Productpage from '@/components/_pages/product'

export default Productpage

export async function getServerSideProps({ query }) {
    var productSku = query.sku
    if(productSku=='palm-leaf-round-bowl'){
        productSku='PALM-RNDB-0450-0020'
    }
    else if(productSku=='palm-leaf-round-plate'){
        productSku='PALM-RNDP-0600-0020'
    }
    else if(productSku=='palm-leaf-square-plate'){
        productSku='PALM-SQRP-0600-0020'
    }
    else if(productSku=='palm-leaf-bowl'){
        productSku='PALM-DEPB-0500-0020'
    }
    else if(productSku=='gloveup-compostable-gloves'){
        productSku='GLOV-DOM-0030-0036'
    }
    else if(productSku=='fork-3'){
        productSku='PALM-CFRK-0001-0100'
    }
    else if(productSku=='spoon-3'){
        productSku='PALM-CSPN-0001-0100'
    }
    else if(productSku=='knife-3'){
        productSku='PALM-CKNF-0001-0100'
    }
    else if(productSku=='palm-leaf-heart-bowl'){
        productSku='PALM-HRTB-0500-0020'
    }
    else if(productSku=='palm-leaf-oval-bowl'){
        productSku='PALM-OVLB-0508-0020'
    }
    else if(productSku=='palm-leaf-rectangular-tray'){
        productSku='PALM-RTGT-0906-0020'
    }
    else if(productSku=='palm-leaf-round-tray'){
        productSku='PALM-RNDT-1000-0020'
    }
    else if(productSku=='palm-leaf-rectangular-tray-with-partition'){
        productSku='PALM-RTGT-1210-0020'
    }
    else if(productSku=='palm-leaf-container'){
        productSku='PALM-CNTR-0500-0020'
    }
    else if(productSku=='dinner-pack-round'){
        productSku='BNDL-RNDB-0510-0030'
    }
    else if(productSku=='dinner-pack-square'){
        productSku='BNDL-SQDB-0710-0030'
    }
    else if(productSku=='house-party-pack-round'){
        productSku='BNDL-RNHP-0710-0360'
    }
    else if(productSku=='house-party-pack-square'){
        productSku='BNDL-SQHP-0710-0360'
    }
    else if(productSku=='party-pack-round'){
        productSku='BNDL-RNPP-0012-0400'
    }
    else if(productSku=='party-pack-square'){
        productSku='BNDL-RTPP-0012-0400'
    }
    else if(productSku=='cutlery-set'){
        productSku='BNDL-CSET-0000-0300'
    }
    const response = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getproductdetails?sku=${productSku}`
    )

    const data = await response.json()

    try {
        if ((await data.body.statusCode) === 200) {
            const responseoffers = await fetch(
                'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/gettopoffers'
            )

            const offers = await responseoffers.json()

            return { props: { data, offers } }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
}
