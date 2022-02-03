import styled from 'styled-components'

interface Props {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const customHeading = styled.h1`
    font-size: large;
    font-weight: 800;
`
// not currently working
export const Typography = ({ variant, component, children }) => {
    switch (variant) {
        case variant === 'h1' && component === 'h1':
            return customHeading
    }
}
