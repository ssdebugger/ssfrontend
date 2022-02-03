import { useState, useRef } from 'react'
import styled from 'styled-components'
import { Plus } from 'react-feather'
import { Paragraph } from '../typography/paragraph'

/**
 * Styles for Collapse button.
 */
const CollapseBtn = styled.button``

const CollapseBtnHeader = styled.div`
    display: flex;
    padding: 0.75rem 0;
`
const SvgContainer = styled.div<{ collapseOpen: boolean }>`
    svg {
        transform: ${(props) => props.collapseOpen && 'rotate(45deg)'};
        transition: ${(props) => props.theme.transition};
    }
`

const CollapseBtnHeading = styled.span`
    padding: 0 0 0 0.75rem;
    text-align: left;
    color: ${(props) => props.theme.blueGray900};
`

const CollapseBtnContent = styled.div`
    transition: 0.2s ease;
    height: 0;
    overflow: hidden;
    padding: 0 0 0 2.25rem;

    p {
        text-align: left;
        color: ${(props) => props.theme.blueGray500};
    }
`

/**
 * Main logic
 */
interface Props {
    heading: string
    content?: string[]
    children?: React.ReactNode
}

export const CollapseButton: React.FC<Props> = ({
    heading,
    content,
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLParagraphElement>()

    const handleClick = () => {
        setIsOpen(!isOpen)

        if (!isOpen) {
            contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
        } else {
            contentRef.current.style.height = '0'
        }
    }

    return (
        <>
            <CollapseBtn onClick={handleClick}>
                <CollapseBtnHeader>
                    <SvgContainer collapseOpen={isOpen}>
                        <Plus />
                    </SvgContainer>

                    <CollapseBtnHeading>{heading}</CollapseBtnHeading>
                </CollapseBtnHeader>

                <CollapseBtnContent ref={contentRef}>
                    {content?.map((item) => (
                        <Paragraph key={item}>{item}</Paragraph>
                    ))}
                    {children}
                </CollapseBtnContent>
            </CollapseBtn>
        </>
    )
}
