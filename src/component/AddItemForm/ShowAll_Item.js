import React from "react";
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import "bootstrap/dist/css/bootstrap.css";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
const ShowAll_Item = ({item}) => {
 
  return (
    <>
     
     <div
        className="items-info container-fluid"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px",
          borderRadius: "4px",
          marginBottom: "5px",
          color:"black",
          fontWeight:"bolder",
          
        }}
      >
        <div >
          Image
        </div>

        <div>
          <span>Name</span>
          <br></br>
        </div>
        <div style={{boxSizig:"border-box",paddingRight:"80px"}}>
          <span>Category</span>
          <br></br>
        </div>
        <div>
          <span>Type</span>
          <br></br>
        </div>
        <div>
            <span>Price</span>
        </div>

        <div
          className="button-item"
          style={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         
          Controll
        </div>
      </div>

     <div className="item-showing-container" style={{maxHeight:"55vh",overflow:"scroll",width:"100%"}}>
{item.map((item)=>{
   const onDelit =()=>{
    console.log(item);
    axios.get(`http://127.0.0.1:2000/api/itemDelete/${item._id}`).then((res)=>{
      console.log(res);
    })
  }
  return(
    
    <div
    className="items-info container-fluid"
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "darkgray",
      padding: "4px",
      borderRadius: "4px",
      marginBottom: "5px",
      backgroundColor:"rgb(176, 116, 232)",
      color:"white",
      fontWeight:"bolder"
    }}
  >
    <div className="product-img" style={{widthpx:'75px'}}>
      <img
        style={{width:'inharit'}}
        src={`http://127.0.0.1:2000${item.Image[0].path.slice(6)}`}
        height="50px"
        alt="product"
      />
    </div>

    <div>
      <span>Name</span>
      <br></br>
    </div>
    <div>
      <span>Category :-</span>
      <br></br>
    </div>
    <div>
      <span>West bengal Famous food</span>
      <br></br>
    </div>
    <div>
        <span>Price:-</span>
    </div>

    <div
      className="button-item"
      style={{
        width: "100px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h5 style={{ cursor: "pointer", color: "rgb(255, 230, 0)" }}>
        {" "}
        <AiFillEdit />
      </h5>
      <h5 style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}>
        {" "}
        <AiFillDelete onClick={onDelit} />
      </h5>
      <h5>
        <Switch />{" "}
      </h5>
    </div>
  </div>
  
  )
})}

</div>
     
    </>
  );
};

export default ShowAll_Item;
