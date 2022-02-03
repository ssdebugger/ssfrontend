import { Heading3 } from '@/components/typography/heading'
import { Paragraph } from '@/components/typography/paragraph'
import { CommonLegalTemplate } from './common-template'

export const ShippingReturn = () => {
    return (
        <CommonLegalTemplate
            pageHeading="Shipping and Return Policy"
            pageUpdatedOn="26 May, 2020"
        >
            <Heading3>Shipping</Heading3>
            <Paragraph>
                Free shipping is available on orders above $35. For orders
                values below $35 you will be charged a flat $5.
            </Paragraph>

            <Heading3>Returns</Heading3>
            <Paragraph>
                For return request please fill in the form below. Be sure to go
                through our refund policy below before you submit the form. We
                will acknowledge the return request and check if return is
                applicable for the requested product. If the product is eligible
                for return we will send you a shipping label via email which you
                can print and stick on the box before it is picked up from your
                address.
            </Paragraph>

            <Paragraph>
                Here are a few simple steps to help you prepare your parcels for
                a seamless collection:
            </Paragraph>
            <ul>
                <li>Ensure that the package is well.</li>
                <li>
                    Print a clear and smudge-free barcode on your label (these
                    have to be printed, and should not be hand-written!). Please
                    read labeling guidelines for more information.
                </li>
                <li>
                    Have your parcels ready for drop-off or your pickup driver.
                    They will appreciate your dutifulness.
                </li>
            </ul>

            <Heading3>Refund policy</Heading3>
            <Paragraph>
                Our policy is valid for a period of 30 calendar days from the
                date of the purchase. If you receive your order and are not
                satisfied for any reason you can return the product for a
                refund. If the period of 30 days has lapsed since the purchase,
                we can’t, unfortunately, offer you a refund.
            </Paragraph>

            <Heading3>Refund requirements</Heading3>
            <Paragraph>
                The following criteria must be met to qualify for a refund:
            </Paragraph>

            <ul>
                <li>Product is defective</li>
                <li>Product is not as described</li>
                <li>Product must be unused</li>
                <li>Product must not be damaged</li>
            </ul>
            <Paragraph>
                In order to ensure the above criteria has been met, all returns
                will be inspected. If the product does not meet the listed
                criteria, we reserve the right not to issue a refund.
            </Paragraph>

            <Heading3>Sale and clearance items</Heading3>
            <Paragraph>
                Only regular priced items may be returned, unfortunately sale or
                clearance items cannot be returned.
            </Paragraph>

            <Heading3>Contacting us </Heading3>
            <Paragraph>
                If you would like to contact us to understand more about this
                Policy or wish to contact us concerning any matter relating to
                it, you may send an email to connect@sellsage.com or write a
                letter to 41150 Van Born Road, Canton, MI, 48188, USA
            </Paragraph>
        </CommonLegalTemplate>
    )
}
