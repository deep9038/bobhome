import styled from "styled-components";
export const ItemContainer = styled.div`
  width: 100%;
  height: 60vh;

  overflow: hidden;
  /* position: relative; */

  border-radius: 10px;
`;
export const ItemContainerOverFlow = styled.div`
  top: 0;
  left: 0;
  bottom: -20px;
  right: -20px;
  display: grid;
  overflow: scroll;
  height: inherit;
  grid-template-columns: repeat(5, 1fr);
`;
export const ItemPrice = styled.div`

display:flex ;
justify-content:space-between ;
align-items:center;
flex-direction:row ;
`
export const Veg=styled.span`
display:flex;
flex-direction:column ;
align-items:center;
margin-right:10px ;

`
