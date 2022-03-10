import Head from 'next/head'
import Link from 'next/link'
import {
    Container,
    BillboardRow,
    Heading,
    Main,
    Desc,
    ResultsRow,
    ResultTiles,
    ProductCard,
    TileHero,
    ProductImg,
    LifeStyleImg,
    TileInfo,
    ProductName,
    CurrentPrice,
    OriginalPrice,
    Brand,
    ResultsContent,
    HighlightText,
    OriginalPriceWrapper,
    ContainerHeading,
    BrandCategories,
    SidebarContainer,
    Filters,
    PriceFilter,
    SizeFilter,
    Size,
    SizeDesc,
    SizeContainer,
    SideBarFooter,
    SideBarFooterButton,
    SideBarFooterApplyBtn,
} from './style'
import { NewLaunch } from '@/components/card/product-card/v1'
import { Checkbox } from '@/components/checkbox'
import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

export const DynamicPage = ({ products }) => {
    const router = useRouter()

    const allitems = products['body']
    const ids = ['Plantry', 'Gloveup']
    const sizes = ["6'", "7'", "10'", "11'", "14'"]
    const [items, setItems] = useState(products['body'])
    var filterstate = useRef(allitems)
    var repeatname = useRef('')
    var repeatsize = useRef('')
    var repeatprice = useRef('')
    var filtercount = useRef(['all', '0'])
    var sortcount = useRef('none')
    var prevstate = useRef([])
    const filterfunction = (name, size, filter) => {
        if (size == '0') {
            if (repeatname.current !== name) {
                repeatname.current = name
                let filterrecords = allitems.filter(
                    (x) => x['brand']['S'] === name
                )
                for (var i = 0; i < 2; i++) {
                    let ele = document.getElementById(ids[i])

                    if (ids[i] == name) {
                        ele.style.color = '#D39B75'
                    } else {
                        ele.style.color = '#000'
                    }
                }
                filtercount.current[0] = name
                filterstate.current = filterrecords
                setItems((items) => filterrecords)
            } else {
                repeatname.current = ''
                let ele = document.getElementById(name)
                ele.style.color = '#000'
                filtercount.current[0] = 'all'
                setItems((items) => allitems)
            }
        } else if (name == 'all') {
            if (repeatsize.current !== size) {
                repeatsize.current = size
                let filterrecords = allitems.filter(
                    (x) => x['size'] !== null && x['size']['S'] == size
                )
                for (var i = 0; i < 5; i++) {
                    let ele = document.getElementById(sizes[i])

                    if (sizes[i] == size) {
                        ele.style.color = '#D39B75'
                    } else {
                        ele.style.color = '#000'
                    }
                }
                filtercount.current[1] = size
                filterstate.current = filterrecords
                setItems((items) => filterrecords)
            } else {
                let ele = document.getElementById(size)
                ele.style.color = '#000'
                repeatsize.current = ''
                filtercount.current[1] = '0'
                setItems((items) => allitems)
            }
        } else {
            if (filter === 'size') {
                if (repeatsize.current === size) {
                    let ele = document.getElementById(size)
                    ele.style.color = '#000'
                    repeatsize.current = ''

                    let filterrecords = allitems.filter(
                        (x) => x['brand']['S'] === name
                    )
                    filtercount.current[1] = '0'
                    filterstate.current = filterrecords
                    setItems((items) => filterrecords)
                } else {
                    for (var i = 0; i < 5; i++) {
                        let ele = document.getElementById(sizes[i])

                        if (sizes[i] == size) {
                            ele.style.color = '#D39B75'
                        } else {
                            ele.style.color = '#000'
                        }
                    }

                    let filterrecords = allitems.filter(
                        (x) =>
                            x['size'] !== null &&
                            x['size']['S'] == size &&
                            x['brand']['S'] === name
                    )
                    filtercount.current[1] = size
                    filterstate.current = filterrecords
                    repeatsize.current = size
                    setItems((items) => filterrecords)
                }
            } else {
                if (repeatname.current === name) {
                    repeatname.current = ''
                    let ele = document.getElementById(name)
                    ele.style.color = '#000'

                    let filterrecords = allitems.filter(
                        (x) => x['size'] !== null && x['size']['S'] == size
                    )
                    filtercount.current[0] = 'all'
                    filterstate.current = filterrecords
                    setItems((items) => filterrecords)
                } else {
                    for (var i = 0; i < 2; i++) {
                        let ele = document.getElementById(ids[i])

                        if (ids[i] == name) {
                            ele.style.color = '#D39B75'
                        } else {
                            ele.style.color = '#000'
                        }
                    }
                    repeatname.current = name

                    let filterrecords = allitems.filter(
                        (x) =>
                            x['size'] !== null &&
                            x['size']['S'] == size &&
                            x['brand']['S'] === name
                    )
                    filtercount.current[0] = name
                    filterstate.current = filterrecords
                    setItems((items) => filterrecords)
                }
            }
        }
    }

    const checkedlow = useRef(false)
    const checkedhigh = useRef(false)
    const sortfunction = (key) => {
        if (key === 'low' && sortcount.current === 'none') {
            let sortedarr = []
            checkedlow.current = true
            Object.assign(sortedarr, items)
            sortedarr.sort((a, b) => a['sale_price'] - b['sale_price'])
            prevstate.current = items
            sortcount.current = 'low'
            setItems((items) => sortedarr)
        } else if (key === 'low' && sortcount.current === 'low') {
            sortcount.current = 'none'
            checkedlow.current = false
            setItems((items) => prevstate.current)
        } else if (key === 'low' && sortcount.current === 'high') {
            sortcount.current = 'both'
            checkedlow.current = true
        } else if (key === 'low' && sortcount.current === 'both') {
            let sortedarr = []
            checkedlow.current = false
            Object.assign(sortedarr, items)
            sortedarr.sort((a, b) => b['sale_price'] - a['sale_price'])
            prevstate.current = items
            sortcount.current = 'high'
            setItems((items) => sortedarr)
        } else if (key === 'high' && sortcount.current === 'none') {
            let sortedarr = []
            checkedhigh.current = true
            Object.assign(sortedarr, items)
            sortedarr.sort((a, b) => b['sale_price'] - a['sale_price'])
            prevstate.current = items
            sortcount.current = 'high'
            setItems((items) => sortedarr)
        } else if (key === 'high' && sortcount.current === 'high') {
            sortcount.current = 'none'
            checkedhigh.current = false
            setItems((items) => prevstate.current)
        } else if (key === 'high' && sortcount.current === 'low') {
            sortcount.current = 'both'
            checkedhigh.current = true
        } else if (key === 'high' && sortcount.current === 'both') {
            let sortedarr = []
            checkedhigh.current = false
            Object.assign(sortedarr, items)
            sortedarr.sort((a, b) => a['sale_price'] - b['sale_price'])
            prevstate.current = items
            sortcount.current = 'low'
            setItems((items) => sortedarr)
        }
    }

    return (
        <>
            <Head>
                <title>Shop - Sellsage</title>
            </Head>

            <Header />

            <Main>
                <BillboardRow>
                    <Container containerSize={1440}>
                        <Heading>{router.asPath.replace('/', '')}</Heading>
                        <Desc>
                            Great Savings, Every Day. Shop from our Deals of the
                            day and avail great offers.
                        </Desc>
                    </Container>
                </BillboardRow>

                <ResultsRow>
                    <Container containerSize={1440}>
                        <ResultsContent>
                            <SidebarContainer>
                                <ContainerHeading marginBottom="1.25rem">
                                    Filter
                                </ContainerHeading>

                                <BrandCategories>
                                    <Brand
                                        id="Plantry"
                                        onClick={() =>
                                            filterfunction(
                                                'Plantry',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Plantry
                                    </Brand>
                                    <Brand
                                        id="Gloveup"
                                        onClick={() =>
                                            filterfunction(
                                                'Gloveup',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Glove up
                                    </Brand>
                                    {/* <Brand
                                            id="Sasya"
                                            onClick={() =>
                                                filterfunction(
                                                    'Sasya',
                                                    filtercount.current[1],
                                                    'brand'
                                                )
                                            }
                                        >
                                            Sasya
                                        </Brand> */}
                                </BrandCategories>

                                <Filters>
                                    <PriceFilter>
                                        <ContainerHeading
                                            fontSize="1rem"
                                            marginBottom="0.875rem"
                                        >
                                            Price
                                        </ContainerHeading>

                                        <Checkbox
                                            onChange={() => sortfunction('low')}
                                            checked={checkedlow.current}
                                            id="price-low-to-high"
                                            checkboxName="Low to high"
                                        />
                                        <Checkbox
                                            onChange={() =>
                                                sortfunction('high')
                                            }
                                            checked={checkedhigh.current}
                                            id="price-high-to-low"
                                            checkboxName="High to low"
                                        />
                                    </PriceFilter>
                                    <SizeFilter>
                                        <ContainerHeading
                                            fontSize="1rem"
                                            marginBottom="0.875rem"
                                        >
                                            Size
                                        </ContainerHeading>
                                        <SizeContainer>
                                            <Size>
                                                <SizeDesc
                                                    id="6'"
                                                    onClick={() =>
                                                        filterfunction(
                                                            filtercount
                                                                .current[0],
                                                            "6'",
                                                            'size'
                                                        )
                                                    }
                                                >
                                                    6 inch
                                                </SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc
                                                    id="7'"
                                                    onClick={() =>
                                                        filterfunction(
                                                            filtercount
                                                                .current[0],
                                                            "7'",
                                                            'size'
                                                        )
                                                    }
                                                >
                                                    7 inch
                                                </SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc
                                                    id="10'"
                                                    onClick={() =>
                                                        filterfunction(
                                                            filtercount
                                                                .current[0],
                                                            "10'",
                                                            'size'
                                                        )
                                                    }
                                                >
                                                    10 inch
                                                </SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc
                                                    id="11'"
                                                    onClick={() =>
                                                        filterfunction(
                                                            filtercount
                                                                .current[0],
                                                            "11'",
                                                            'size'
                                                        )
                                                    }
                                                >
                                                    11 inch
                                                </SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc
                                                    id="14'"
                                                    onClick={() =>
                                                        filterfunction(
                                                            filtercount
                                                                .current[0],
                                                            "14'",
                                                            'size'
                                                        )
                                                    }
                                                >
                                                    14 inch
                                                </SizeDesc>
                                            </Size>
                                        </SizeContainer>
                                    </SizeFilter>
                                </Filters>

                                <SideBarFooter>
                                    <SideBarFooterButton>
                                        Cancel
                                    </SideBarFooterButton>

                                    <SideBarFooterApplyBtn>
                                        Apply
                                    </SideBarFooterApplyBtn>
                                </SideBarFooter>
                            </SidebarContainer>

                            <ResultTiles>
                                {items.map((e, item) => (
                                    <ProductCard
                                        href={'/' + e['sku_code']['S']}
                                        key={item}
                                        inStock={e['in_stock']['N'] != 0}
                                    >
                                        {Number(e['product_id']['N']) === 4 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Women's Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          43 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Women's Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          24 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Women's Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          7 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Women's Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          38 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Women's Day Deal
                                            </NewLaunch>
                                        ) : (
                                            Number(e['product_id']['N']) ===
                                                45 && (
                                                <NewLaunch
                                                    top="15px"
                                                    left="15px"
                                                >
                                                    Women's Day Deal
                                                </NewLaunch>
                                            )
                                        )}

                                        <TileHero>
                                            <ProductImg
                                                src={e['imageurl']}
                                                alt="image"
                                            />
                                            <LifeStyleImg
                                                src={e['lifeimageurl']}
                                                loading="lazy"
                                                alt="image"
                                            />
                                        </TileHero>

                                        {e['discount'] != 0 ? (
                                            <HighlightText>
                                                {[
                                                    (
                                                        (e['discount'] * 100) /
                                                        e['regular_price']['N']
                                                    ).toFixed(2),
                                                ]}{' '}
                                                % off
                                            </HighlightText>
                                        ) : null}

                                        <TileInfo>
                                            <ProductName>
                                                {e['product_name']['S'].replace(
                                                    /'/g,
                                                    '"'
                                                )}
                                            </ProductName>

                                            {e['discount'] != 0 ? (
                                                <OriginalPriceWrapper>
                                                    <OriginalPrice>
                                                        $
                                                        {
                                                            e['regular_price'][
                                                                'N'
                                                            ]
                                                        }
                                                    </OriginalPrice>
                                                </OriginalPriceWrapper>
                                            ) : null}
                                            <CurrentPrice>
                                                {' '}
                                                ${e['sale_price']}
                                            </CurrentPrice>
                                        </TileInfo>
                                    </ProductCard>
                                ))}
                            </ResultTiles>
                        </ResultsContent>
                    </Container>
                </ResultsRow>
            </Main>

            <Footer />
        </>
    )
}
