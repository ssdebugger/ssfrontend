import styled from 'styled-components'

export const UserIcons = styled.div`
    display: inline;
`

export const Button = styled.button`
    display: flex;
    height: 45px;
    width: 80%;
    margin: 1rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    cursor: pointer;
    &:hover {
        background: #fff;
    }
    &.tablinksactive {
        background: #fff;
        color: #d39b75;
    }
    @media screen and (max-width: 600px) {
        margin-top: 0rem;
        height: 40px;
        margin-left: 1rem;
        padding-top: 0rem;
    }
`
export const Tab = styled.div`
    padding-top: 2rem;
    padding-left: 1rem;
    width: 100%;
    background: #f8f1ed;
    height: 100vh;
    @media screen and (max-width: 600px) {
        height: 70vh;
        padding-left:0;
        margin:0;
    }
`

export const Text = styled.div`
    display: inline;
    font-weight: 400;
    font-height: 19px;
    font-size: 16px;
    margin-left: 1rem;   
`

export const InputField = styled.input`
    height: 40px;
    margin-top: 0.5rem;
    margin-left: 2rem;
    border: 1px solid #222;
    padding-left: 1rem;
    width: 80%;
`

export const DropDown = styled.select`
    height: 40px;
    margin-top: 0.5rem;
    margin-left: 2rem;
    border: 1px solid #222;
    padding-left: 1rem;
    width: 80%;
`

export const Save = styled.button<{
    color?:string;
}>`
    width: 40%;
    display: block;
    height: 40px;
    margin-top: 1.5rem;
    margin-left: 2rem;
    margin-bottom:1rem;
    border:1px solid #333;
    background: ${props => props.color || '#d39b75'};
`
export const Boxbutton = styled.button<{
    color?:string;
    background?:string;
}>`
width:80%;
height:40px;
display:block;     
margin:1rem 1rem;
background: ${props => props.background || '#fff'};
color: ${props => props.color || '#000'};
border:1px solid black;
`


export const AddressBox = styled.div`
   margin:2rem 2rem;
   border-radius:1rem;
   padding:0.5rem 0.5rem;
   height:260px;
   width:auto;
   border:1px solid #333;
   max-width:300px;
   cursor:pointer;
`

export const Boxdefault = styled.button<{
    color?:string;
    background?:string;
}>`
width:80%;
height:40px;
display:block;     
margin:1rem 1rem;
background: ${props => props.background || '#fff'};
color: ${props => props.color || '#000'};
border:1px solid black;
&.tablinksactive {
    display:none;
};

`


