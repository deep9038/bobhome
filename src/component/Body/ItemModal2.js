import React, { useEffect, useState } from "react";

import Typography from "@material-ui/core/Typography";
// import ItemTipeButton from "./ItemTipeButton";
import ItemTipeButton from "../ItemModal/ItemTipeButton";
import Button from "@material-ui/core/Button";
import {AiOutlineClose} from 'react-icons/ai'
import {
  ModalBody,
  ModalContainer,
  ModalImgContainer,
  ModalImage,
  ModalImageText,
  AddonSlider,
  AddonItems,
  TotalCostcontainer,
} from "../ItemModal/ItemModalEliment";
import Slide from "../Sider/Slide";
import IconButton from '@material-ui/core/IconButton';
const ItemModal2 = ({setOpenItemModal,filtered,item,onAdd}) => {
  // const [itemType, setItemType] = useState("");

 
 const itemdata=item.find((items)=>items.itemName === filtered)
    
    return (
      <ModalContainer>
        <ModalBody>
          <ModalImgContainer>
            <ModalImage src={`http://127.0.0.1:2000${itemdata.Image[0].path.slice(6)}`} />
            <ModalImageText>
              <Typography
                variant="h4"
                gutterBottom
                style={{ marginLeft: "20px",color:'#000000a8;',letterSpacing:'2px' }}
              >
               {itemdata.itemName}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                style={{ marginLeft: "20px",color:'#000000a8;',letterSpacing:'2px'  }}
              >
                ${itemdata.itemPrice}
              </Typography>
            </ModalImageText>
          </ModalImgContainer>
          
        
  
          <Typography variant="h4">Addon</Typography>
          
          <AddonSlider>
            <AddonItems>
              <h6 style={{ margin: "0" }}>salad</h6>
              <p style={{ margin: "0" }}>(300)</p>
            </AddonItems>
          </AddonSlider>
          <TotalCostcontainer>
            <h4 style={{ margin: "10px 10px",display:'inline-block' }}>
              TotalCost :- <h2>$400</h2>{" "}
            </h4>
            <Button variant="contained" color="primary" style={{marginRight:'20px'}} onClick={()=>onAdd(itemdata)}>Add</Button>
          </TotalCostcontainer>
  
          <IconButton aria-label="back" style={{position:'absolute',top:'1rem',right:'1rem'  }} onClick={()=>setOpenItemModal(false)} size="large">
    <AiOutlineClose />
  </IconButton>
        </ModalBody>
  
  
      </ModalContainer>
    );

 
};

export default ItemModal2
