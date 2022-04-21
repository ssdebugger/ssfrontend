import styled, { css } from 'styled-components'

export const TableWrapper = styled.div`
    width: calc(100vw - 220px - 4rem);
    overflow-x: visible;
`

export const Table = styled.table`
    display: table;
    width: 100%;
    table-layout: fixed;
    word-wrap: break-word;
    border-collapse: separate;
    border-spacing: 2px;
    border-collapse: collapse;
    border-top: 1px solid #e7e5e4;
    border-bottom: 1px solid #e7e5e4;
    min-width: 1200px;
`
export const TableHeader = styled.thead`
    background: #f5f5f4;
`
export const TableBody = styled.tbody``

export const TableRow = styled.tr`
    border-bottom: 1px solid #e7e5e4;
`

export const TableHead = styled.th<{
    width?: number
    readonly textCenter?: boolean
}>`
    padding: 0.5rem;
    text-align: left;
    border-bottom: 1px solid #e7e5e4;

    width: ${(props) => props.width && `${props.width}px`};
    text-align: ${(props) => props.textCenter && 'center'};

    span {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
    }
`
export const TableData = styled.td<{ textCenter?: boolean }>`
    padding: 1rem 0.5rem 1.5rem;
    vertical-align: top;
    text-align: ${(props) => props.textCenter && 'center'};
    color: #57534e;
    font-size: 14px;

    div {
        font-size: 14px;
        line-height: 160%;
        text-transform: capitalize;

        &.highlight {
            text-transform: capitalize;
            color: #047857;
            font-weight: 600;
        }

        &.text_md {
            font-size: 16px;
        }

        &.color_highlight {
            color: #047857;
            font-weight: 500;
        }
    }

    img {
        width: 75px;
        height: 75px;
    }
`

export const CellBody = styled.div``

export const Status = styled.span<{
    status:
        | 'unshipped'
        | 'pending'
        | 'canceled'
        | 'shipped'
        | 'outOfStock'
        | 'lowStock'
        | 'inStock'
}>`
    width: max-content;
    font-size: 14px;
    background: ${(props) =>
        props.status === 'unshipped' || props.status === 'outOfStock'
            ? '#b91c1c'
            : props.status === 'pending' || props.status === 'lowStock'
            ? '#ca8a04'
            : props.status === 'canceled'
            ? '#1c1917'
            : props.status === 'shipped' || props.status === 'inStock'
            ? '#15803d'
            : null};
    color: #fff;
    padding: 0.25rem 0.5rem;
    border-radius: 6px;
    font-weight: 500;
`

export const TableActionButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0.75rem;
`

export const TableActionBtnStyles = css`
    display: block;
    width: 180px;
    margin: 0 auto;
    border-radius: 6px;
    padding: 0.25rem 0.5rem;
    font-size: 14px;
    border: 1px solid #d6d3d1;
    background: #f5f5f4;
    color: #44403c;
    font-weight: 500;
    transition: 0.2s ease;

    &:focus,
    &:hover {
        background: #292524;
        color: #f5f5f4;
        border-color: #1c1917;
    }
`

export const TableActionBtn = styled.button`
    ${TableActionBtnStyles}
`
export const TableActionLink = styled.a`
    ${TableActionBtnStyles}
    text-align: center;
    cursor: pointer;
`
