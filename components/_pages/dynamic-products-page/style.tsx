import styled, { css } from 'styled-components'

interface ContainerProps {
    readonly flex?: boolean
    containerSize?: number
}

export const Main = styled.main`
    margin: 5rem 0 2rem;

    @media (min-width: 768px) {
        margin: 3rem 0 2rem;
    }
`

/**
 * Common Styles
 */
export const Container = styled.div<ContainerProps>`
    display: ${(props) => props.flex && 'flex'};
    width: 100%;
    margin: 0 auto;

    @media (min-width: 1024px) {
        padding: 0 0 0 2rem;
    }
`

export const ToggleButton = styled.button`
    display: flex;
    align-items: center;
    border-radius: 50px;
    cursor: pointer;
`

export const TogglerHeading = styled.span`
    padding-left: 0.5rem;
`

const ImageStyles = styled.img`
    width: 100%;
    height: auto;
`

/**
 * Billboard Row Styles
 */
export const BillboardRow = styled.div`
    padding: 0 1rem;
    margin: 2rem 0;

    @media (min-width: 768px) {
        padding: 0 2rem;
        margin: 3.5rem 0 3rem;
    }

    @media (min-width: 1024px) {
        padding: 0;
        margin: 4.5rem 0 3rem;
    }
`

export const Heading = styled.h1`
    margin-bottom: 0.75rem;
    font-size: 1.75rem;
    text-transform: capitalize;

    @media (min-width: 768px) {
        font-size: 2rem;
    }
    @media (min-width: 1024px) {
        font-size: 2.5rem;
    }
`

export const Desc = styled.p`
    color: #404040;
    line-height: 150%;
    max-width: 450px;

    @media (min-width: 1024px) {
        font-size: 1.125rem;
    }
`

/**
 * Results Row Styles
 */
export const ResultsRow = styled.div`
    position: relative;
    border-top: 1px solid #d4d4d4;
`

export const NavbarContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    border-top: 1px solid #d4d4d4;
    border-bottom: 1px solid #d4d4d4;
    z-index: 50;

    @media (min-width: 1024px) {
        z-index: 200;
    }
`

export const ResultsNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    background: #ffffff;

    padding: 1.25rem 1rem;

    @media (min-width: 728px) {
        padding: 1.25rem 2rem;
    }

    @media (min-width: 1024px) {
        padding: 1.25rem 0;
    }
`

export const FilterColumn = styled.div`
    flex: 0.5 0 0;
`

export const SortColumn = styled.div`
    flex: 1 0 0;
`

// ResultsContent
export const SidebarContainer = styled.div`
    background: #ffffff;
    padding: 2rem 1rem;
    display: none;

    @media (min-width: 1024px) {
        display: block;
        top: 110px;
        height: max-content;
        padding: 2rem 2rem 0 0;

        /* .main-heading {
            display: none;
        } */
    }
`

export const ContainerHeading = styled.h4<{
    fontSize?: string
    marginBottom?: string
}>`
    margin: 0.25rem;
    font-size: ${(props) => (props.fontSize ? props.fontSize : '1.25rem')};
    margin-bottom: ${(props) =>
        props.marginBottom ? props.marginBottom : '2.25rem'};
    font-weight: 500;
`

export const BrandCategories = styled.div``

export const Brand = styled.button`
    display: block;
    cursor: pointer;
    padding: 0rem 1rem 0.875rem 0rem;
    margin: 0.25rem;
    border-radius: 25px;
    color: #101010;
    border-radius: 6px;

    &:hover {
        color: #a3a3a3;
    }
`

export const Filters = styled.div``

export const PriceFilter = styled.div`
    margin: 0.5rem 0;
    display: inline-block;
    width: 100%;
`
export const SizeFilter = styled.div`
    margin: 0.5rem 0;
    display: inline-block;
    width: 100%;
`
export const SizeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const Size = styled.button`
    height: 36px;
    text-align: center;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin: 0 0.75rem 0.75rem 0;
    flex: 1 0 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SizeDesc = styled.span`
    padding: 0px 0.875rem;
    white-space: nowrap;
    display: block;
`

export const SideBarFooter = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    padding: 0 1rem;
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #d4d4d4;

    @media (min-width: 1024px) {
        display: none;
    }
`

export const SideBarFooterButton = styled.div`
    margin: 1rem 0;
    padding: 0.875rem 1.5rem;
    flex-basis: 45%;
    border: 1px solid black;
    text-align: center;
    border-radius: 50px;
`

export const SideBarFooterApplyBtn = styled(SideBarFooterButton)`
    background: #171717;
    color: #fff;
`

export const SortByToggler = styled.div`
    flex-basis: 50%;
`

export const SortByButton = styled(ToggleButton)`
    margin-left: auto;
`

export const SortByHeading = styled.span`
    padding-right: 0.5rem;
    color: #737373;
`
export const CurrentSortByFilter = styled.span`
    padding-right: 0.25rem;
`
export const SortByOptions = styled.div``

export const ResultsContent = styled.div`
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 0.25fr 1fr;
    }
`

export const ResultTiles = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
        border-left: 1px solid #dfdfdf;
    }
`

const ProductImageStyles = css`
    min-width: 150px;
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 1/1;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        min-width: 250px;
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        min-width: 300px;
    }
`

export const ProductImg = styled(ImageStyles)`
    ${ProductImageStyles}
    transition: 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`

export const LifeStyleImg = styled(ImageStyles)`
    ${ProductImageStyles}

    position: absolute;
    top: 0px;
    left: 0;
    opacity: 0;
    transition: 0.2s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`

export const ProductCard = styled.a<{ inStock?: boolean }>`
    position: relative;
    display: block;
    padding: 1.5rem 1rem;
    border-right: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    pointer-events: all;

    &:hover ${ProductImg} {
        opacity: 0;
    }

    &:hover ${LifeStyleImg} {
        opacity: 1;
    }

    &::after {
        content: 'Out of Stock';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: 100%;
        color: ${(props) => (props.inStock ? 'green' : '#dc2626')};
        background: rgba(255, 255, 255, 0.4);
        font-size: 1.5rem;
        display: ${(props) => (props.inStock ? 'none' : 'flex')};
        justify-content: center;
        align-items: center;
        font-weight: 500;

        @media (min-width: 728px) {
            font-size: 1.75rem;
        }
    }

    @media (min-width: 768px) {
        padding: 2.5rem 2rem;

        ${ResultTiles} &:nth-child(3n) {
            border-right: 1px solid transparent;
        }
    }
`

export const TileHero = styled.div`
    position: relative;
`

export const HighlightText = styled.div`
    font-size: 0.875rem;
    margin: 1.25rem 0 0.5rem;
    color: #e85d00;
    text-transform: uppercase;
`

export const TileInfo = styled.div``

export const ProductName = styled.h3`
    font-weight: 500;
    margin-bottom: 1rem;
    line-height: 135%;
    text-transform: capitalize;
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`
export const ProductLink = styled.a``
export const CurrentPrice = styled.div`
    font-size: 1.125rem;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`
export const OriginalPriceWrapper = styled.div`
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #525252;
`
export const OriginalPrice = styled.span`
    text-decoration: line-through;
    font: inherit;
`
