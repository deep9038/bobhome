import React, { useEffect, useState } from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";
import Switch from "@material-ui/core/Switch";
import axios from 'axios';

const IndivisualCatogaryItem = ({item,setShowCatogaryItem,seteditCatmol,setUpdtCatId}) => {
    const [activation,setActivation]=useState()



    // handel Activation 

    const handelSwich=(e)=>{
        const chaked =e.target.checked
        setActivation(!chaked)
        axios.post(`http://127.0.0.1:2000/api//activetionStatusCategory/${item._id}`,
        
        {
            Active:activation
        }).then((res)=>console.log(res))
    }

    // nonComplite
   const onEdit=()=>{
    axios.post(`http://127.0.0.1:2000/api/categoryUpdate_post/${item._id}`).then((res)=>console.log(res))

    setUpdtCatId(item._id)
    seteditCatmol(true)
    setShowCatogaryItem(false)


   }
   const onDelit =()=>{
    axios.get(`http://127.0.0.1:2000/api/categoryDelete/${item._id}`)
    .then((res)=>{
        console.log(res);
    })
   }
   
    
  return (
   <>
   <div className='items-info' style={{display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:'darkgray',padding:'4px',borderRadius:'4px',marginBottom:'5px'}}>
                <div className='product-img'>
                    <img src={`http://192.168.29.146:2000${item.categoryImage[0].path.slice(6)}`} height="50px" alt='product' />
                </div>
                <div className='title' height="50px" style={{fontSize:"16px"}}>
                <span>Category :-</span><br></br>

                    <span>{item.categoryName}</span><br></br>
                    
                </div>

                
                <div className='button-item' style={{width:"100px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                   <h5 style={{cursor: 'pointer',color:"rgb(255, 230, 0)"}} onClick={onEdit}> <AiFillEdit /></h5>
                   <h5 style={{cursor: 'pointer',color:"red",marginLeft:"10px"}} onClick={onDelit}> <AiFillDelete /></h5>
                   <h5  ><Switch checked={item.Active} onChange={handelSwich}  />  </h5>
                    
                </div>   

            </div>
            
           
   </>
  )
}

export default IndivisualCatogaryItem
