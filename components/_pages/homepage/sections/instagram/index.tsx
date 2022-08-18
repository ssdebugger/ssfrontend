import Script from 'next/script'
import { InstagramContainer } from './instagram.style'

export const InstagramPosts = () => {
    return (

        <InstagramContainer>
             <h1 style={{textAlign:'center',marginBottom:'0.75rem'}}>
                    <a style={{fontSize:'2rem'}} href="https://www.instagram.com/sellsage/">Follow Us On Instagram</a>
                </h1>
            <Script
                src="https://assets.juicer.io/embed.js"
                type="text/javascript"
            />
            <link
                href="https://assets.juicer.io/embed.css"
                media="all"
                rel="stylesheet"
                type="text/css"
            />
            <ul
                className="juicer-feed"
                data-feed-id="sellsage"
                data-origin="embed-code"
            >
            </ul>
        </InstagramContainer>
    )
}
