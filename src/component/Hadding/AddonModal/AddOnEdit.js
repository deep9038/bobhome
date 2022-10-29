import React from 'react'
import { ModalBoxContainer } from '../Addcatagory/EditCatModalEliment'
import { AddOnWraper } from './AddOnEliment'
import TextField from '@material-ui/core/TextField'
import { TbCurrencyRupee } from "react-icons/tb";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useState } from 'react';
import axios from 'axios';
import { FButton } from '../../FormButtonEliment';
function AddOnEdit({setOpenAdd}) {
    const [newaddonname,setnewAddOnName]=useState()
    const [newAddonPrice,setNewAddOnPrice]=useState()
    const handelUpdate=()=>{
        setOpenAdd(false)
        
        axios.post(`http://127.0.0.1:2000/api/updateAddOnItem`,
        {
            addOnItemName:newaddonname,
            addOnItemPrice:newAddonPrice 
        }).then((res)=>console.log(res))
    }
  return (  
    <ModalBoxContainer  >
        <AddOnWraper  > 
        
            <TextField id="filled-basic" label="New AddOn Price" onChange={(e)=>setnewAddOnName(e.target.value)} variant="filled" style={{margin:'10px 0',backgroundColor:'#fff'}}  />
            <TextField id="filled-basic" label="New Addon Price" onChange={(e)=>setNewAddOnPrice(e.target.value)} variant="filled" startAdornment={<InputAdornment position="start"> <TbCurrencyRupee size={20} /></InputAdornment>} style={{margin:'10px 0',backgroundColor:'#fff'}}/>
          

          <FButton  value="submit" onClick={handelUpdate} >
          Submit
          </FButton>


        </AddOnWraper>
        

    </ModalBoxContainer>
  )
}

export default AddOnEdit
