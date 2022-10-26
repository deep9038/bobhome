import React, { useEffect, useState } from "react";
import { FootBody, Mony } from "./FootEliment";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {TbCurrencyRupee} from 'react-icons/tb'
import {BsPercent} from 'react-icons/bs'
import { useTheme } from '@material-ui/core/styles';
const Foot = ({totalPrice}) => {
  
  const[mainValu,setMainValue]=useState() 
  const[chagValu,setChangValu]=useState()
  const[tax,setTax]=useState(10)
  
  const HandelAmount=(e)=>{
    setMainValue(e.target.value)
  }
  useEffect(()=>{
      setChangValu(mainValu-totalPrice)
  },[mainValu])
  
  const theme = useTheme();

  return (
    <FootBody>
      <Mony>
        <Typography
          variant="subtitle2"
          
          style={{ marginRight: "10px" ,marginTop:'8px'}}
        >
          Deposit Amount:-
        </Typography>
        <TextField
        color="success"
        onChange={HandelAmount}
        style={{width:'60%'}}
          label={` Ricived form customer`}
          value={mainValu}
          
          
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TbCurrencyRupee size={23}  />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
         
          style={{ marginRight: "10px" ,marginTop:'8px'}}
        >
          Chang Amount:-
        </Typography>
        <TextField
        style={{width:'50%'}}
          label="Customers Chang"
          value={chagValu}
          disabled
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TbCurrencyRupee size={23} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
       
          style={{ marginRight: "10px" ,marginTop:'8px'}}
        >
          Tax Amount:-
        </Typography>
        <TextField
        style={{width:'50%'}}
          label="Goverment Tax '%'"
          value={tax}
          disabled
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <BsPercent size={23} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Mony>
      <Mony>
        <Typography
          variant="subtitle2"
       
          style={{ marginRight: "10px" ,marginTop:'8px'}}
        >
          Paybel Amount:-
        </Typography>
        <TextField
        style={{width:'50%'}}
          label="Payable for customer"
          value={totalPrice}
          disabled
          name="numberformat"
          id="formatted-numberformat-input"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TbCurrencyRupee size={23} />
              </InputAdornment>
            ),
          }}
          variant="standard"
        />
      </Mony>

    </FootBody>
  );
};

export default Foot;
