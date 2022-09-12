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
import { useEffect } from 'react'
import { ExitIntentPopup } from './sections/exitIntent'
import CustomerTestimonial from './sections/testimonial'

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


    // useEffect(() => {
    //     import('react-pinterest-tag').then((ReactPinterestTag) => {
    //         ReactPinterestTag.default.init('2613059152744')
    //         ReactPinterestTag.default.track('pagevisit', {
    //             promo_code: 'LandingPage',
    //             event_id: 'LaningPageVisit',
    //           })
    //     })
    // }, [])
    useEffect(() => {
        if(window.localStorage.getItem('coupon')!=undefined){
            window.localStorage.removeItem('coupon');
            console.log('deleting coupon')
        }
        
    },[])
    console.log('new launches',NewLaunchesList)
    return (
        <>
            <Head>
                <meta
                    name="title"
                    content="Disposable Dinnerware & Cutlery | Compostable Tableware"
                ></meta>
                <meta
                    name="description"
                    content="Go plastic-free with disposable dinnerware,compostable cutlery,gloves,trays,plates,bowls! Elegant disposable dinnerware for weddings,party and events!"
                ></meta>
                <title>
                    Disposable Dinnerware & Cutlery | Compostable Tableware
                </title>
                {/* <script
                            dangerouslySetInnerHTML={{
                                __html: `
        !function(e){if(!window.pintrk){window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
          n=window.pintrk;n.queue=[],n.version="3.0";var
          t=document.createElement("script");t.async=!0,t.src=e;var
          r=document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
        pintrk('load', '2613059152744', {em: 'fsd1@sellsage.com'});
        pintrk('track', 'pagevisit');;
      ` , 
                            }}
                        /> */}
            </Head>
            <Header />

            <HomepageMain>
                <Carousel />

                <Offer card={'card1'} productsList={ProductsOfferList}  />
                {/* <Infographic /> */}
                <CustomerTestimonial />
                <NewLaunches newLaunchProducts={NewLaunchesList} />
                
                <Bundle />
                
                <Offer card={'card2'} productsList={othersection} />
                
                <StoriesFromUs data={data} />
                <InstagramPosts />
                <EmailSubscription />
                <Footer />
            </HomepageMain>
        </>
    )
}

export default Homepage
