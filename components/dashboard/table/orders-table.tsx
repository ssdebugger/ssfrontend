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
} from './table.style'

export const OrdersTable = () => {
    return (
        <TableWrapper>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead width={150}>
                            <span>Order date</span>
                        </TableHead>

                        <TableHead width={200}>
                            <span>Order details</span>
                        </TableHead>

                        <TableHead width={84} textCenter>
                            <span>Image</span>
                        </TableHead>

                        <TableHead>
                            <span>Product name</span>
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
                    <TableRow>
                        <TableData>
                            <CellBody>
                                <div className="highlight">7 days ago</div>
                                <div>3/8/2022</div>
                                <div>10:06 AM PST</div>
                            </CellBody>
                        </TableData>

                        <TableData>
                            <CellBody>
                                <div className="highlight">
                                    113-1866858-5994660
                                </div>
                                <div>
                                    Buyer name:
                                    <div className="color_highlight">
                                        Monika
                                    </div>
                                </div>
                            </CellBody>
                        </TableData>

                        <TableData width={'84px'}>
                            <div>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/41q3vc06d8L._SCLZZZZZZZ__SX55_.jpg" />
                            </div>
                        </TableData>

                        <TableData>
                            <div className="color_highlight">
                                Plantry (SellSage) Natural Biodegradable Palm
                                Leaf Bowl - Pack of 20, Soak Free 100%
                                Compostable like bamboo better than paper (Heart
                                5 inch)
                            </div>
                            <div>
                                ASIN: B08G5DMTNR SKU: PALM-HRTB-0500-0020-FBM
                                Quantity: 1 Item subtotal: $9.95
                            </div>
                        </TableData>

                        <TableData textCenter>
                            <Status status="shipped">Shipped</Status>
                        </TableData>

                        <TableData>
                            <TableActionButtons>
                                <TableActionBtn>Edit Status</TableActionBtn>

                                <TableActionBtn>
                                    Print packing slip
                                </TableActionBtn>
                            </TableActionButtons>
                        </TableData>
                    </TableRow>
                </TableBody>
            </Table>
        </TableWrapper>
    )
}
