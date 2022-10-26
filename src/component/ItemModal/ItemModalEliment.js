import styled from "styled-components";
export const ModalContainer = styled.div`

position:absolute;
top:0 ;
bottom:0;
left:0 ;
right:0 ;
height:100vh;
display:flex ;
justify-content:center ;
align-items:center ;
width:100vw;
background-color:rgba(227, 224, 206, 0.29);
z-index:1 ;
`
export const ModalBody = styled.div`
margin:auto ;
flex-direction:column ;
height:93%;
display:flex ;
align-items:center ;
position:relative ;
width:30%;
box-shadow: 3px 4px 20px 0px rgba(0,0,0,0.75);
background: linear-gradient(180deg, rgba(255,215,65,0.7903536414565826) 0%, rgba(255,255,255,0.8827906162464986) 100%)
`

export const ModalImgContainer= styled.div`
display:flex ;
align-items:flex-start;
height:130px ;

margin:10px ;
border-radius:10px ;
width:90% ;

`
export const ModalImage=styled.img`


align-items:flex-start ;
height: inherit ;


/* box-shadow: 3px 4px 20px 0px rgba(0,0,0,0.75); */
border-radius:10px ;
`

export const ModalImageText=styled.div`
display:flex ;
flex-direction:column ;
align-items:flex-start;
justify-content:center ;
margin-top:10px ;

`
export const AddonSlider=styled.div`

display:flex ;
width:100% ;
align-items:flex-start ;

flex-direction:row;
flex-wrap:wrap ;
padding:10px ;
`
export const AddonItems =styled.span`


background-color:coral ;
color:black ;
height:40px ;
width:60px ;
display:flex ;
flex-direction:column;
justify-content:center ;
align-items:center ;
border-radius:10px ;
box-shadow: 10px 10px 20px -14px rgba(0,0,0,0.75);
`
export const TotalCostcontainer=styled.div`
width:100%;
height:100px ;
border-top:1px solid rgba(0, 0, 0, 0.43) ;
margin-top:auto ;
display:flex ;
justify-content:space-between ;
align-items:center ;
background-color:rgba(108, 108, 108, 0.87) ;
`
