import {
    DesktopNavLinks,
    BlogImg,
    ExpandedBlog,
    ExpandedLinks,
    ExpandedSection,
    ExpandedSectionBlogs,
    NavLink,
    NavLinkExpanded,
    NavLinkExpandedWrapper,
    Background,
} from './desktop-nav.style'
import { HyperLink } from '@/components/header'
import { Heading3, Heading4 } from '@/components/typography/heading'
import blogJson from '../../../cummulative.json'

interface Props {
    NavLinksData: any
}

export const DesktopNav: React.FC<Props> = ({ NavLinksData }) => {
    return (
        <DesktopNavLinks>
            {NavLinksData.map((link) => (
                <NavLink key={link.name}>
                    <HyperLink key={link.href} href={link.href}>
                        {link.name}
                    </HyperLink>

                    {link.subLinks && (
                        <>
                            <Background />
                            <NavLinkExpanded>
                                <NavLinkExpandedWrapper>
                                    {link.subLinks.map((sublink) => (
                                        <ExpandedSection
                                            key={sublink.sectionHeading}
                                        >
                                            <Heading3>
                                                {sublink.sectionHeading}
                                            </Heading3>

                                            <ExpandedLinks>
                                                {sublink.links.map((item) => (
                                                    <HyperLink
                                                        key={item.name}
                                                        href={item.href}
                                                    >
                                                        {item.name}
                                                    </HyperLink>
                                                ))}
                                            </ExpandedLinks>
                                        </ExpandedSection>
                                    ))}

                                    <ExpandedSectionBlogs>
                                        <ExpandedBlog>
                                            <HyperLink
                                                href={
                                                    '/blog/' +
                                                    blogJson[0]['blog_id']
                                                }
                                            >
                                                <BlogImg
                                                    src={
                                                        blogJson[0]['image_url']
                                                    }
                                                    alt="The story behind Sellsage"
                                                />
                                                <Heading4>
                                                    {blogJson[0]['title']}
                                                </Heading4>
                                                <span>Read more</span>
                                            </HyperLink>
                                        </ExpandedBlog>

                                        <ExpandedBlog>
                                            <HyperLink
                                                href={
                                                    '/blog/' +
                                                    blogJson[6]['blog_id']
                                                }
                                            >
                                                <BlogImg
                                                    src={
                                                        blogJson[6][
                                                            'image_url'
                                                        ]
                                                    }
                                                    alt="The story behind Sellsage"
                                                />
                                                <Heading4>
                                                    {blogJson[6]['title']}
                                                </Heading4>
                                                <span>Read more</span>
                                            </HyperLink>
                                        </ExpandedBlog>
                                    </ExpandedSectionBlogs>
                                </NavLinkExpandedWrapper>
                            </NavLinkExpanded>
                        </>
                    )}
                </NavLink>
            ))}
        </DesktopNavLinks>
    )
}
