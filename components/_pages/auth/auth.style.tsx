import styled from 'styled-components'

export const Content = styled.div`
    max-width: 500px;
    margin: 4rem auto;

    a {
        cursor: pointer;

        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

    h2 {
        font-size: 2.25rem;
        margin: 0 0 0.5rem;
    }

    p {
        display: inline-block;
        margin: 0 0 0.25rem;

        a {
            color: ${(props) => props.theme.linkColor};
        }
    }

    @media (min-width: 768px) {
        margin: 5rem auto;
        padding: 1rem;
    }
`
export const PageLink = styled.a`
    display: block;
    color: #06c;
    cursor: pointer;
    font-size: 1.125rem;
    margin: 0 0 0.75rem 0;

    &:hover,
    &:focus {
        text-decoration: underline;
    }
`
export const LinkContainer = styled.div`
    padding: 0.75rem 0;
`
export const PageHeader = styled.h2`
    font-size: 2.25rem;
    margin-bottom: 0.75rem;
`
export const PageDesc = styled.p`
    font-size: 1rem;
    display: inline-block;
    margin-bottom: 1.75rem;
    line-height: 150%;
`
export const SubmitBtn = styled.button`
    width: 100%;
    height: 56px;
    background-color: #d39b75;
    border-radius: 6px;
    color: #fff;
    text-transform: uppercase;
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 1rem;
    margin-top: 1.25rem;
    cursor: pointer;

    &:hover {
        background-color: rgba(23, 23, 23, 1);
    }

    &:focus {
        background-color: rgba(23, 23, 23, 0.8);
    }
`

export const AlertContainer = styled.div`
    margin: 1rem 0 1.5rem;
`

export const Form = styled.form`
    margin: 2.75rem 0 0;

    button {
        margin: 2.5rem 0 1.125rem;
        letter-spacing: 0.08rem;
        font-size: 0.85rem;
        text-transform: uppercase;
    }
`

export const InputContainer = styled.div`
    margin-bottom: 1.75rem;

    a {
        margin-top: 0.75rem;
        display: inline-block;
        font-size: 0.875rem;
        color: ${(props) => props.theme.blueGray600};

        &:hover {
            color: ${(props) => props.theme.linkColor};
        }
    }
`

export const Container = styled.div`
    margin-top: 5rem;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        margin-top: 0;
        display: flex;
        position: relative;
    }
`

// Sign up page styles
export const MainContent = styled.div`
    margin: 2rem 0;
    flex-basis: 100%;
    padding: 0 1rem;

    h1 {
        font-size: ${(props) => props.theme.heading4};
        margin: 0 0 2.5rem;
    }

    @media (min-width: ${(props) => props.theme.screenMd}) {
        padding: 0 3rem;
        flex-basis: 50%;

        h1 {
            font-size: ${(props) => props.theme.heading2};
            padding: 0 0 1.5rem;
        }
    }

    @media (min-width: ${(props) => props.theme.screenLg}) {
        padding: 0 5%;
    }
`
export const MainContentWrapper = styled.div`
    max-width: 450px;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        h1 {
            font-size: 1.75rem;
        }
    }
`

export const SignUpTypes = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Type = styled.button<{ isSelected: boolean }>`
    color: ${(props) =>
        props.isSelected ? props.theme.blueGray900 : props.theme.blueGray500};
    font-size: ${(props) => props.theme.textMd};
    font-weight: ${(props) => props.isSelected && 500};

    &:first-child {
        position: relative;
        margin: 0 2rem 0 0;
        padding: 0 2rem 0 0;

        &:after {
            position: absolute;
            right: 0;
            content: '';
            width: 2px;
            height: 100%;
            background: ${(props) => props.theme.blueGray600};
        }
    }
`

export const SignUpForm = styled.div`
    margin: 2rem 0;
`

export const PersonalSignUp = styled.form<{ isActive: boolean }>`
    display: ${(props) => !props.isActive && 'none'};
`

export const BusinessSignUp = styled.form<{ isActive: boolean }>`
    display: ${(props) => !props.isActive && 'none'};

    h3 {
        padding: 1rem 0 0;
        margin: 2rem 0;
        font-size: ${(props) => props.theme.heading4};
    }
`
export const SideContent = styled.div<{ imageLink: string }>`
    background: url(${(props) => props.imageLink});
    height: 200px;
    width: 100%;
    object-fit: cover;

    @media (min-width: ${(props) => props.theme.screenMd}) {
        flex-basis: 50%;
        position: sticky;
        top: 0;
        right: 0;
        padding: 2.5rem;
        height: 100vh;
    }
`

export const SideContentText = styled.div`
    color: #fff;
    padding: 2rem 3rem;
    h3 {
        margin-bottom: 1rem;
    }
`
export const SideContentPointsWrapper = styled.ul``
export const SideContentPoint = styled.li`
    font-size: 1.125rem;
    margin-bottom: 0.5rem;
`
