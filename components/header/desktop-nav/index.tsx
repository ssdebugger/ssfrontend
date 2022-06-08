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
                                                    'not-your-trash-still-your-responsibility-here-s-why'
                                                }
                                            >
                                                <BlogImg
                                                    src={
                                                        blogJson[0]['image_url']
                                                    }
                                                    alt="The story behind Sellsage"
                                                    loading='lazy'
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
                                                    'sustainable-living-where-to-start-and-how-to-stay-consistent'
                                                }
                                            >
                                                <BlogImg
                                                    src='/main.jpg'
                                                    alt="The story behind Sellsage"
                                                    loading='lazy'
                                                />
                                                <Heading4>
                                                    {blogJson[2]['title']}
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
