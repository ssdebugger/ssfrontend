import type { AppProps } from 'next/app'
import { Theme, GlobalTheme } from '../theme'
import AlertTemplate from 'react-alert-template-oldschool-dark'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { CartProvider } from 'context/cart'
import { useEffect } from 'react'
import Router from 'next/router'
import { AuthProvider } from 'context/auth'
import { UserProvider } from 'context/user'
import { useRouter } from 'next/router'
import { pageview } from '@/lib/google-analytics'

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter()

    const options = {
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE,
    }

    useEffect(() => {
        Router.events.on('routeChangeComplete', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    }, [])

    useEffect(() => {
        const handleRouteChange = (url) => {
            pageview(url)
        }
        //When the component is mounted, subscribe to router changes
        //and log those page views
        router.events.on('routeChangeComplete', handleRouteChange)

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return (
        <Theme>
            <GlobalTheme />
            <AlertProvider template={AlertTemplate} {...options}>
                <AuthProvider>
                    <UserProvider>
                        <CartProvider>
                            <Component {...pageProps} />
                        </CartProvider>
                    </UserProvider>
                </AuthProvider>
            </AlertProvider>
        </Theme>
    )
}
export default MyApp
