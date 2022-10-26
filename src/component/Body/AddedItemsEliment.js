import styled from "styled-components";

export const AddedItemContainer = styled.div`
   
    width:100%;
    max-height:200px ;
    overflow-y:scroll;
    padding:10px ;
    background:linear-gradient(rgba(135, 206, 235,0.2)) ;
`
export const ItemMenu = styled.div`
display:flex ;
height:40px ;
margin-bottom:10px ;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
border-radius:10px ;
box-shadow:10px 5px 15px -5px rgb(0 0 0 / 28%);
background-color: #d2d9d4;
`
export const ItemImgcontainer=styled.samp`
height:35px;
width:35px ;
margin:auto 10px ;
border-radius:50%;
box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
`
export const ItemImg=styled.img`
height:inherit;
width:inherit ;
border-radius:50%;
`
export const ItemQuantity=styled.div`
display:flex;
flex-direction:row;
align-items:center ;
margin:auto 10px ;

`
export const ShowQuantity=styled.div`
height:30px ;
width:50px ;
text-align:center ;
justify-content:center ;
margin:0 10px ;
border:1px solid black ;
border-radius:10px ;
`
export const ItemDetails=styled.div`
display:flex;
flex-direction:column ;
align-items:center ;
margin:auto 10px ;
`
