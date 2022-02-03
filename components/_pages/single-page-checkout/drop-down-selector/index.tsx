import { ChevronDown } from 'react-feather'
import {
    DdContainer,
    DdHeaderDetails,
    DdHeader,
    DdStepIndicator,
    DdToggleArrow,
} from './drop-down-selector.style'

interface Props {
    title: string
    stepIndicator: string
    children: React.ReactNode
}

export const DropdownSelector: React.FC<Props> = ({
    title,
    stepIndicator,
    children,
}) => {
    return (
        <DdContainer>
            <DdHeader>
                <DdStepIndicator>
                    <span>1</span>
                </DdStepIndicator>

                <DdHeaderDetails>{children}</DdHeaderDetails>

                <DdToggleArrow>
                    <ChevronDown />
                </DdToggleArrow>
            </DdHeader>
        </DdContainer>
    )
}
