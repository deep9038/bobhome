import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
// import Bill from '../Bill/Bill';
function ItemButtons({setOpenBill, onClier}) {
  
  return (
    <>
    <Box style={{display:'flex',flexDirection:'row',justifyContent:'space-between', marginTop:'1rem'}}>
    <Button variant="contained" color="secondary" onClick={onClier}>
        Clere
      </Button>
      <Button variant="contained" color="primary" onClick={()=>setOpenBill(true)} >
      Order
    </Button>
    
    </Box>
    
    </>
  )
}

export default ItemButtons
