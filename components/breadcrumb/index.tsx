import { ChevronRight } from 'react-feather'
import styled from 'styled-components'
import { HyperLink } from '../header'

interface Props {
    items?: Array<string>
}

const BreadCrumblist = styled.ol`
    display: flex;
    align-items: center;
    list-style: none;
`

const CrumbItem = styled.li`
    display: flex;
    align-items: center;
    margin-left: 4px;

    svg {
        stroke: ${(props) => props.theme.blueGray500};
    }

    &:last-child {
        span {
            color: ${(props) => props.theme.cream500};
        }
    }
`

const ItemName = styled.span`
    font-size: ${(props) => props.theme.textSm};
`

export const BreadCrumb: React.FC<Props> = ({ items }) => {
    return (
        <BreadCrumblist>
            <CrumbItem>
               <HyperLink href='/'> <img src="/favicon.svg" alt='sellsageicon'/></HyperLink>
            </CrumbItem>

            {items.map((item) => (
                <CrumbItem key={item}>
                    <ChevronRight width={14} height={14} />
                    {item=='Shop'?<HyperLink href='/shop'><ItemName>{item}</ItemName></HyperLink>:<ItemName>{item}</ItemName> }
                </CrumbItem>
            ))}
        </BreadCrumblist>
    )
}
