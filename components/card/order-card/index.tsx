import { Button } from '@/components/cta/button'
import { HyperLink } from '@/components/cta/link'
import { Heading3, Heading4 } from '@/components/typography/heading'
import Link from 'next/link'
import {
    AlertCircle,
    Calendar,
    Check,
    CheckCircle,
    Circle,
    Square,
} from 'react-feather'
import {
    OrderCardMain,
    OrderDetail,
    OrderDetailsContainer,
    Span,
    OrderStatus,
    OrderItemsContainer,
    OrderItem,
    OrderItemDetails,
    BottomButtons,
    OrderCardContainer,
    OrderCardStatusbar,
    OrderStatusText,
    OrderStatusBarContainer,
    OrderStatusContainer,
    OrderStatusLabel,
    OrderStatusLine,
    OrderCardTop,
} from './order-card-styles'

interface Props {
    orderStatus: string
    detailedMessage: string
    orderid: Number
    orderdate: string
    orderamount: string
    orderitems: any
}

export const OrderCard: React.FC<Props> = ({
    orderStatus,
    detailedMessage,
    orderid,
    orderdate,
    orderamount,
    orderitems,
}) => {
    const ShowOrderStatus = orderStatus !== 'delivered'

    return (
        <OrderCardContainer className={orderStatus}>
            <OrderCardMain>
                <OrderCardTop>
                    <OrderDetailsContainer>
                        <OrderDetail className="orderId">
                            <Heading3>Order Id :</Heading3>
                            <Span>{orderid}</Span>
                        </OrderDetail>

                        <OrderDetail>
                            <Heading3>Order Date :</Heading3>
                            <Span>{orderdate}</Span>
                        </OrderDetail>

                        <OrderDetail>
                            <Heading3>Total amount :</Heading3>
                            <Span>${orderamount}</Span>
                        </OrderDetail>
                    </OrderDetailsContainer>

                    <OrderStatusBarContainer>
                        <OrderStatusContainer>
                            <OrderStatus>
                                <Check />
                                <OrderStatusLabel>Ordered</OrderStatusLabel>
                            </OrderStatus>
                        </OrderStatusContainer>

                        <OrderStatusContainer>
                            <OrderStatusLine />

                            <OrderStatus>
                                {orderStatus === 'Processing' ? (
                                    <>
                                        <Circle />
                                        <OrderStatusLabel>
                                            Processing
                                        </OrderStatusLabel>
                                    </>
                                ) : orderStatus === 'Shipped' ||
                                  orderStatus === 'Delivered' ? (
                                    <>
                                        <Check />
                                        <OrderStatusLabel>
                                            Shipped
                                        </OrderStatusLabel>
                                    </>
                                ) : (
                                    <>
                                        <Circle />
                                        <OrderStatusLabel>
                                            Shipped
                                        </OrderStatusLabel>
                                    </>
                                )}
                            </OrderStatus>
                        </OrderStatusContainer>

                        <OrderStatusContainer>
                            {orderStatus === 'Shipped' ? (
                                <>
                                    <OrderStatusLine isStatusPending={false} />

                                    <OrderStatus>
                                        <Circle />
                                        <OrderStatusLabel>
                                            Out for delivery
                                        </OrderStatusLabel>
                                    </OrderStatus>
                                </>
                            ) : orderStatus === 'Delivered' ? (
                                <>
                                    <OrderStatusLine isStatusPending={false} />

                                    <OrderStatus>
                                        <Check />
                                        <OrderStatusLabel>
                                            Delivered
                                        </OrderStatusLabel>
                                    </OrderStatus>
                                </>
                            ) : (
                                <>
                                    <OrderStatusLine isStatusPending={true} />

                                    <OrderStatus isStatusPending={true}>
                                        <Circle />
                                        <OrderStatusLabel>
                                            Delivered
                                        </OrderStatusLabel>
                                    </OrderStatus>
                                </>
                            )}
                        </OrderStatusContainer>
                    </OrderStatusBarContainer>
                </OrderCardTop>

                <OrderStatusText className={orderStatus}>
                    {orderStatus === 'delivered' ? (
                        <CheckCircle width={18} height={18} />
                    ) : orderStatus === 'processing' ? (
                        <Calendar width={18} height={18} />
                    ) : (
                        <AlertCircle width={18} height={18} />
                    )}
                    <Span margin="0 0 0 0.75rem">{detailedMessage}</Span>
                </OrderStatusText>
                <OrderItemsContainer>
                    {orderitems.map((item) => (
                        <OrderItem key={item.title}>
                            <img src={item.image_url} />

                            <OrderItemDetails>
                                <Heading4>{item.title}</Heading4>

                                <Span>Quantity: {item.quantity}</Span>

                                <a href={item.sku}>
                                    <Button varient="primary">
                                        Buy it again
                                    </Button>
                                </a>
                            </OrderItemDetails>
                        </OrderItem>
                    ))}
                </OrderItemsContainer>
            </OrderCardMain>

            <BottomButtons>
                {/* <Link
                    href="https://www.fedex.com/fedextrack/?trknbr=1234567890"
                    passHref
                >
                    <a clas>
                        <Button varient="primary">Track Order</Button>
                    </a>
                </Link> */}

                <HyperLink
                    href="https://www.fedex.com/fedextrack/?trknbr=1234567890"
                    varient="secondary"
                >
                    <span style={{ display: 'block', textAlign: 'center' }}>
                        Track order
                    </span>
                </HyperLink>
                <Link href={'/orders/' + orderid} passHref>
                    <a>
                        <Button varient="primary">View Details</Button>
                    </a>
                </Link>
            </BottomButtons>
        </OrderCardContainer>
    )
}
