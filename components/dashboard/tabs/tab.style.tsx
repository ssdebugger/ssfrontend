import styled from 'styled-components'

export const OrderTabs = styled.div`
    margin: 0 0 2rem 0;
    border-bottom: 1px solid #e7e5e4;
`

export const OrderTab = styled.button<{ isActive?: boolean }>`
    margin: 0 2.5rem 0 0;
    padding: 0.5rem 0;
    color: #0f766e;
    font-size: 1.125rem;
    font-weight: ${(props) => (props.isActive ? 500 : 300)};
    border-bottom: 2px solid
        ${(props) => (props.isActive ? '#f59e0b' : 'transparent')};

    &:hover {
        border-bottom-color: ${(props) => (props.isActive ? null : '#d6d3d1')};
    }

    span {
        font: inherit;

        &:first-child {
            margin: 0 0.5rem 0 0;
            color: #d97706;
        }
    }
`
