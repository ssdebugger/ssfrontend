
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'
import { MainHeading } from '@/components/typography/heading'

const Header = styled.header``
const Wrapper = styled.div`
    padding: 1rem 1.25rem;
    border-bottom: 1px solid ${(props) => props.theme.blueGray200};
    cursor:pointer;
`

const FaviconLink = styled.a`
    display: flex;
    align-items: center;
`

export const CheckoutHeader = () => {
    return (
        <Header>
            <Wrapper>
                <Link href={'/'} passHref>
                    <FaviconLink>
                        <div>
                           <MainHeading fontSize='1rem'>&#9664; Go Back</MainHeading>
                        </div>
                    </FaviconLink>
                </Link>
            </Wrapper>
        </Header>
    )
}
