import { ProductContainer, ProductImg, Title, Stock, Price } from './style'

import { GridContainer, GridItem } from '@/components/_pages/homepage/style'

import ProductEdit from './productedit'

const ProductHolder = () => {
    return (
        <ProductContainer>
            <table>
                <tr className="column">
                    <th className="column">Image</th>
                    <th className="column">Title</th>
                    <th className="column">Sku Code</th>
                    <th className="column">Price</th>
                    <th className="column">Availability</th>
                    <th className="column">Category</th>
                    <th className="column">Source</th>
                </tr>
                <tr className="column">
                    <td className="column">
                        <ProductImg src="./static/images/img1.jpg" />
                    </td>
                    <td className="column">
                        <Title> Palm leaf container </Title>
                    </td>
                    <td className="column">PALM-CNTR-0200-0020</td>
                    <td className="column">$ 14.95</td>
                    <td className="column">
                        <Stock stock={true}>In Stock</Stock>
                    </td>
                    <td className="column">Gloves,palm leaf,test name 2</td>
                    <td className="column">Glove Up</td>
                </tr>
            </table>
            <style jsx global>{`
                .column {
                    padding: 0rem 1rem 0.5rem 1rem;
                }
            `}</style>
        </ProductContainer>
    )
}

export default ProductHolder
