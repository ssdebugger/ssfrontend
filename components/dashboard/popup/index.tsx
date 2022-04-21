import { useEffect } from 'react'
import { Heading4 } from '@/components/typography/heading'
import { X } from 'react-feather'
import {
    DashboardPopup,
    PopupBtnWrapper,
    PopupBtn,
    PopupContentWrapper,
    PopupContent,
} from './popup.style'

interface Props {
    heading: string
    children: React.ReactNode
    showPopup: boolean
    toggleShowPopup: () => void
}
export const Popup: React.FC<Props> = ({
    heading,
    children,
    showPopup,
    toggleShowPopup,
}) => {
    useEffect(() => {
        if (showPopup) {
            document.body.style.height = '100vh'
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.height = '100%'
            document.body.style.overflowY = 'auto'
        }
    }, [showPopup])

    return (
        <>
            <DashboardPopup showPoup={showPopup}>
                <PopupContentWrapper showPoup={showPopup}>
                    <PopupBtnWrapper>
                        <Heading4>{heading}</Heading4>
                        <PopupBtn onClick={toggleShowPopup}>
                            <X />
                        </PopupBtn>
                    </PopupBtnWrapper>

                    <PopupContent>{children}</PopupContent>
                </PopupContentWrapper>
            </DashboardPopup>
        </>
    )
}
