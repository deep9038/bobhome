import React from "react";
import { BodyItemHader } from "./SurchBarEliment";
import TextField from "@material-ui/core/TextField";
import  InputAdornment  from "@material-ui/core/InputAdornment";
import  IconButton  from "@material-ui/core/IconButton";
import {FcSearch} from 'react-icons/fc'
const Surchbar = ({setSurch,surch}) => {
  const handelSurch=(e)=>{
    setSurch(e.target.value)
  }
  return (
    <BodyItemHader>
      <TextField
      value={surch}
        id="standard-basic"
        style={{ width: "100%" }}
        label="Search Item"
        variant="filled"
        onChange={handelSurch}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FcSearch size={26}/>
            </InputAdornment>
          ),
        }}
        
      />
    </BodyItemHader>
  );
};

export default Surchbar;
