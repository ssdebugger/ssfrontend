import { useEffect, useRef, useState } from 'react'
import { useAlert } from 'react-alert'
import Image from 'next/image'

import { Heading4 } from '@/components/typography/heading'
import {
    ProductDetails,
    ProductCardDetails,
    ProductCardContent,
    ProductCardImg,
    ProductCardButton,
    GridContainer,
} from './product.style'

// type definition
import {
    DashboardPopupInitialProps,
    DashboardPopupProps,
} from '@/components/_pages/admin-dashboard/products'

type Actions =
    | 'heading'
    | 'desc'
    | 'salePrice'
    | 'regularPrice'
    | 'shortDesc'
    | 'stock'

export const DashboardProductCard: React.FC<DashboardPopupProps> = (props) => {
    const alert = useAlert()
    const saveBtn = useRef<HTMLButtonElement>()
    const [popupData, setPopupData] = useState<DashboardPopupProps>(
        DashboardPopupInitialProps
    )

    function handleChange(e, type: Actions) {
        switch (type) {
            case 'heading':
                setPopupData((prev) => ({
                    ...prev,
                    productName: e.target.value,
                }))
                break

            case 'desc':
                setPopupData((prev) => ({
                    ...prev,
                    description: e.target.value,
                }))
                break

            case 'shortDesc':
                setPopupData((prev) => ({
                    ...prev,
                    shortDesc: e.target.value,
                }))
                break

            case 'salePrice':
                setPopupData((prev) => ({
                    ...prev,
                    salePrice: Number(e.target.value),
                }))
                break

            case 'regularPrice':
                setPopupData((prev) => ({
                    ...prev,
                    regularPrice: Number(e.target.value),
                }))
                break

            case 'stock':
                setPopupData((prev) => ({
                    ...prev,
                    inStock: Number(e.target.value),
                }))
                break
            default:
                break
        }
    }

    async function handleSubmit() {
        let productData = {
            product_id: Number(popupData.id),
            product_name: popupData.productName,
            sale_price: popupData.salePrice,
            regular_price: popupData.regularPrice,
            in_stock: popupData.inStock,
            short_description: popupData.shortDesc,
            about: popupData.description,
        }

        saveBtn.current.disabled = true

        let res = await fetch(
            'https://wpsqswbxjj.execute-api.us-east-2.amazonaws.com/dev/adminproductupdate',
            {
                method: 'POST',
                body: JSON.stringify(productData),
            }
        )
        try {
            let data = await res.json()

            if (data.statusCode === 200) {
                alert.show('Updated Data successfully')
                saveBtn.current.disabled = false
            } else {
                saveBtn.current.disabled = false
                alert.show('Unable to update Data, try again')
            }
        } catch (error) {
            console.log(error)
            saveBtn.current.disabled = false
        }
    }

    useEffect(() => {
        setPopupData({ ...props })
    }, [props])

    return (
        <div>
            <ProductCardContent>
                <ProductCardImg>
                    <img src={props.imgUrl} alt='eco products' />
                    

                </ProductCardImg>

                <ProductDetails>
                    <h2
                        dangerouslySetInnerHTML={{
                            __html: popupData.productName,
                        }}
                        contentEditable
                        onChange={(e) => handleChange(e, 'heading')}
                    ></h2>
                </ProductDetails>
            </ProductCardContent>

            <ProductCardDetails>
                <Heading4>Short Description</Heading4>
                <textarea
                    rows={1}
                    value={popupData.shortDesc}
                    onChange={(e) => handleChange(e, 'shortDesc')}
                ></textarea>
            </ProductCardDetails>

            <ProductCardDetails>
                <Heading4>Description</Heading4>
                <textarea
                    rows={3}
                    value={popupData.description}
                    onChange={(e) => handleChange(e, 'desc')}
                ></textarea>
            </ProductCardDetails>

            <GridContainer>
                <ProductCardDetails>
                    <Heading4>Sale Price</Heading4>
                    <div className="input_container">
                        <input
                            type="number"
                            value={popupData.salePrice}
                            min={1}
                            onChange={(e) => handleChange(e, 'salePrice')}
                        />
                    </div>
                </ProductCardDetails>

                <ProductCardDetails>
                    <Heading4>Regular Price</Heading4>
                    <div className="input_container">
                        <input
                            type="number"
                            value={popupData.regularPrice}
                            min={1}
                            onChange={(e) => handleChange(e, 'regularPrice')}
                        />
                    </div>
                </ProductCardDetails>

                <ProductCardDetails>
                    <Heading4>Stock Quantity</Heading4>
                    <div className="input_container">
                        <input
                            type="number"
                            value={popupData.inStock}
                            min={1}
                            onChange={(e) => handleChange(e, 'stock')}
                        />
                    </div>
                </ProductCardDetails>
            </GridContainer>

            <ProductCardButton ref={saveBtn} onClick={handleSubmit}>
                Save Details
            </ProductCardButton>
        </div>
    )
}
