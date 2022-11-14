import Orders from '@/components/_pages/orders'

export default Orders


// export async function getServerSideProps(context) {
//     const user = context.query.email
//     const userdetails = await fetch(
//         'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getrecentorders?email=' +
//             user,
//         {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             mode: 'no-cors', // no-cors, *cors, same-origin
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         }
//     )
//     const response = await userdetails.json()
//     return {
//         props: {
//             response: response,
//         },
//     }
// }
