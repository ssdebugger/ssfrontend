import Script from 'next/script'
import { InstagramContainer } from './instagram.style'

export const InstagramPosts = () => {
    return (
        <InstagramContainer>
            <Script
                src="https://apps.elfsight.com/p/platform.js"
                defer
            ></Script>
            <div className="elfsight-app-df448e28-3ffb-4a09-9881-d6c78ec6bc26"></div>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
                crossOrigin="anonymous"
            ></Script>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                crossOrigin="anonymous"
            ></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
                integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
                crossOrigin="anonymous"
            ></Script>
            <Script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
                integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
                crossOrigin="anonymous"
            ></Script>
        </InstagramContainer>
    )
}
