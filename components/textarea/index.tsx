import { Textarea, TextareaLabel, TextareaWrapper } from './style'

interface Props {
    heading: string
    // type: string
    // value: string | number
    // onChangeHandler: () => void
}

export const TextArea: React.FC<Props> = ({
    heading,
    // value,
    // onChangeHandler,
}) => {
    return (
        <TextareaWrapper>
            <Textarea
                id={heading}
                value=""
                // value={value}
                // onChange={onChangeHandler}
            />
            <TextareaLabel htmlFor={heading}>{heading}</TextareaLabel>
        </TextareaWrapper>
    )
}

/**
 * To check how the input field will perform when totally functional uncomment the code below
 * And comment the code above
 */

// import { useState } from 'react'
// export const Input: React.FC<Props> = ({ heading, //value, //onChangeHandler,}) => {
//     const [inputVal, setInputVal] = useState([])

//     const handleChange = (e) => {
//         setInputVal(e.target.value)
//     }

//     return (
//         <TextareaWrapper>
//             <Textarea
//                 id="username"
//                 onChange={(e) => handleChange(e)}
//                 value={inputVal}
//             />
//             <TextareaLabel htmlFor="username">Enter name</TextareaLabel>
//         </TextareaWrapper>
//     )
// }
