import styled from 'styled-components'
type ButtonStyleProps = {
    varient?: 'primary' | 'secondary'
    readonly fill?: boolean
    size?: 'regular' | 'large'
    disabled?: boolean
}

interface ButtonProps extends ButtonStyleProps {
    type?: 'button' | 'submit'
    onClick?: (e) => any
    children: React.ReactNode
}

const StyledButton = styled.button<{
    varient?: ButtonStyleProps['varient']
    fill?: ButtonStyleProps['fill']
    size?: ButtonStyleProps['size']
    disabled?: ButtonStyleProps['disabled']
}>`
    min-width: 140px;
    height: ${(props) => (props.size === 'large' ? '55px' : ' 44px')};
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
        props.varient === 'primary'
            ? props.theme.green500
            : props.theme.cream500};
    color: ${(props) => (props.varient === 'primary' ? '#fff' : '#000')};
    font-weight: 500;
    width: ${(props) => props.fill && '100%'};
    transition: 0.2s ease;

    &:disabled {
        background: rgba(1, 152, 117, 0.1);
        border-color: rgba(1, 152, 117, 0.2);
        color: ${(props) => props.theme.green700};
        border: 1px solid ${(props) => props.theme.green500};
    }
`

export const Button: React.FC<ButtonProps> = ({
    type,
    onClick,
    varient,
    children,
    fill,
    size,
    disabled,
}) => {
    return (
        <StyledButton
            type={type}
            onClick={onClick}
            varient={varient}
            fill={fill}
            size={size}
            disabled={disabled}
        >
            {children}
        </StyledButton>
    )
}
