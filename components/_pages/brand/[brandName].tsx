import Link from 'next/link'
import { ChevronDown } from 'react-feather'
import { FilterIcon } from '@/components/svg/filter'

import { LandingLayout } from 'components/layout/landing'
import {
    Container,
    ResultsNavbar,
    FilterColumn,
    SortColumn,
    ToggleButton,
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
    TogglerHeading,
    SortByHeading,
    CurrentSortByFilter,
    Brand,
    ResultsContent,
    SortByButton,
    HighlightText,
    OriginalPriceWrapper,
    NavbarContainer,
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
} from '../dynamic-products-page/style'
import { Checkbox } from '@/components/checkbox'
import {
    Billboard,
    BillboardImg,
    BillboardHeading,
    BillboardContent,
    BillboardDesc,
    BillboardCta,
    BrandPageContainer,
    FeaturesContainer,
    Feature,
    FeatureIcon,
    FeatureHeading,
    FeatureContent,
    FeatureDesc,
    FeatureBlock,
    BlockHeading,
    BlockDesc,
    AboutBrandContainer,
    AboutBrandContent,
    AboutBrandHeading,
    AboutBrandDesc,
    BrandImage,
} from './style'
import { Header } from '@/components/header'
import { HyperLink } from '@/components/cta/link'
import { MainHeading, SubHeading } from '@/components/typography/heading'

import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { Paragraph } from '@/components/typography/paragraph'

export const DynamicBrandPage = () => {
    const themeContext = useContext(ThemeContext)

    const items = [1, 2, 3, 4, 5, 6, 7, 8]

    const FeaturesData = [
        {
            heading: 'Sturdy Design',
            desc: 'Sturdy and elegant design, every product is unique.',
            url: '/sturdy.png',
        },
        {
            heading: '100% Biodegradable',
            desc: 'Produced from natural raw material.',
            url: '/decomposable.png',
        },
        {
            heading: 'Easily Compostable',
            desc: 'Turns to soil in less than 45 days, no microplastics left behind.',
            url: '/compostable.png',
        },
    ]

    return (
        <LandingLayout>
            <BrandPageContainer>
                <Billboard>
                    <BillboardContent>
                        <MainHeading>
                            Brand tagline to depict the vision behind it.
                        </MainHeading>

                        <Paragraph fontSize="medium" maxWidth="500px">
                            Small introduction about the brand in about 20
                            words. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit.
                        </Paragraph>

                        <HyperLink varient="primary" href="#products">
                            Explore Products
                        </HyperLink>
                    </BillboardContent>

                    <BillboardImg src="/plate.jpg" />
                </Billboard>

                <AboutBrandContainer>
                    <AboutBrandContent>
                        <SubHeading color={themeContext.primaryTint1}>
                            About Plantry
                        </SubHeading>

                        <Paragraph fontSize="medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Voluptate inventore deleniti commodi, velit
                            alias impedit, placeat, odio pariatur obcaecati
                            perferendis similique! Mollitia numquam possimus,
                            nisi alias aut ducimus temporibus nemo.
                        </Paragraph>

                        <Paragraph fontSize="medium">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Voluptate inventore deleniti commodi, velit
                            alias impedit, placeat, odio pariatur obcaecati
                            perferendis similique! Mollitia numquam possimus,
                            nisi alias aut ducimus temporibus nemo.
                        </Paragraph>
                    </AboutBrandContent>

                    <BrandImage src="https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-na-prod/f/AmazonStores/ATVPDKIKX0DER/17401536436f65a40c83d4c44b286f78.w4254.h4254._CR0%2C0%2C4254%2C4254_.jpg" />
                </AboutBrandContainer>

                <FeatureBlock>
                    <SubHeading
                        textAlign="center"
                        margin="0 0 0.875rem"
                        color={themeContext.primaryTint1}
                    >
                        Core Features
                    </SubHeading>

                    <Paragraph
                        fontSize="medium"
                        textAlign="center"
                        maxWidth="400px"
                        margin="0 auto 2.5rem"
                    >
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aut, molestias?
                    </Paragraph>

                    <FeaturesContainer>
                        {FeaturesData.map((item) => (
                            <Feature key={item.heading}>
                                <FeatureIcon>
                                    <img src={item.url} />
                                </FeatureIcon>
                                <FeatureContent>
                                    <FeatureHeading>
                                        {item.heading}
                                    </FeatureHeading>

                                    <FeatureDesc>{item.desc}</FeatureDesc>
                                </FeatureContent>
                            </Feature>
                        ))}
                    </FeaturesContainer>
                </FeatureBlock>

                <ResultsRow id="products">
                    <NavbarContainer>
                        <Container containerSize={1440}>
                            <ResultsNavbar>
                                <FilterColumn>
                                    <ToggleButton>
                                        <FilterIcon
                                            width="16"
                                            height="16"
                                            strokeWidth="1.3"
                                        />
                                        <TogglerHeading>Filter</TogglerHeading>
                                    </ToggleButton>
                                </FilterColumn>

                                <SortColumn>
                                    <SortByButton>
                                        <SortByHeading>Sort by</SortByHeading>
                                        <CurrentSortByFilter>
                                            Featured
                                        </CurrentSortByFilter>
                                        <ChevronDown
                                            width="16"
                                            height="16"
                                            strokeWidth="1.3"
                                        />
                                    </SortByButton>
                                </SortColumn>
                            </ResultsNavbar>
                        </Container>
                    </NavbarContainer>

                    <Container containerSize={1440}>
                        <ResultsContent>
                            <SidebarContainer>
                                <ContainerHeading className="main-heading">
                                    Filter
                                </ContainerHeading>

                                <BrandCategories>
                                    <Brand>Plantry</Brand>
                                    <Brand>Glove up</Brand>
                                    <Brand>Sasya</Brand>
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
                                            id="price-low-to-high"
                                            checkboxName="Low to high"
                                        />
                                        <Checkbox
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
                                                <SizeDesc>6 inch</SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc>7 inch</SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc>10 inch</SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc>11 inch</SizeDesc>
                                            </Size>

                                            <Size>
                                                <SizeDesc>14 inch</SizeDesc>
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
                                {items.map((item) => (
                                    <Link href="/" passHref key={item}>
                                        <ProductCard>
                                            <TileHero>
                                                <ProductImg src="/round-bowl.jpg" />
                                                <LifeStyleImg src="/round-bowl-life.jpg" />
                                            </TileHero>

                                            <HighlightText>
                                                10% off
                                            </HighlightText>

                                            <TileInfo>
                                                <ProductName>
                                                    Palm leaf round plate
                                                </ProductName>
                                                <OriginalPriceWrapper>
                                                    <OriginalPrice>
                                                        $35
                                                    </OriginalPrice>
                                                </OriginalPriceWrapper>
                                                <CurrentPrice>$28</CurrentPrice>
                                            </TileInfo>
                                        </ProductCard>
                                    </Link>
                                ))}
                            </ResultTiles>
                        </ResultsContent>
                    </Container>
                </ResultsRow>
            </BrandPageContainer>
        </LandingLayout>
    )
}
