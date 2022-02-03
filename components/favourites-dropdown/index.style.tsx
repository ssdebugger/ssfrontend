import styled from 'styled-components'

export const DropdownContainer = styled.div`
    position: fixed;
    top: 60px;
    left: 0;
    width: 100%;
    height: 100%;
`

export const DropdownBackground = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
`

export const DropdownMain = styled.div`
    position: fixed;
    top: 60px;
    right: 5%;
    width: 100%;
    max-width: 500px;
    background: #fff;
`

export const DropdownContent = styled.div`
    padding: 2rem;
`

export const DropdownTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2.5rem;

    h3 {
        font-size: ${(props) => props.theme.textLarge};
    }
`

export const DropdownItems = styled.div`
    margin-bottom: 2rem;
`

export const DropdownItem = styled.div`
    display: flex;

    img {
        width: 100px;
        height: 100px;
    }
`

export const ProductDetails = styled.div`
    padding-left: 1.125rem;
    max-width: 300px;

    h4 {
        font-weight: 500;
        font-size: ${(props) => props.theme.textBase};
    }
`

export const ProductTag = styled.span``
