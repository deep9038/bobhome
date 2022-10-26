import React, { useEffect } from "react";
import {
  BodyDiv,
  BodyItemPanelContainer,
  BodyEditPanelContainer,
  EditPanel,
} from "./BodyEliment";
import ItemSection from "./ItemSection";
import Surchbar from "./Surchbar";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

import { useState } from "react";
import SurchWithSelect from "./SurchbarWithselect";
import AddedItems from "./AddedItems";
import ItemButtons from "./ItemButtons";
import NoContect from "./NoContect";
import AddItem from "../AddItemForm/AddItem";
import ShowAll_Item from "../AddItemForm/ShowAll_Item";

const Body = ({
  setTolalPrice,
  setcustomer,
  addItem,
  onClier,
  onAdd,
  onRemove,
  cartItem,
  item,
  setOpenBill,
  setAddItem,
  SubmitItem,
  ctagoryes,
  addOn,
  setOpenAllItem,
  openAllItem,
  customer,
}) => {
  const [customerSurh, setCustomerSurch] = useState(true);
  const [add, setAdd] = useState("");
  const [openCustomerAdd, setOpenCustomeradd] = useState(false);
  const [surch, setSurch] = useState("");
  
  const HandelRadio = (e) => {
    setAdd(e.target.value);
    if (e.target.value === "Customar"){
      setCustomerSurch(false);
    } else {
      setCustomerSurch(true);
    }
    console.log(customerSurh);
  };

  return (
    <BodyDiv>
      <BodyItemPanelContainer container>
        <Surchbar setSurch={setSurch} surch={surch} />
        {openAllItem ? (
          <ShowAll_Item item={item} />
        ) : (
          <ItemSection
            onAdd={onAdd}
            surch={surch}
            item={item}
            ctagoryes={ctagoryes}
          />
        )}
      </BodyItemPanelContainer>

      <BodyEditPanelContainer container>
        <h2 style={{ textAlign: "center", fontWeight: "bolder" }}> Panal </h2>
        {addItem ? (
          <AddItem
            ctagoryes={ctagoryes}
            SubmitItem={SubmitItem}
            setAddItem={setAddItem}
            addOn={addOn}
            setOpenAllItem={setOpenAllItem}
          />
        ) : (
          <EditPanel>
            <FormControl>
              <SurchWithSelect
                disbelcusSurch={customerSurh}
                openCustomerAdd={openCustomerAdd}
                setOpenCustomeradd={setOpenCustomeradd}
              />
              <RadioGroup row name="CustomerType" defaultValue="stop">
                <FormControlLabel
                  value="Walk in Customar"
                  control={<Radio />}
                  label="Walk in Customar"
                  labelPlacement="start"
                  onChange={(e) => HandelRadio(e)}
                />
                <FormControlLabel
                  value="Customar"
                  control={<Radio />}
                  label="Customar"
                  labelPlacement="start"
                  onChange={(e) => HandelRadio(e)}
                />
              </RadioGroup>
              {openCustomerAdd ? (
                <NoContect
                  setOpenCustomeradd={setOpenCustomeradd}
                  setcustomer={setcustomer}
                  customer={customer}
                />
              ) : (
                ""
              )}

              <AddedItems
                onRemove={onRemove}
                cartItem={cartItem}
                onAdd={onAdd}
                setTolalPrice={setTolalPrice}
              />
              <ItemButtons setOpenBill={setOpenBill} onClier={onClier} />
            </FormControl>
          </EditPanel>
        )}
      </BodyEditPanelContainer>
    </BodyDiv>
  );
};

export default Body;
