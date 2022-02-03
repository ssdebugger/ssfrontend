import { InputForm, InputLabel, InputWrapper } from './style'
import React from 'react'

interface Props {
    heading: string
    type: string
    value?: string | number
    onChangeHandler?: (e) => any
    margin?: string,
    height?: string,

}

/**
 * To check how the input field will perform when totally functional uncomment the code below
 * And comment the code above
 */

export const Input: React.FC<Props> = ({
    heading,
    type,
    value,
    onChangeHandler,
    margin,
    height
}) => {
    return (
        <InputWrapper
            margin={margin}>
            <InputForm
                type={type}
                id={heading}
                onChange={onChangeHandler}
                value={value}
                height={height}
            />
            <InputLabel  htmlFor="username">{heading}</InputLabel>
        </InputWrapper>
    )
}
