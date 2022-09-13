
import Productpage from '@/components/_pages/product'

export default Productpage

export async function getServerSideProps(context){
    const sku = context.params.sku

    const res = await fetch(
        `https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getproductdetailssku?sku=${sku}`
    )
    const data = await res.json()
    try{       
        if ((await data.body.statusCode) === 200) {   
     return {
        props: {
            data: data,
        }
    }
}
}
    catch (error) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const res = await fetch(
//         'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getallproducts'
//     )

//     const productData = await res.json()

//     const paths = productData.body.map((item) => ({
//         params: {
//             sku: item.sku_code.S,
//         },
//     }))

//     return {
//         paths,
//         fallback: 'blocking',
//     }
// }
