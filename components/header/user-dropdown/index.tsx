import { useAuthLogout } from '@/context/auth'
import { useRouter } from 'next/router'
import { User } from 'react-feather'
import styled from 'styled-components'
import { HyperLink } from '../index'
import Link from 'next/dist/client/link'
import { useState, useEffect } from 'react'
import { useClearCart } from '@/context/cart'

const DropdownContainer = styled.div`
    position: absolute;
    right: 0;
    top: 100%;
    min-width: 240px;
    z-index: 10;
    background: #fff;
    border-radius: 0.5rem;
    over-flow: hidden;
    padding: 1.5rem 1.5rem 1.5rem 1rem;
    box-shadow: 0 10px 25px rgb(0, 0, 0, 0.05), 0 4px 12px rgb(0, 0, 0, 0.04);
    transform-origin: top center;

    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: 0.2s cubic-bezier(0.39, 0.58, 0.57, 1);

    a,
    button {
        display: block;
        padding: 0.5rem;
        width: 100%;
        text-align: left;
        color: ${(props) => props.theme.blueGray700};

        &:hover {
            color: ${(props) => props.theme.cream500};
        }
    }
`

const ContainerHeading = styled.span`
    display: block;
    font-size: 1.125rem;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: ${(props) => props.theme.blueGray900};
`
const LogoutBtn = styled.button``

const DropdownLink = styled.div`
    a {
        display: flex;
        align-items: center;
        cursor: pointer;

        p {
            margin-left: 0.5rem;

            span {
                text-transform: capitalize;
            }
        }
    }
`
const UserDropdownContainer = styled.div`
    position: relative;

    &:focus,
    &:hover {
        ${DropdownContainer} {
            transform: translateY(8px);
            opacity: 1;
            visibility: visible;
            transition: 0.2s ease-out;
        }
    }
`

export const UserDropdown = () => {
    const [name, setName] = useState('Welcome')
    const router = useRouter()
    const logout = useAuthLogout()
    const user = window.localStorage.getItem('useremail')
    const username = window.localStorage.getItem('username')
    const clearCart = useClearCart()

    const logoutFn = () => {
        logout()
        localStorage.clear()
        sessionStorage.clear()
        clearCart()
        router.replace('/')
    }

    return (
        <UserDropdownContainer>
            <DropdownLink>
                <HyperLink href="/profile">
                    <User width={16} height={16} />
                    <p>
                        Hi <span>{username}</span>
                    </p>
                </HyperLink>
            </DropdownLink>

            <DropdownContainer>
                <ContainerHeading>Account</ContainerHeading>

                <HyperLink href={'/profile?email=' + user}>Profile</HyperLink>
                <HyperLink href={'/orders?email=' + user}>Orders</HyperLink>
                <HyperLink href="/faq">Help</HyperLink>
                <LogoutBtn onClick={() => logoutFn()}>Logout</LogoutBtn>
            </DropdownContainer>
        </UserDropdownContainer>
    )
}
