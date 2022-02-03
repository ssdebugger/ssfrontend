import { Typography } from '@/components/_pages/product/index.style'
import { GridContainer, GridItem } from '../homepage/style'
import { LandingLayout } from '@/components/layout/landing'
import Footer from '@/components/footer'
import { FeaturedHolder } from './style'
import { HyperLink } from '@/components/cta/link'
import blogJson from '../../../cummulative.json'
import Head from 'next/head'

const Blog = () => {
    function formatDate(date) {
        var year = date.getFullYear()

        var month = (1 + date.getMonth()).toString()
        month = month.length > 1 ? month : '0' + month

        var day = date.getDate().toString()
        day = day.length > 1 ? day : '0' + day

        return month + '-' + day + '-' + year
    }

    return (
        <>
        <Head>
                <title>Blog - Sellsage</title>
            </Head>
            <LandingLayout>
                <GridContainer>
                    <GridItem sm={100} md={50} lg={50}>
                        <Typography
                            marginLeft="0rem"
                            fontWeight="700"
                            fontSize="1.5rem"
                        >
                            Latest from us
                        </Typography>

                        <HyperLink
                            varient="tertiary"
                            href={'/blog/' + blogJson[0]['blog_id']}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    right: '0',
                                    marginTop: '1rem',
                                }}
                            >
                                <img
                                    style={{ width: '100%', maxHeight: '400px',objectFit:'cover' }}
                                    src={blogJson[0]['image_url']}
                                    alt="blogpostimg"
                                />
                                <div
                                    style={{
                                        position: 'absolute',
                                        left: '1px',
                                        bottom: '20px',
                                    }}
                                >
                                    {/* <Typography
                                        color="#fff"
                                        fontWeight="400"
                                        fontSize="12px"
                                    >
                                        Post category
                                    </Typography> */}
                                    <Typography
                                        color="#fff"
                                        marginTop="0.2rem"
                                        fontWeight="500"
                                        fontSize="1.25rem"
                                    >
                                        {blogJson[0]['title']}
                                    </Typography>
                                    <Typography
                                        color="#fff"
                                        fontSize="12px"
                                        fontWeight="500"
                                        marginTop="0.2rem"
                                    >
                                        {formatDate(
                                            new Date(
                                                blogJson[0]['published_date']
                                            )
                                        )}
                                    </Typography>
                                </div>
                            </div>
                        </HyperLink>
                    </GridItem>

                    <GridItem sm={100} md={50} lg={50}>
                        {blogJson.slice(8, 13).map((item) => (
                            <HyperLink
                                key={item.blog_id}
                                varient="tertiary"
                                href={'/blog/' + item['blog_id']}
                            >
                                <div style={{ marginTop: '2rem' }}>
                                    {/* <Typography
                                  fontWeight="400"
                                  fontSize="16px"
                                  color="#628272"
                              >
                                  Post category
                              </Typography> */}
                                    <Typography
                                        marginTop="0.2rem"
                                        fontWeight="400"
                                        fontSize="1rem"
                                    >
                                        {item['title']}
                                    </Typography>
                                    <Typography
                                        fontSize="12px"
                                        fontWeight="500"
                                        color="#9CA18D"
                                        marginTop="0.2rem"
                                    >
                                        {formatDate(
                                            new Date(item['published_date'])
                                        )}
                                    </Typography>
                                </div>
                            </HyperLink>
                        ))}
                    </GridItem>
                    {blogJson.slice(2, 6).map((item) => (
                        <GridItem key={item.blog_id} sm={50} md={25} lg={25}>
                            <HyperLink
                                varient="tertiary"
                                href={'/blog/' + item['blog_id']}
                            >
                                <div style={{ marginTop: '1rem' }}>
                                    <img
                                        style={{
                                            width: '300px',
                                            height: '250px',
                                        }}
                                        src={item['image_url']}
                                        alt="blogpostimg"
                                    />
                                    <div>
                                        {/* <Typography
                                   marginLeft="0rem"
                                   fontWeight="400"
                                   fontSize="16px"
                                   color="#628272"
                               >
                                   Post category
                               </Typography> */}
                                        <Typography
                                            marginLeft="0rem"
                                            marginTop="0.2rem"
                                            fontWeight="400"
                                            fontSize="1rem"
                                        >
                                            {item['title']}
                                        </Typography>
                                        <Typography
                                            marginLeft="0rem"
                                            fontSize="12px"
                                            fontWeight="500"
                                            color="#9CA18D"
                                            marginTop="0.2rem"
                                        >
                                            {formatDate(
                                                new Date(item['published_date'])
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </HyperLink>
                        </GridItem>
                    ))}
                </GridContainer>
                <FeaturedHolder>
                    <Typography
                        marginLeft="2rem"
                        color="#fff"
                        fontWeight="700"
                        fontSize="1.5rem"
                    >
                        Featured Posts
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        {blogJson.slice(14, 17).map((item) => (
                            <HyperLink
                                key={item.blog_id}
                                varient="tertiary"
                                href={'/blog/' + item['blog_id']}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        right: '0',
                                        marginTop: '1.2rem',
                                        marginLeft: '2rem',
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '40rem',
                                            height: '350px',
                                        }}
                                        src={item['image_url']}
                                        alt="blogpostimg"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            left: '1px',
                                            bottom: '20px',
                                        }}
                                    >
                                        {/* <Typography
                                    color="#fff"
                                    fontWeight="400"
                                    fontSize="12px"
                                >
                                    Post category
                                </Typography> */}
                                        <Typography
                                            color="#fff"
                                            marginTop="0.2rem"
                                            fontWeight="500"
                                            fontSize="1.25rem"
                                        >
                                            {item['title']}
                                        </Typography>
                                        <Typography
                                            color="#fff"
                                            fontSize="12px"
                                            fontWeight="500"
                                            marginTop="0.2rem"
                                        >
                                            {formatDate(
                                                new Date(item['published_date'])
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </HyperLink>
                        ))}
                    </div>
                </FeaturedHolder>

                <GridContainer>
                    <GridItem sm={100} md={100} lg={100}>
                        <Typography
                            marginLeft="0rem"
                            fontWeight="700"
                            fontSize="1.5rem"
                        >
                            More from us
                        </Typography>
                    </GridItem>
                    <GridItem sm={100} md={50} lg={50}>
                        {blogJson.slice(20, 25).map((item) => (
                            <HyperLink
                                key={item.blog_id}
                                varient="tertiary"
                                href={'/blog/' + item['blog_id']}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        marginTop: '1rem',
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '120px',
                                            height: '90px',
                                        }}
                                        src={item['image_url']}
                                        alt="blogpostimg"
                                    />
                                    <div>
                                        {/* <Typography
                                     marginTop="0rem"
                                     fontWeight="400"
                                     fontSize="16px"
                                     color="#628272"
                                 >
                                     Post category
                                 </Typography> */}
                                        <Typography
                                            marginTop="0.2rem"
                                            fontWeight="400"
                                            fontSize="1rem"
                                        >
                                            {item['title']}
                                        </Typography>
                                        <Typography
                                            fontSize="12px"
                                            fontWeight="500"
                                            color="#9CA18D"
                                            marginTop="0.2rem"
                                        >
                                            {formatDate(
                                                new Date(item['published_date'])
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </HyperLink>
                        ))}
                    </GridItem>
                    <GridItem sm={100} md={50} lg={50}>
                        {blogJson.slice(15, 20).map((item) => (
                            <HyperLink
                                key={item.blog_id}
                                varient="tertiary"
                                href={'/blog/' + item['blog_id']}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        marginTop: '1rem',
                                    }}
                                >
                                    <img
                                        style={{
                                            width: '120px',
                                            height: '90px',
                                        }}
                                        src={item['image_url']}
                                        alt="blogpostimg"
                                    />
                                    <div>
                                        {/* <Typography
                                     marginTop="0rem"
                                     fontWeight="400"
                                     fontSize="16px"
                                     color="#628272"
                                 >
                                     Post category
                                 </Typography> */}
                                        <Typography
                                            marginTop="0.2rem"
                                            fontWeight="400"
                                            fontSize="1rem"
                                        >
                                            {item['title']}
                                        </Typography>
                                        <Typography
                                            fontSize="12px"
                                            fontWeight="500"
                                            color="#9CA18D"
                                            marginTop="0.2rem"
                                        >
                                            {formatDate(
                                                new Date(item['published_date'])
                                            )}
                                        </Typography>
                                    </div>
                                </div>
                            </HyperLink>
                        ))}
                    </GridItem>
                </GridContainer>

                <style jsx>
                    {`
                        .mainimg {
                            background: linear-gradient(white, green);
                        }
                    `}
                </style>
            </LandingLayout>
            <Footer />
        </>
    )
}
export default Blog
