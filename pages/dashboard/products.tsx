import Products from '@/components/_pages/admin-dashboard/products'

export default Products

// export async function getServerSideProps() {
//     const res = await fetch(
//         'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getallproducts'
//     ).then((res) => res.json())

//     const data = await res.body

//     return { props: { data } }
// }
