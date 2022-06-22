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
import { InstagramPosts } from './sections/instagram'

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

    return (
        <>
            <Head>
                <meta
                    name="title"
                    content="Disposable Dinnerware & Disposable Cutlery | Disposable Tableware"
                ></meta>
                <meta
                    name="description"
                    content="Go plastic-free with disposable dinnerware,disposable cutlery,disposable tableware and disposable gloves ! Elegant disposable dinnerware for weddings,party and events!"
                ></meta>
                <title>Disposable Dinnerware & Disposable Cutlery | Disposable Tableware </title>
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
                <InstagramPosts />
                <Footer />

                <EmailSubscription />
            </HomepageMain>
        </>
    )
}

export default Homepage
