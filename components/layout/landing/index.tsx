import { ReactNode } from 'react'
import styled from 'styled-components'

import { Header } from '@/components/header'
import { Container } from '@/components/container/regular'

interface Props {
    children: ReactNode
}

const Contents = styled.main`
    padding: 0 1.25rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 2rem;
    }
`

export const LandingLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                <Contents>{children}</Contents>
            </Container>
        </>
    )
}
