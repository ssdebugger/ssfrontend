import styled from "styled-components";


export const ImageHolder = styled.img<{
    width?:string,
    height?:string
}>` 
       padding:1rem;
       object-fit:fill;
       width:10rem;
       height:8rem;
        @media only screen and (max-width:600px){
           width:60vw;
           height:30vh;
           margin-left:20vw;
           
}
`


export const CartCard = styled.div`{
           box-shadow:0px 2px 2px #ddd;
           padding-bottom:5px;
           @media only screen and (max-width:600px){
           padding-bottom:1rem;
}
          }`


export const CartContainer = styled.div`{
 height:500px !important;
 overflow:auto;
&::-webkit-scrollbar { width: 0 ! important }
}`

export const Input = styled.input`{
     
     height:3rem;
     width:20rem;
     padding-left:1rem;
 @media only screen and (max-width:600px) {
     width:18rem;
  }

}`

export const Circularselect = styled.div`
   height : 16px;
   width:16px;
   border-radius:50%;
   margin-right:1rem;
   margin-top:0.5rem;
   background:#fff;
   
   
`

export const CouponCard = styled.div`{
       width:20rem;
       height:8rem;
       background-color:#D3DDDB;
       margin-top:1rem;
       padding-top:0.75rem;
       cursor:pointer;
       &:hover ${Circularselect} {

     background:#21574A;

}
       @media only screen and (max-width:600px) {
           width:18rem;
           padding-top:0.25rem;
           height:10rem;
}
}`

export const BagImage = styled.img`
   width:100px;
   height:80px;
   margin-top:1rem;
`



export const Slidebutton = styled.button<{
    color?: string;
    fontcolor?: string;

}>`
    min-height:40px;
    margin-top:0.5rem;
    border:1px solid black;
    margin-left:1rem;
    color:${props => props.fontcolor || '#fff'};
    width:90%;
    background:${props => props.color || '#21574A'}
`

export const FlexItem = styled.div`
       margin:1rem;
       width:80px;
`
export const FlexName = styled.div`
       margin:1rem;
       width:180px;
`