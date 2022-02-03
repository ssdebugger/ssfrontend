import styled from "styled-components";

export const AddressBox = styled.div<{
    active:number
}>`
border : ${(props) => props.active ? '2px solid black' : '0.5px solid #aaa'};
padding:1rem;
margin-top:1rem;
cursor:pointer;
`

export const AddressHolder = styled.div`{
height:90vh !important;
margin:1rem 1rem;
overflow:auto;
&::-webkit-scrollbar { width: 0 ! important }
}`

export const CheckoutButtons = styled.button<{ active: number}>`
background: #019875;
color: white;
border: 1px solid #888;
border-radius:30%;
width:  50%;
font - size: 1rem;
margin: 5% 5% ;
display:${(props) => props.active ? 'block' : 'none'  };
height: 30px;
@media only screen and (min-width: 600px) {

    border-radius:30%;
    display:${(props) => props.active ? 'inline' : 'none'};
    width: 30%;
    height: 30px;
}
`




export const Mainpopup = styled.div`
position: absolute;
width: 50 %;
height: 100vh;
right:0;
z-index:111;
align-items:center;
background:#fff;
justify-content:center;
transform:translateX(0%);
   @media (max-width:600px){
       min-width:100% !Important;
}
`

export const Popupoverlay = styled.div`
   position:absolute;
   width:100%;
   height:100vh;
   background-color:rgba(0,0,0,0.575);
    
`
export const Popupcontent = styled.div`
     height:100%;
     width:100%;
 
`