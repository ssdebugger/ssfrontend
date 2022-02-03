import {
    CheckBox,
    CheckBoxContainer,
    CheckBoxInput,
    CheckBoxSymbol,
    IconContainer,
    TextContainer,
} from './style'

interface Props {
    id: string
    checked?: boolean
    checkboxName: string
    onChange?: () => void
}

export const Checkbox: React.FC<Props> = ({
    id,
    checked,
    checkboxName,
    onChange,
}) => {
    return (
        <>
            <CheckBoxContainer>
                <CheckBoxInput
                    checked={checked === true ? true : false}
                    onChange={onChange}
                    id={id}
                    type="checkbox"
                />
                <CheckBox htmlFor={id}>
                    <IconContainer>
                        <CheckBoxSymbol>
                            <polyline
                                points="1.5 6 4.5 9 10.5 1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                            ></polyline>
                        </CheckBoxSymbol>
                    </IconContainer>
                    <TextContainer>{checkboxName}</TextContainer>
                </CheckBox>
            </CheckBoxContainer>
        </>
    )
}
