import styled from 'styled-components'

export const BreadcrumbContainer = styled.div``

export const BreadcrumbItem = styled.span<{ isActive?: boolean }>`
    margin: 0 0.5rem 0 0;
    a {
        border-bottom: ${(props) => props.isActive && '1px solid #000'};

        &:hover {
            color: ${(props) =>
                props.isActive !== true && props.theme.blueGray400};
        }
    }

    &::after {
        content: '/';
        padding: 0 0 0 0.5rem;
    }

    &:last-child {
        &::after {
            content: '';
        }
    }
`

export const PageContainer = styled.div`
    margin: 4rem 1.125rem 2rem;

    @media (min-width: ${(props) => props.theme.screenLg}) {
        margin: 2rem 1.125rem;
    }
`

export const MainWrapper = styled.main``

export const UserDetails = styled.div``

export const UserOrder = styled.div``
