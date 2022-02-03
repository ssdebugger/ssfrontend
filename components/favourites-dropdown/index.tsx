import { Heading3, Heading4 } from '../typography/heading'
import { Paragraph } from '../typography/paragraph'
import { X } from 'react-feather'
import {
    DropdownBackground,
    DropdownContainer,
    DropdownContent,
    DropdownItem,
    DropdownItems,
    DropdownMain,
    DropdownTop,
    ProductDetails,
    ProductTag,
} from './index.style'
import { Button } from '@/components/buttons'

export const FavouriteDropdown = () => {
    return (
        <DropdownContainer>
            <DropdownBackground />

            <DropdownMain>
                <DropdownContent>
                    <DropdownTop>
                        <Heading3 margin="0">Your favourites</Heading3>

                        <button>
                            <X strokeWidth={1.5} />
                        </button>
                    </DropdownTop>

                    <DropdownItems>
                        <DropdownItem>
                            <img src="/dinner-bundle.jpg" />

                            <ProductDetails>
                                <Heading4>
                                    Natural Biodegradable Palm Leaf Bowl - Pack
                                    of 20
                                </Heading4>

                                <ProductTag>Tableware</ProductTag>

                                <Paragraph>$7.95</Paragraph>
                            </ProductDetails>
                        </DropdownItem>

                        <DropdownItem>
                            <img src="/plate.jpg" />

                            <ProductDetails>
                                <Heading4>
                                    Natural Biodegradable Palm Leaf Bowl - Pack
                                    of 20
                                </Heading4>

                                <ProductTag>Tableware</ProductTag>

                                <Paragraph>$7.95</Paragraph>
                            </ProductDetails>
                        </DropdownItem>
                    </DropdownItems>

                    <Button varient="primary" fill>
                        View Favourites
                    </Button>
                </DropdownContent>
            </DropdownMain>
        </DropdownContainer>
    )
}
