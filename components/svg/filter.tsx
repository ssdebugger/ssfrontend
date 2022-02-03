interface Props {
    width?: string
    height?: string
    strokeWidth?: string
}

export const FilterIcon: React.FC<Props> = ({ width, height, strokeWidth }) => {
    return (
        <svg
            width={width ? width : 24}
            height={height ? height : 24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            stroke="currentColor"
            strokeLinecap="round"
        >
            <path
                d="M16.5 4.875H12M4.5 4.875h-3M7.5 7.5a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25zM16.5 13.125h-3M6 13.125H1.5M10.5 15.75a2.625 2.625 0 100-5.25 2.625 2.625 0 000 5.25z"
                strokeWidth={strokeWidth ? strokeWidth : '1.2'}
                strokeMiterlimit={10}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}
