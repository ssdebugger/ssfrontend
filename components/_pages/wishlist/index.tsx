import { Typography } from '../product/index.style'
import { LandingLayout } from '@/components/layout/landing'
import Footer from '@/components/footer'
import { GridContainer } from '../homepage/style'
import { ProductCard } from '@/components/card/product-card'
import Head from 'next/head'

const Wishlist = (props) => {
    const wishlist = props.wishlistresponse['body']
    return (
        <>
            <Head>
                <title>Wishlist - Sellsage</title>
                <meta name='robots' content='noindex'></meta>
            </Head>
            <LandingLayout>
                <Typography
                    marginLeft="2rem"
                    marginTop="1rem"
                    fontSize="1.5rem"
                    fontWeight="500"
                >
                    Your Favourites
                </Typography>
                <GridContainer>
                    {wishlist.map((x, i) => (
                        <ProductCard
                            key={x['product_id']['N']}
                            id={x['product_id']['N']}
                            sku={x['sku_code']['S']}
                            name={x['product_name']['S']}
                            discount={(
                                x['regular_price']['N'] - x['sale_price']['N']
                            ).toFixed(2)}
                            imageurl={x['image0']}
                            lifeimageurl={x['image0']}
                            pricedecimal={String(
                                (
                                    x['sale_price']['N'] -
                                    Math.floor(x['sale_price']['N'])
                                ).toFixed(2)
                            ).slice(2)}
                            priceint={Math.floor(x['sale_price']['N'])}
                            description={x['description']['S']}
                            wishlist={true}
                        />
                    ))}
                </GridContainer>
            </LandingLayout>
            <Footer />
        </>
    )
}

export default Wishlist
