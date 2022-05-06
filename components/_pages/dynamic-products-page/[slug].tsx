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
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Header } from '@/components/header'
import Footer from '@/components/footer'

export const DynamicPage = ({ products, filter }) => {
    const router = useRouter()
    const allitems = products['body']

    const ids = [
        'Bowls',
        'Plates',
        'Tray',
        'Cutlery',
        'Gloves',
        'Container',
        'Bundles',
    ]
    const sizes = ["3'", "4'", "5'", "6'", "7'", "10'"]
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
                    (x) => x['category']['L'][1]['S'] === name
                )
                for (var i = 0; i < 7; i++) {
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
                for (var i = 0; i < 6; i++) {
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
                        (x) => x['category']['L'][1]['S'] === name
                    )
                    filtercount.current[1] = '0'
                    filterstate.current = filterrecords
                    setItems((items) => filterrecords)
                } else {
                    for (var i = 0; i < 6; i++) {
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
                            x['category']['L'][1]['S'] === name
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
                    for (var i = 0; i < 7; i++) {
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
                            x['category']['L'][1]['S'] === name
                    )
                    filtercount.current[0] = name
                    filterstate.current = filterrecords
                    setItems((items) => filterrecords)
                }
            }
        }
    }
    useEffect(() => {
        if (filter !== 'none') {
            filterfunction(
                filter.charAt(0).toUpperCase() + filter.slice(1),
                '0',
                'brand'
            )
        } else {
        }
    }, [])

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
                <meta
                    name="title"
                    content="Shop Compostable Plates, Utensils, Bowls, Trays & Gloves"
                ></meta>
                <meta
                    name="description"
                    content="Shop Compostable, Biodegradable, Sustainable, 100% Plant-Based Dinnerware Made from Palm Leaf + Eco Friendly Gloves – Disposable & Plastic-Free Products"
                ></meta>
                <title>
                    Shop Compostable Plates, Utensils, Bowls, Trays & Gloves
                </title>
            </Head>

            <Header />

            <Main>
                <BillboardRow>
                    <Container containerSize={1440}>
                        <Heading>Shop</Heading>
                        <Desc>
                            <b>Eco-friendly</b> & <b>Plastic-free</b> products
                            for your everyday life
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
                                        id="Bowls"
                                        onClick={() =>
                                            filterfunction(
                                                'Bowls',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Bowls
                                    </Brand>
                                    <Brand
                                        id="Plates"
                                        onClick={() =>
                                            filterfunction(
                                                'Plates',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Plates
                                    </Brand>
                                    <Brand
                                        id="Tray"
                                        onClick={() =>
                                            filterfunction(
                                                'Tray',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Tray
                                    </Brand>
                                    <Brand
                                        id="Cutlery"
                                        onClick={() =>
                                            filterfunction(
                                                'Cutlery',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Cutlery
                                    </Brand>
                                    <Brand
                                        id="Gloves"
                                        onClick={() =>
                                            filterfunction(
                                                'Gloves',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Gloves
                                    </Brand>
                                    <Brand
                                        id="Container"
                                        onClick={() =>
                                            filterfunction(
                                                'Container',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Container
                                    </Brand>
                                    <Brand
                                        id="Bundles"
                                        onClick={() =>
                                            filterfunction(
                                                'Bundles',
                                                filtercount.current[1],
                                                'brand'
                                            )
                                        }
                                    >
                                        Bundles
                                    </Brand>
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
                                                Mother&#39;s Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          43 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Mother&#39;s Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          24 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Mother&#39;s Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          7 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Mother&#39;s Day Deal
                                            </NewLaunch>
                                        ) : Number(e['product_id']['N']) ===
                                          38 ? (
                                            <NewLaunch top="15px" left="15px">
                                                Mother&#39;s Day Deal
                                            </NewLaunch>
                                        ) : (
                                            Number(e['product_id']['N']) ===
                                                45 && (
                                                <NewLaunch
                                                    top="15px"
                                                    left="15px"
                                                >
                                                    Mother&#39;s Day Deal
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
