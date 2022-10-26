import React from "react";
import {
  AddedItemContainer,
  ItemImg,
  ItemImgcontainer,
  ItemMenu,
  ItemQuantity,
  ShowQuantity,
  ItemDetails,
} from "./AddedItemsEliment";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import Typography from "@material-ui/core/Typography";

const AddedItems = ({ onRemove, cartItem, onAdd,setTolalPrice}) => {
  const itemsPrice = cartItem.reduce((a, c) => a + c.qty * c.itemPrice, 0);
  const taxPrice = itemsPrice * 0.10;
  setTolalPrice(itemsPrice+taxPrice)

  return (
    <AddedItemContainer>
      {cartItem.length === 0 && <div>Cart is empty</div>}
      {cartItem.filter((item)=>item.qty).map((item)=>
      
          <ItemMenu
            key={item._id}
            style={{ backgroundColor: "rgb(176, 116, 232)", color: "white" }}
          >
            <ItemImgcontainer>
              <ItemImg
                src={`http://127.0.0.1:2000${item.Image[0].path.slice(6)}`}
              />
            </ItemImgcontainer>
            <ItemDetails>
              <Typography variant="subtitle2" style={{ marginBottom: "0" }}>
                {item.itemName}
              </Typography>
              <Typography
                variant="overline"
                style={{ marginBottom: "0", lineHeight: "20px" }}
              >
                 {item.qty * item.itemPrice.toFixed(2)}
              </Typography>
            </ItemDetails>

            <ItemQuantity>
              <AiOutlinePlus onClick={()=>onAdd(item)} />
              <ShowQuantity>
                <Typography variant="body1" display="block" gutterBottom>
                  {item.qty}
                </Typography>
              </ShowQuantity>
              <AiOutlineMinus onClick={()=>onRemove(item)}/>
            </ItemQuantity>
            <MdDelete style={{ color: "red" }} />
          </ItemMenu>
        )}
    </AddedItemContainer>
  );
};

export default AddedItems;
