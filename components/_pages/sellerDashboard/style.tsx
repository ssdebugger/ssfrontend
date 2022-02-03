import styled from 'styled-components'

export const ItemContainer = styled.div`
    height:100vh;
    background-color:#fff;
    width:100%;
    margin-left:10%;
`
export const Title = styled.p`
   color:	#0645AD;
   text-decoration:underline;
   font-weight:bold;
`

export const Price = styled.p`
       font-weight:550;

`
export const InputHolder = styled.div`
      width:50%;
      margin-left:10%;
`
export const FilterContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    flex-direction:row;
    margin-top:1rem;
    margin-left:10%;
    @media (max-width:600px){
     flex-direction:column;
}

`

export const Stock = styled.p<{
    stock?: boolean;
}>`
    color: ${props => props.stock === true ? 'green' : 'red'};
    font-weight:550;

    `

export const HeadingHolder = styled.div`
   display:flex;
   margin-bottom:2rem;
   margin-left:10%;
   margin-top:1rem;
`

export const Heading = styled.h2`
    
    font-size: 1.5rem;
    margin-left:1rem;
    margin-top:0.5rem;

    @media (min-width: 768px) {
        font-size: 1.75rem;
    }
    @media (min-width: 1024px) {
        font-size: 2rem;
    }
`

export const ProductContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    margin-top:3rem;
    background-color:#fff;
    width:90%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    cursor:pointer;
`

export const ProductImg = styled.img`
    height:60px;
    width:60px;
    margin-left:1rem;
`
export const ProductInfo = styled.p`
    margin-left:1rem;
    margin-top:1rem;
       
`
export const Selector = styled.a`
     border:1px solid black;
     margin-left:1rem;
     margin-top:1rem;
     height:20px;
     cursor:pointer;
     width:20px;
     border-radius:50%;
     : hover {
     background-color:skyblue;
}
     
`


export const DetailsContainer = styled.div`
      margin-left:1rem;
      display:flex;
      flex-direction:column;

`

export const ImagesHolder = styled.div`
     display:flex;
     flex-direction:row !important;
    

`

export const ImageBox = styled.div`
       display:flex;
       flex-direction:row !important;
       overflow-x:none;
       padding:0;
       margin:0;
       width:100%;
`

export const ImageContainer = styled.img`
         width:70%;
         height:80%;
         
         
`


export const MenuIcon = styled.div`
         margin-top:2rem;

`

export const MobileDetailsContainer = styled.div`
   display:none;
   & @media only screen and (max-width=600px){
      margin-left:1rem;
      display:flex;
      flex-direction:column;
}
`





