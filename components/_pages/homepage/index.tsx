import { useEffect } from 'react'
import styled from 'styled-components'

import Head from 'next/head'
import Footer from '@/components/footer'
import { Carousel } from '@/components/carousel'
import { Header } from '@/components/header'
import { Offer } from './sections/offer'
import { Bundle } from './sections/bundle'
import { NewLaunches } from './sections/new-launches'
import { StoriesFromUs } from './sections/stories-from-us'
import { EmailSubscription } from './sections/email-subscription'
import { Infographic } from './sections/infographic'

const HomepageMain = styled.main`
    margin-top: 50px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0;
    }
`

const Homepage = ({ offers, bundles, data }) => {
    let othersection = bundles['body'].slice(-1)[0]
    const ProductsOfferList = []

    for (let i = 0; i < 5; i++) {
        ProductsOfferList.push(offers['body'][i])
    }

    const NewLaunchesList = []
    for (let i = 0; i < 4; i++) {
        NewLaunchesList.push(bundles['body'][i])
    }
    console.log('checking other products', othersection, ProductsOfferList)

    // useEffect(() => {
    //     ;(function (d, s, id) {
    //         var js
    //         if (d.getElementById(id)) {
    //             return
    //         }
    //         js = d.createElement(s)
    //         js.id = id
    //         js.src = 'https://embedsocial.com/cdn/ht.js'
    //         d.getElementsByTagName('head')[0].appendChild(js)
    //     })(document, 'script', 'EmbedSocialHashtagScript')
    // }, [])

    return (
        <>
            <Head>
                <title>Sellsage </title>
            </Head>

            <Header />

            <HomepageMain>
                <Carousel />

                <Offer card={'card1'} productsList={ProductsOfferList} />
                <Infographic />
                

                <NewLaunches newLaunchProducts={NewLaunchesList} />

                <Bundle />

                <Offer card={'card2'} productsList={othersection} />

                <StoriesFromUs data={data} />
                {/* 
                <div className="embedsocial-hashtag" data-ref="f435d93354be5f95d8dcdfbd24816a8a6bdea9c1"></div> */}

                <Footer />

                <EmailSubscription />
            </HomepageMain>
        </>
    )
}

export default Homepage
