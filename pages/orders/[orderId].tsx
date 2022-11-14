import IndividualOrder from '@/components/_pages/orders/individual-order'

export default IndividualOrder


// export async function getServerSideProps(context) {
//     const id = Number(context.params.orderId)
//     const orderdetails = await fetch(
//         'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/getorderdetails?id=' +
//             id,
//         {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             mode: 'no-cors', // no-cors, *cors, same-origin
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         }
//     )
//     const invoicedetails = await fetch(
//         'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/downloadinvoice?order_no=' +
//             id,
//         {
//             method: 'GET', // *GET, POST, PUT, DELETE, etc.
//             mode: 'no-cors', // no-cors, *cors, same-origin
//             headers: {
//                 'Content-Type': 'application/json',
//                 // 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//         }
//     )
//     const response = await orderdetails.json()
//     const invoice = await invoicedetails.json()
//     return {
//         props: {
//             response: response,
//             invoice:invoice
//         },
//     }
// }

