import styled from 'styled-components'

export const SectionContainer = styled.div`
    margin: 1.5rem 0;
`

export const KeywordsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

export const Keyword = styled.span`
    color: ${(props) => props.theme.green400};
    background: rgba(98, 130, 114, 0.2);
    height: 48px;
    padding: 0.75rem 0;
    flex-basis: calc(50% - 1rem);
    text-align: center;
    margin: 0 0 1rem;

    &:nth-child(n) {
        margin-right: 1rem;
    }
`
