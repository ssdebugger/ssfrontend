import type { AppProps } from 'next/app'
import { Theme, GlobalTheme } from '../theme'
import AlertTemplate from 'react-alert-template-oldschool-dark'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import { CartProvider } from 'context/cart'
import { useEffect } from 'react'
import Router from 'next/router'
import { AuthProvider } from 'context/auth'
import { UserProvider } from 'context/user'
import ReactGa from 'react-ga'

function MyApp({ Component, pageProps }: AppProps) {
    ReactGa.initialize('UA-222573250-1')
    const options = {
        position: positions.BOTTOM_CENTER,
        timeout: 5000,
        offset: '30px',
        transition: transitions.SCALE,
    }

    useEffect(() => {
        ReactGa.pageview(window.location.pathname)

        Router.events.on('routeChangeComplete', () => {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            })
        })
    }, [])

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
