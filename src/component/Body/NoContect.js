import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
const NoContect = ({ setcustomer, setOpenCustomeradd, customer }) => {
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const handelCustomer = (e) => {
    const newDta = { ...customer };
    newDta[e.target.name] = e.target.value;
    setcustomer(newDta);
  };
  const handelform = (e) => {
    e.preventDefault();
    setOpenCustomeradd(false);
    console.log(customer);
    axios.post(
      "http://127.0.0.1:2000/api/addCustomer_post",
      {
        CustomerName: customer.CustomerName,
        CustomerNumber: customer.CustomerNumber,
      }
    ).then((res)=>{
      console.log(res);
    })
  };
  return (
    <Box
      component="form"
      onSubmit={handelform}
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
    >
      <TextField
        label="Name"
        name="CustomerName"
        id="filled-size-small"
        defaultValue=""
        variant="filled"
        size="small"
        onChange={(e) => handelCustomer(e)}
        style={{ marginBottom: "10px" }}
      />
      <TextField
        label="Number"
        onChange={(e) => handelCustomer(e)}
        name="CustomerNumber"
        id="filled-size-normal"
        defaultValue=""
        variant="filled"
        style={{ marginBottom: "10px" }}
      />

      <input
        type="submit"
        value="submit"
        style={{
          backgroundColor: "green",
          border: "none",
          borderRadius: "4px",
        }}
      />
    </Box>
  );
};

export default NoContect;
