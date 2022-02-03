import Head from 'next/head'
import styled from 'styled-components'
import { Sidebar } from '../sidebar'

const DashboardContent = styled.main`
    margin-left: 250px;
    padding: 2rem;
`

export const DashboardTemplate = ({
    children,
    pageTitle,
}: {
    children: React.ReactNode
    pageTitle: string
}) => {
    return (
        <>
            <Head>
                <title>{pageTitle} - Sellsage</title>
            </Head>

            <Sidebar />

            <DashboardContent>{children}</DashboardContent>
        </>
    )
}
