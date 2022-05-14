import {
    PopupProps,
    ProductType,
} from '@/components/_pages/admin-dashboard/products'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
    CellBody,
    TableWrapper,
    Table,
    Status,
    TableActionBtn,
    TableActionButtons,
    TableBody,
    TableData,
    TableHead,
    TableHeader,
    TableRow,
    TableActionLink,
} from './table.style'

interface Props {
    data: Array<ProductType>
    handlePoupDetails: (popupDetials: PopupProps) => void
}

export const ProductsTable: React.FC<Props> = ({ data, handlePoupDetails }) => {
    const router = useRouter()

    function handleSetDetails(product: ProductType) {
        handlePoupDetails({
            show: true,
            productDetails: {
                id: String(product.product_id.N),
                productName: product.product_name.S,
                imgUrl: product.imageurl,
                salePrice: Number(product.sale_price),
                regularPrice: Number(product.regular_price.N),
                inStock: Number(product.in_stock.N),
                shortDesc: product.short_description.S,
                description: product.description.S,
            },
        })
    }

    function goToProduct(sku: string) {
        router.push(`/${sku}`)
    }

    return (
        <TableWrapper>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead width={84} textCenter>
                            <span>Image</span>
                        </TableHead>

                        <TableHead>
                            <span>Product name</span>
                        </TableHead>

                        <TableHead width={100} textCenter>
                            <span> Quantity</span>
                        </TableHead>

                        <TableHead width={200}>
                            <span>Product SKU</span>
                        </TableHead>

                        <TableHead width={150} textCenter>
                            <span>Product Tags</span>
                        </TableHead>

                        <TableHead width={150} textCenter>
                            <span>Order Status</span>
                        </TableHead>

                        <TableHead width={200} textCenter>
                            <span>Actions</span>
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data.map((product) => (
                        <TableRow key={product.product_id.N}>
                            <TableData width={'84px'}>
                                <div>
                                    <img
                                        src={product.imageurl}
                                        loading="lazy"
                                        alt='eco products'
                                    />
                                </div>
                            </TableData>

                            <TableData>
                                <div className="color_highlight text_md">
                                    {product.short_description.S}
                                </div>
                            </TableData>

                            <TableData textCenter>
                                <div>{product.in_stock.N}</div>
                            </TableData>

                            <TableData>
                                <CellBody>
                                    <div>{product.sku_code.S}</div>
                                </CellBody>
                            </TableData>

                            <TableData textCenter>
                                <CellBody>
                                    <div>tag1, tag2</div>
                                </CellBody>
                            </TableData>

                            <TableData textCenter>
                                <Status
                                    status={
                                        Number(product.in_stock.N) > 25
                                            ? 'inStock'
                                            : Number(product.in_stock.N) === 0
                                            ? 'outOfStock'
                                            : 'lowStock'
                                    }
                                >
                                    {Number(product.in_stock.N) > 25
                                        ? 'In Stock'
                                        : Number(product.in_stock.N) === 0
                                        ? 'Out of Stock'
                                        : 'Low  Stock'}
                                </Status>
                            </TableData>

                            <TableData>
                                <TableActionButtons>
                                    <TableActionBtn
                                        onClick={() =>
                                            handleSetDetails(product)
                                        }
                                    >
                                        Edit details
                                    </TableActionBtn>

                                    <TableActionLink
                                        href={`/${product.sku_code.S}`}
                                        target="_blank"
                                    >
                                        View Product
                                    </TableActionLink>
                                </TableActionButtons>
                            </TableData>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableWrapper>
    )
}
