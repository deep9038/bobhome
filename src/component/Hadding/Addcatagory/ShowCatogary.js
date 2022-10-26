import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.css";
import IndivisualCatogaryItem from "./IndivisualCatogaryItem";

const ShowCatogary = ({ctagoryes,setShowCatogaryItem,seteditCatmol}) => {
  
  return (
    <>
    <div
      style={{
        position: "absolute",
        top: "200px",
       overflowY:'scroll',
        left: "51%",
        width: "350px",
        maxHeight: "370px",
        border: "1px solid black",
        transform: "TranslateX(-50%)",
        boxShadow: " 2px 8px 14px 0px rgb(0 0 0 / 75%)",
        boxSizing: "border-box",
        padding: "10px",
        zIndex: "10",
      }}
    >
      {ctagoryes.map((item)=>{
        console.log(item);
        return(
        <IndivisualCatogaryItem seteditCatmol={seteditCatmol} item={item} setShowCatogaryItem={setShowCatogaryItem} />
        )
      })}
      
     

    </div>



    </>
  );
};

export default ShowCatogary;
