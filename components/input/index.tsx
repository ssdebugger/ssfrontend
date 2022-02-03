import styled, { css } from 'styled-components'

interface Props {
    heading: string
    placeholder: string
    type: string
    value?: string | number
    onChangeHandler?: (e) => any
    readonly required?: boolean
    pattern?: string
}

export const CommonInputStyles = css`
    color: #000;
    border: 1px solid ${(props) => props.theme.blueGray300};
    padding: 0.875rem 1rem;
    transition: ${(props) => props.theme.transition};
    width: 100%;

    &::placeholder {
        color: ${(props) => props.theme.blueGray500};
    }

    &:focus {
        border: 1px solid ${(props) => props.theme.green500};
    }
`

const InputContainer = styled.div``

const Label = styled.label`
    display: block;
    color: ${(props) => props.theme.blueGray900};
    margin-bottom: 0.875rem;

    span {
        color: ${(props) => props.theme.red400};
    }
`
const InputBox = styled.input`
    ${CommonInputStyles}
    height: 45px;
`

const TextAreaBox = styled.textarea`
    ${CommonInputStyles}
    min-height: 200px;
`

export const Input: React.FC<Props> = ({
    heading,
    type,
    value,
    onChangeHandler,
    required,
    placeholder,
    pattern,
}) => {
    return (
        <InputContainer>
            <Label htmlFor={heading}>
                {heading + ' '}
                {required && <span>*</span>}
            </Label>
            <InputBox
                type={type}
                id={heading}
                onChange={onChangeHandler}
                placeholder={placeholder}
                required={required}
                pattern={pattern}
            />
        </InputContainer>
    )
}

export const Textarea: React.FC<Props> = ({
    heading,
    type,
    value,
    onChangeHandler,
    required,
    placeholder,
}) => {
    return (
        <InputContainer>
            <Label htmlFor={heading}>
                {heading + ' '}
                {required && <span>*</span>}
            </Label>

            <TextAreaBox
                id={heading}
                onChange={onChangeHandler}
                required={required}
                placeholder={placeholder}
            />
        </InputContainer>
    )
}
