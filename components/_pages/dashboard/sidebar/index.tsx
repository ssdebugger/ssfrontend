import { useRouter } from 'next/router'
import { Home, LogOut, Package } from 'react-feather'

import { HyperLink } from '@/components/header'
import { MainHeading } from '@/components/typography/heading'
import { useAuthLogout } from '@/context/auth'

import { Aside, Link, AsideLinks } from './sidebar.style'

export const Sidebar = () => {
    const router = useRouter()
    const logout = useAuthLogout()

    const routeLogout = () => {
        logout()
        window.sessionStorage.removeItem('user')
        router.push('./signin')
    }

    return (
        <Aside>
            <MainHeading>Sellsage</MainHeading>

            <AsideLinks>
                <Link isActive>
                    <HyperLink href="/dashboard">
                        <Home /> Home
                    </HyperLink>
                </Link>

                <Link>
                    <HyperLink href="/dashboard/orders">
                        <Package /> Orders
                    </HyperLink>
                </Link>

                <Link>
                    <button onClick={routeLogout}>
                        <LogOut /> Logout
                    </button>
                </Link>
            </AsideLinks>
        </Aside>
    )
}
