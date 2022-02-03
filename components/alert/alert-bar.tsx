import styled from 'styled-components'

interface Props {
    alertMessage: string
    alertType: 'red' | 'green' | 'yellow'
}
const AlertBarContainer = styled.div<{ alertType: Props['alertType'] }>`
    width: 100%;
    padding: 0.5rem 1rem;
    font-weight: 500;

    color: ${(props) =>
        props.alertType === 'red'
            ? '#DC2626'
            : props.alertType === 'green'
            ? '#16A34A'
            : props.alertType === 'yellow' && '#D97706'};
    background: ${(props) =>
        props.alertType === 'red'
            ? '#FEE2E2'
            : props.alertType === 'green'
            ? '#DCFCE7'
            : props.alertType === 'yellow' && '#FEF3C7'};
`

export const AlertBar: React.FC<Props> = ({ alertMessage, alertType }) => {
    return (
        <AlertBarContainer alertType={alertType}>
            {alertMessage}
        </AlertBarContainer>
    )
}
