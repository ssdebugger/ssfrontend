// log the pageview with their URL
declare global {
    interface Window {
        gtag: any
    }
}

export const pageview = (url) => {
    window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url,
    })
    window.gtag('config', 'AW-592822639');
}

// log specific events happening.
export const event = ({ action, params }) => {
    window.gtag('event', action, params)
    
}
