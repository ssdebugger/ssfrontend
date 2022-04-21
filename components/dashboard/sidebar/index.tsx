import { useRouter } from 'next/router'
import { Grid, LogOut, Package } from 'react-feather'

import { HyperLink } from '@/components/header'
import { useAuthLogout } from '@/context/auth'

import { Aside, AsideLink, AsideLinks, BrandIcon } from './sidebar.style'

export const Sidebar = () => {
    const { pathname, push } = useRouter()
    const logout = useAuthLogout()

    const routeLogout = () => {
        logout()
        window.sessionStorage.removeItem('user')
        push('./signin')
    }

    return (
        <Aside>
            <BrandIcon>
                <img src="/favicon-01.svg" />
                <h1>Sellsage</h1>
            </BrandIcon>

            <AsideLinks>
                <AsideLink isActive={pathname === '/dashboard'}>
                    <HyperLink href="/dashboard">
                        <Package /> Orders
                    </HyperLink>
                </AsideLink>

                <AsideLink isActive={pathname === '/dashboard/products'}>
                    <HyperLink href="/dashboard/products">
                        <Grid /> Products
                    </HyperLink>
                </AsideLink>

                <AsideLink>
                    <button onClick={routeLogout}>
                        <LogOut /> Logout
                    </button>
                </AsideLink>
            </AsideLinks>
        </Aside>
    )
}
