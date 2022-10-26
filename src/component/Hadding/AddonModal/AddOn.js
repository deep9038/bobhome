import React, { useState } from "react";
import { AddOnModalContainer,Buttongroup } from "./AddOnEliment";
import ShowAddOnItem from "./ShowAddOnItem";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormHelperText  from "@material-ui/core/FormHelperText";
import InputLabel  from "@material-ui/core/InputLabel";
import { TbCurrencyRupee } from "react-icons/tb";
import Button from "@material-ui/core/Button";
import { FButton } from "../../FormButtonEliment";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
const AddOn = ({ setopenAddon,item }) => {
  const [addonName, setAddonName] = useState();
  const [addonPrice, setAddonPrice] = useState();
  const [openAllAddon,setAllAddo ]=useState(false)
  const baseUrl = "http://127.0.0.1:2000";
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const handelAddonsubmit = (e) => {
    e.preventDefault();
    setopenAddon(false);
    axios
      .post(
        `${baseUrl}/api/addOnItem_post`,
        {
          addOnItemName: addonName,
          addOnItemPrice: addonPrice,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
     .catch(function (err){
      console.log(err);
     })
  };
   
  const notify = () =>{
    setAllAddo(!openAllAddon)
  } ;

  return (
    <>
    <AddOnModalContainer
      method="post"
      action="/api/addOnItem_post"
      onSubmit={handelAddonsubmit}
    >
      <TextField
        onChange={(e) => setAddonName(e.target.value)}
        id="outlined-basic"
        label="Addon Name"
        variant="outlined"
        color="success"
        value={addonName}
        style={{ width: "100%", marginBottom: "15px" }}
      />
      {/* <TextField
        style={{ marginBottom: "10px" }}
        label="Price"
        type="number"
        value={addonPrice}
        onChange={(e) => setAddonPrice(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <TbCurrencyRupee size={20} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      /> */}
    <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount" style={{margin:"5px",fontWeight:"bolder",color:"black"}}>Price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={addonPrice}
            onChange={(e) => setAddonPrice(e.target.value)}
            startAdornment={<InputAdornment position="start"> <TbCurrencyRupee size={20} /></InputAdornment>}
            label="Amount"
          />
        </FormControl>

        <Buttongroup>
      <FButton type="button" value="submit" style={{backgroundColor:"blueviolet",width:"150px"}} onClick={notify}>
        See Addon Item
      </FButton>
      <FButton type="submit" value="submit" >
        Submit
        
      </FButton>
    
      </Buttongroup>
    
    </AddOnModalContainer>
    {openAllAddon && <ShowAddOnItem item={item}/> }
    
    <ToastContainer position="top-center" theme="colored" autoClose={3000} />
    </>
  );
};

export default AddOn;
