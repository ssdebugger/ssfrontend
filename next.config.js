/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    
    compiler : {
        styledComponents: true,
    } ,
    images: {
        domains: ['cdn.sanity.io','ss-compressedimages.s3.amazonaws.com'],
    },
}

