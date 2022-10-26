import React, { useEffect, useState } from "react";

import { AddItemContainer, ImgInputContainer,Buttongroup } from "./AddItemEliment";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import { FcCompactCamera } from "react-icons/fc";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

import { TbCurrencyRupee } from "react-icons/tb";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FButton } from "../FormButtonEliment";
import axios from "axios";

const AddItem = ({ setAddItem, SubmitItem, ctagoryes, addOn ,setOpenAllItem}) => {
  const [additemImg, setAddItemIg] = useState();
  const [additemName, setAdditemName] = useState();
  const [additemPrice, setAddItemPrice] = useState();
  const [catid, setCatId] = useState();
  const [addItemType, setItemType] = useState();
  const [addAdon, setAddAddon] = useState([]);
  const [selectCat, setSelectCat] = useState();
  var formData = new FormData();
  const handlitemTye = (e) => {
    setItemType(e.target.value);
    console.log(e.target.value);
  };
  let aindex= []
  const handelcheboxdta = (e) => {
   
    let id = e.target.id
    console.log(id)
    let ischerd = e.target.checked;
    if (ischerd) {
      setAddAddon([...addAdon, e.target.id]);
    }else{
      let curret = addAdon.indexOf(id)
      aindex.push(curret)
      addAdon.splice(curret,1) 
    }
    
    for(let i=0; i<addAdon.length;i++){
      formData.append(`[${i}]`,addAdon[i])
    }

  };

  useEffect(() => {
    console.log(addAdon);
   
    console.log(aindex)
  }, [addAdon]);

  const handleChangeca = (e, id) => {
    setSelectCat(e.target.value);
    setCatId(id.props.id);
  };

  const baseUrl = "http://127.0.0.1:2000";
  const config = { headers: { "Content-Type": "multipart/form-data" } };

  const submitItem = (e) => {
    e.preventDefault();
    setAddItem(false);
    console.log(selectCat);
    console.log(addAdon);
    
    axios
      .post(
        `${baseUrl}/api/addItem_post`,
        {
          Image: additemImg,
          itemName: additemName,
          itemCategory: catid,
          itemAddOn:formData,
          itemType: addItemType,
          itemPrice: additemPrice,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <AddItemContainer
      method="post"
      action="/api/addItem_post"
      onSubmit={submitItem}
    >
      <ImgInputContainer>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input
            hidden
            accept=" image "
            type="file"
            onChange={(e) => setAddItemIg(e.target.files[0])}
          />
          <FcCompactCamera size={30} />
        </IconButton>
        <TextField
          onChange={(e) => setAdditemName(e.target.value)}
          value={additemName}
          label="Item Name"
          variant="outlined"
          style={{ width: "100%" }}
        />
      </ImgInputContainer>
      <ImgInputContainer>
        <FormControl
          variant="standard"
          style={{
            marginBottom: "1rem",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            onChange={(e) => setAddItemPrice(e.target.value)}
            style={{ width: "40%" }}
            label="Price"
            value={additemPrice}
            name="numberformat"
            type="number"
            id="formatted-numberformat-input"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <TbCurrencyRupee size={23} />
                </InputAdornment>
              ),
            }}
            variant="outlined"
          />
          <FormControl style={{ width: "40%" }}>
            <InputLabel id="demo-simple-select-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handlitemTye}
              label="Age"
              value={addItemType}
            >
              <MenuItem value={"Veg"}>Veg</MenuItem>
              <MenuItem value={"Non-Veg"}>Non-Veg</MenuItem>
            </Select>
          </FormControl>
        </FormControl>
      </ImgInputContainer>

      {/* catoption  */}
      <FormControl fullWidth style={{ marginBottom: "10px" }}>
        <InputLabel id="cilect-cat">Cetogries</InputLabel>
        <Select
          labelId="cilect-cat"
          id="demo-multiple-name"
          value={selectCat}
          label="Cataory"
          onChange={handleChangeca}
        >
          {ctagoryes.map((item) => {
            return (
              <MenuItem value={item.categoryName} id={item._id} key={item._id}>
                {item.categoryName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>

      <FormControl component="fieldset">
        <FormLabel component="legend">Addon Item</FormLabel>
        <FormGroup aria-label="position" row>
          {addOn.map((item) => {
            return (
              <FormControlLabel
                value={item.addOnItemName}
                control={
                  <Checkbox
                    value={item.addOnItemName}
                    id={item._id}
                    onChange={handelcheboxdta}
                  />
                }
                label={item.addOnItemName}
                labelPlacement="end"
              />
            );
          })}
        </FormGroup>
      </FormControl>

      <Buttongroup>
      <FButton type="submit" value="submit" onClick={()=>setOpenAllItem(false)}>
      Close 
      </FButton>
     <FButton type="button" value="submit" style={{backgroundColor:"blueviolet",width:"150px"}} onClick={()=>setOpenAllItem(true)}>
        See All Items
      </FButton>
     <FButton type="submit" value="submit">
        Submit
      </FButton>
      
     </Buttongroup>
    </AddItemContainer>
  );
};

export default AddItem;
