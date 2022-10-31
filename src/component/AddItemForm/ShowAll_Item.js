import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.css";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import './ShowallItem.css'

const ShowAll_Item = ({ item }) => {


  const handelEdit=()=>{

  }

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
          color: "black",
          fontWeight: "bolder",
        }}
      >
        <div>Image</div>

        <div>
          <span>Name</span>
          <br></br>
        </div>
        <div style={{ boxSizig: "border-box" }}>
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

      <div
        className="item-showing-container"
        style={{ maxHeight: "55vh", overflow: "scroll", width: "100%" }}
      >
        {item.map((item) => {
         var active = !item._id
          const handelActive=()=>{
              axios.post(`http://127.0.0.1:2000/api/activetionStatusItem/${item._id}`,{
                Active:active
              }).then((res)=>{
                console.log(res);
              })
          }




          const onDelit = () => {
            axios
              .get(`http://127.0.0.1:2000/api/itemDelete/${item._id}`)
              .then((res) => {
                console.log(res);
              });
          };
          return (
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
                backgroundColor: "rgb(176, 116, 232)",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              <div className="product-img" style={{ widthpx: "75px" }}>
                <img
                  style={{ width: "inharit" }}
                  src={`http://127.0.0.1:2000${item.Image[0].path.slice(6)}`}
                  height="50px"
                  alt="product"
                />
              </div>

              <div className="item-things" >
                <span>{item.itemName}</span>
                <br></br>
              </div>
              <div className="item-things" >
                <span>{item.itemCategory ? "None" :item.itemName }</span>
                <br></br>
              </div>
              <div className="item-things" >
                <span>{item.itemType}</span>
                <br></br>
              </div>
              <div className="item-things" >
                <span>₹{item.itemPrice}</span>
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
                <h5 style={{ cursor: "pointer", color: "rgb(255, 230, 0)" }}   onClick={handelEdit(item._id)}>
               
                  <AiFillEdit />
                </h5>
                <h5
                  style={{
                    cursor: "pointer",
                    color: "red",
                    marginLeft: "10px",
                  }}
                >
                  {" "}
                  <AiFillDelete onClick={onDelit} />
                </h5>
                <h5  >
                  <Switch checked={item.Active} onChange={handelActive}/>{" "}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ShowAll_Item;
