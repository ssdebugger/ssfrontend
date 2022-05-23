// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'oz65z3ci', // you can find this in sanity.json
  dataset: 'production', // 
  useCdn: false , // `false` if you want to ensure fresh data
  apiVersion: "2022-02-03"
})