import { Heading3 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { CommonLegalTemplate } from './common-template'

const CookiePolicy = () => {
    return (
        <CommonLegalTemplate
            pageHeading="Cookie Policy"
            pageUpdatedOn="26 May, 2020"
        >
            <Paragraph>
                This cookie policy (“Policy”) describes what cookies are and how
                SELLSAGE LLC (“SELLSAGE LLC”, “we”, “us” or “our”) uses them on
                the sellsage.com website and any of its products or services
                (collectively, “Website” or “Services”).
            </Paragraph>
            <Paragraph>
                You should read this Policy so you can understand what type of
                cookies we use, the information we collect using cookies and how
                that information is used. It also describes the choices
                available to you regarding accepting or declining the use of
                cookies. For further information on how we use, store and keep
                your personal data secure, see our Privacy Policy.
            </Paragraph>

            <Heading3>What are cookies? </Heading3>
            <Paragraph>
                Cookies are small pieces of data stored in text files that are
                saved on your computer or other devices when websites are loaded
                in a browser. They are widely used to remember you and your
                preferences, either for a single visit (through a “session
                cookie”) or for multiple repeat visits (using a “persistent
                cookie”).
            </Paragraph>
            <Paragraph>
                Session cookies are temporary cookies that are used during the
                course of your visit to the Website, and they expire when you
                close the web browser.
            </Paragraph>
            <Paragraph>
                Persistent cookies are used to remember your preferences within
                our Website and remain on your desktop or mobile device even
                after you close your browser or restart your computer. They
                ensure a consistent and efficient experience for you while
                visiting our Website or using our Services.
            </Paragraph>
            <Paragraph>
                Cookies may be set by the Website (“first-party cookies”), or by
                third parties, such as those who serve content or provide
                advertising or analytics services on the website (“third party
                cookies”). These third parties can recognize you when you visit
                our website and also when you visit certain other websites.
            </Paragraph>

            <Heading3>What type of cookies do we use? </Heading3>
            <ul>
                <li>
                    Necessary cookies
                    <Paragraph margin="0.75rem 0 0 1.75rem">
                        Necessary cookies allow us to offer you the best
                        possible experience when accessing and navigating
                        through our Website and using its features. For example,
                        these cookies let us recognize that you have created an
                        account and have logged into that account to access the
                        content.
                    </Paragraph>
                </li>

                <li>
                    Functionality cookies
                    <Paragraph margin="0.75rem 0 0 1.75rem">
                        Functionality cookies let us operate the Website and our
                        Services in accordance with the choices you make. For
                        example, we will recognize your username and remember
                        how you customized the Website and Services during
                        future visits.
                    </Paragraph>
                </li>

                <li>
                    Analytical cookies
                    <Paragraph margin="0.75rem 0 0 1.75rem">
                        These cookies enable us and third-party services to
                        collect aggregated data for statistical purposes on how
                        our visitors use the Website. These cookies do not
                        contain personal information such as names and email
                        addresses and are used to help us improve your user
                        experience of the Website.
                    </Paragraph>
                </li>

                <li>
                    Social media cookies
                    <Paragraph margin="0.75rem 0 0 1.75rem">
                        Third-party cookies from social media sites (such as
                        Facebook, Twitter, etc) let us track social network
                        users when they visit our Website, use our Services or
                        share content, by using a tagging mechanism provided by
                        those social networks.
                    </Paragraph>
                    <Paragraph margin="0.75rem 0 0 1.75rem">
                        These cookies are also used for event tracking and
                        remarketing purposes. Any data collected with these tags
                        will be used in accordance with our and social networks’
                        privacy policies. We will not collect or share any
                        personally identifiable information from the user.
                    </Paragraph>
                </li>
            </ul>

            <Heading3>Do we use web beacons or tracking pixels? </Heading3>
            <Paragraph>
                Our emails may contain a “web beacon” (or “tracking pixel”) to
                tell us whether our emails are opened and verify any clicks
                through to links or advertisements within the email.
            </Paragraph>
            <Paragraph>
                We may use this information for purposes including determining
                which of our emails are more interesting to users and to query
                whether users who do not open our emails wish to continue
                receiving them.
            </Paragraph>
            <Paragraph>
                The pixel will be deleted when you delete the email. If you do
                not wish the pixel to be downloaded to your device, you should
                read the email in plain text view or with images disabled.
            </Paragraph>

            <Heading3>What are your cookie options? </Heading3>
            <Paragraph>
                If you don’t like the idea of cookies or certain types of
                cookies, you can change your browser’s settings to delete
                cookies that have already been set and to not accept new
                cookies. To learn more about how to do this or to learn more
                about cookies, visit internetcookies.org
            </Paragraph>

            <Paragraph>
                Please note, however, that if you delete cookies or do not
                accept them, you might not be able to use all of the features
                our Website and Services offer.
            </Paragraph>

            <Heading3>Changes and amendments </Heading3>
            <Paragraph>
                We reserve the right to modify this Policy relating to the
                Website or Services at any time, effective upon posting of an
                updated version of this Policy on the Website. When we do we
                will revise the updated date at the bottom of this page.
                Continued use of the Website after any such changes shall
                constitute your consent to such changes.
            </Paragraph>

            <Heading3>Acceptance of this policy </Heading3>
            <Paragraph>Acceptance of this policy </Paragraph>

            <Heading3>Contacting us </Heading3>
            <Paragraph>
                If you would like to contact us to understand more about this
                Policy or wish to contact us concerning any matter relating to
                our use of cookies, you may send an email to
                connect@sellsage.com or write a letter to 41150 Van Born Road,
                Canton, MI, 48188, USA
            </Paragraph>
        </CommonLegalTemplate>
    )
}

export default CookiePolicy
