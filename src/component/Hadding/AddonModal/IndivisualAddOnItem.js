import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';

const IndivisualAddOnItem = ({item}) => {
  console.log(item);
  const onDelite=()=>{
    axios.get(`http://127.0.0.1:2000/api/deleteAddOnItem/${item._id}`).then((res)=>console.log(res))
  }
  return (
    <>
    <div className='items-info' style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:'40px',marginBottom:'5px',background:'darkgray',padding:'4px',borderRadius:"4px"}}>
                
                 <div className='title' height="50px" style={{fontSize:"12px",fontWeight:'bold'}}>
                     
                     <span>Category</span><br></br>
                     <span>{item.addOnItemName}</span><br></br>
                 </div>
                   
                 <div className='price'  style={{fontSize:'10x'}}>
                    <h3>{item.addOnItemPrice}</h3>
                </div>
                 
                 <div className='button-item' style={{width:"80px",display:"flex",justifyContent:"space-around"}}>
                 <h3 style={{cursor: 'pointer',color:"orangered"}}> <AiFillEdit size={15} /></h3>
                   <h3 style={{cursor: 'pointer',color:"red"}} onClick={onDelite} > <AiFillDelete size={15} /></h3>
                     
                 </div>   
 
             </div>
    </>
  )
}

export default IndivisualAddOnItem
