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

const HomepageMain = styled.main`
    margin-top: 50px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin: 0;
    }
`

const Homepage = ({ offers, bundles }) => {
    const ProductsOfferList = [offers['body'][0],offers['body'][5]]
    console.log(bundles)
    for (let i = 1; i < 4; i++) {
        ProductsOfferList.push(offers['body'][i])
    }

    const NewLaunchesList = []
    for (let i = 2; i < 5; i++) {
        NewLaunchesList.push(bundles['body'][i])
    }
    for (let i = 6; i < 7; i++) {
        NewLaunchesList.push(bundles['body'][i])
    }

    useEffect(() => {
        ;(function (d, s, id) {
            var js
            if (d.getElementById(id)) {
                return
            }
            js = d.createElement(s)
            js.id = id
            js.src = 'https://embedsocial.com/cdn/ht.js'
            d.getElementsByTagName('head')[0].appendChild(js)
        })(document, 'script', 'EmbedSocialHashtagScript')
    }, [])

    return (
        <>
            <Head>
                <title>Sellsage</title>
            </Head>

            <Header />

            <HomepageMain>
                <Carousel />

                <Offer productsList={ProductsOfferList} />

                <Bundle />

                <NewLaunches newLaunchProducts={NewLaunchesList} />

                <Offer productsList={ProductsOfferList} />

                <StoriesFromUs />

                <div className="embedsocial-hashtag" data-ref="f435d93354be5f95d8dcdfbd24816a8a6bdea9c1"></div>

                <Footer />

                <EmailSubscription />
            </HomepageMain>
        </>
    )
}

export default Homepage
