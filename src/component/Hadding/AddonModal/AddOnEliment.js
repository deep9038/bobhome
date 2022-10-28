import styled from "styled-components";

export const AddOnModalContainer=styled.form`

position:absolute ;
display:flex ;
top:50px ;
right:16rem ;
padding:15px ;
flex-direction:column ;
justify-content:center ;
align-items: center;
box-shadow: 6px 13px 18px -4px rgba(0,0,0,0.75); 
z-index:2;
background-color:rgb(235, 235, 235);
`
export const Buttongroup=styled.div`
display:flex ;
justify-content: space-between;
width:100% ;
margin-top:10px ;
`

export const ModalBoxContainer=styled.form`
background-color:rgba(223, 223, 239, 0.47);
height:100vh;
width:100vw;
position:absolute ;
top:0 ;
bottom:0 ;
right:0 ;
left:0 ;
z-index:4 ;
display:flex ;
justify-content:center ;
align-items:center ;

`
export const AddOnWraper=styled.div`

background-color:rgba(217, 158, 76, 0.47) ;
height: 60%;
width:40%;
position:relative ;
padding: 20px;
border-radius:10px ;
display:flex ;
flex-direction:column;
justify-content:center;
align-items:center ;
`

