
import { ChevronRight } from 'react-feather'
import styled from 'styled-components'
import { HyperLink } from '../header'
import Image from 'next/image'

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
               <HyperLink href='/'> <Image src="/favicon.svg" alt='sellsageicon' height={32} width={32}/></HyperLink>
            </CrumbItem>

            {items.map((item) => (
                <CrumbItem key={item}>
                    <ChevronRight width={14} height={14} />
                    {item=='Shop'?<ItemName><HyperLink href='/shop'>{item}</HyperLink></ItemName>:<ItemName>{item}</ItemName> }
                </CrumbItem>
            ))}
        </BreadCrumblist>
    )
}
