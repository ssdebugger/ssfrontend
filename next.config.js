/** @type {import('next').NextConfig} */
const arr1 = [
  'palm-leaf-round-bowl',
  'palm-leaf-round-plate',
  'palm-leaf-square-plate',
  'palm-leaf-bowl',
  'gloveup-compostable-gloves',
  'fork-3',
  'spoon-3',
  'knife-3',
  'palm-leaf-heart-bowl',
  'palm-leaf-oval-bowl',
  'palm-leaf-rectangular-tray',
  'palm-leaf-round-tray',
  'palm-leaf-rectangular-tray-with-partition',
  'palm-leaf-container',
  'dinner-pack-round',
  'dinner-pack-square',
  'house-party-pack-round',
  'house-party-pack-square',
  'party-pack-round',
  'cutlery-set',
  'party-pack-square'
]
const arr2 = [
  'palm-leaf-round-bowl-4.5inch',
  'palm-leaf-round-plate-6inch',
  'palm-leaf-square-plate-6inch',
  'palm-leaf-bowl-deep-5inch',
  'plant-based-compostable-gloves',
  'birch-wood-fork',
  'birch-wood-spoon',
  'birch-wood-knife',
  'palm-leaf-heart-bowl-5inch',
  'palm-leaf-oval-bowl-5x8inch',
  'palm-leaf-rectangular-tray-9inchx6inch',
  'palm-leaf-rectangular-tray-3partition-10inch',
  'palm-leaf-rectangular-tray-5partition-12inchx10inch',
  'leaf-container-500ml',
  'palm-leaf-dinner-bundle-round',
  'palm-leaf-dinner-bundle-square',
  'palm-leaf-house-party-bundle-round',
  'palm-leaf-house-party-pack-square',
  'palm-leaf-party-bundle-round',
  'birch-wood-cutlery-set-dinner-bundle',
  'palm-leaf-party-bundle-rectangle'
]

var redirectstring = [  {
  source: '/2020/:path*',
  destination: '/blog',
  
},
{
  source: '/2021/:path*',
  destination: '/blog',

}]
for (let i = 0; i<arr1.length; i++) {
//     redirectstring += "{" + "source: '/" + arr1[i] + "' ,destination:'/product/" + arr2[i] + "'}" 
//   }
    redirectstring.push(JSON.parse(JSON.stringify({
        source: '/'+arr1[i],
        destination: '/product/'+arr2[i],
    })))
}

module.exports = {
  reactStrictMode: true,

  compiler: {
      styledComponents: true,
  },
  images: {
      domains: [
          'cdn.sanity.io',
          'ss-compressedimages.s3.amazonaws.com',
          'ss-compressedimages.s3.us-east-2.amazonaws.com',
      ],
  },
  async rewrites() {
      return redirectstring
  },
}
