import React, { useEffect, useState } from "react";

import {
  Addcatagory,
  ImgInputContainerCatagory,
  Buttongroup,
} from "./AddCatagoryEliment";
import IconButton from "@material-ui/core/IconButton";
import { FcCompactCamera } from "react-icons/fc";
import TextField from "@material-ui/core/TextField";
import FormButton from "../../FormButton";
import { FButton } from "../../FormButtonEliment";
import axios from "axios";
import { Translate } from "@material-ui/icons";
import ShowCatogary from "./ShowCatogary";
import EditCatModal from "./EditCatModal";
const AddCatagory = ({ setOpenCart,ctagoryes }) => {
  const [catImag, setCatimge] = useState();
  const [catName, setCatName] = useState();
  const [showCatogaryItem, setShowCatogaryItem] = useState(false);
  const [editCatmodal,seteditCatmol]=useState(false)
  const [UpdtCatId,setUpdtCatId]=useState('')
  // const [ allCat,setAllcat]=useState(false)
  const baseUrl = "http://127.0.0.1:2000";
  const config = { headers: { "Content-Type": "multipart/form-data" } };
  const handelsubmit = (e) => {
    e.preventDefault();
    setOpenCart(false);
    console.log(catImag);
    axios
      .post(
        `${baseUrl}/api/addCategory_post`,
        {
          categoryName: catName,
          categoryImage: catImag,
        },
        config
      )
      .then((res) => {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error.response.data.message);
      });
    
  };




  let showAllCatogary = () => {
    setShowCatogaryItem(!showCatogaryItem);
  };

  return (
    <>
      {/* // action='/api/addCategory_post' enctype="multipart/form-data" method='post' */}
      <Addcatagory
        method="post"
        action="/api/addCategory_post"
        onSubmit={handelsubmit}
      >
        <ImgInputContainerCatagory
          style={{
            border: "1px solid gray",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept=" image "
              type="file"
              onChange={(e) => setCatimge(e.target.files[0])}
            />
            <FcCompactCamera size={30} style={{ color: "greenyellow" }} />
          </IconButton>
          <TextField
            name="categoryName"
            value={catName}
            onChange={(e) => setCatName(e.target.value)}
            label="Item Name"
            variant="standard"
            style={{ width: "100%" }}
          />
        </ImgInputContainerCatagory>
        <Buttongroup>
          <FButton
            type="button"
            value="submit"
            style={{ backgroundColor: "blueviolet", width: "150px" }}
            onClick={showAllCatogary}
          >
            See All Catogary
          </FButton>
          <FButton type="submit" value="submit">
            Submit
          </FButton>
        </Buttongroup>
      </Addcatagory>
      { showCatogaryItem &&  <ShowCatogary setUpdtCatId={setUpdtCatId} seteditCatmol={seteditCatmol}  setShowCatogaryItem={setShowCatogaryItem} ctagoryes={ctagoryes} /> }
      {editCatmodal && <EditCatModal UpdtCatId={UpdtCatId} seteditCatmol={seteditCatmol} />}
    </>
  );
};

export default AddCatagory;
