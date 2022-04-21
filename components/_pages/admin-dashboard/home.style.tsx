import styled from 'styled-components'

export const SearchContainer = styled.div``
export const SearchOrderInput = styled.input`
    padding: 0.25rem 0.75rem;
    width: 250px;
    border: 1px solid #a8a29e;
    border-radius: 6px;
    font-weight: 500;
    margin: 0 0.5rem 0 0;
    transition: 0.2s ease;
    box-shadow: 0 0 2px 3px transparent;

    &:focus {
        border: 1px solid #292524;
        box-shadow: 0 0 2px 3px #d6d3d1;
    }
`
export const SearchBtn = styled.button`
    padding: 0.25rem 1rem;
    background: #292524;
    color: #fff;
    font-weight: 500;
    border-radius: 6px;
    transition: 0.2s ease;

    &:focus,
    &:hover {
        background: #000;
    }
`

export const HeadingAndSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2.5rem 0;

    h2 {
        font-size: 1.75rem;
        font-weight: 400;
    }
`

export const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 2.5rem;
`

export const FilterDetails = styled.div`
    display: flex;
    align-items: center;

    h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0.75rem 0 0;
    }

    span {
        color: #78716c;
    }
`

// Filter dropdown
export const CurrentSelection = styled.div`
    display: flex;
    align-items: center;
    border-radius: 6px;
    border: 1px solid #d6d3d1;
    background: #f5f5f4;
    padding: 0.25rem 0.75rem;

    span {
        font-size: 14px;
        margin: 0 0.5rem 0 0;
    }

    svg {
        width: 18px;
        height: 18px;
        stroke-width: 1.5;
        stroke: #a8a29e;
    }
`

export const SelectionList = styled.ul`
    position: absolute;
    top: 2.5rem;
    left: 0;
    width: 100%;
    transform: scaleY(0);
    transform-origin: top center;
    transition: 0.2s ease;

    border: 1px solid #d6d3d1;
    border-radius: 6px;
    background: #fff;
    z-index: 10;
    box-shadow: 0 2px 4px 3px #e7e5e4;
`

export const SelectionItem = styled.li<{ isActive?: boolean }>`
    padding: 0.5rem 0.75rem;
    cursor: pointer;
    color: ${(props) => (props.isActive ? '#115e59' : '#1c1917')};
    background: ${(props) => props.isActive && '#ccfbf1'};
    font-weight: ${(props) => props.isActive && 500};
    text-align: left;

    &:hover {
        background: ${(props) => !props.isActive && '#e7e5e4'};
    }
`

export const FilterDropdown = styled.button`
    position: relative;
    width: max-content;

    &:focus ${SelectionList} {
        transform: scaleY(1);
    }
`
