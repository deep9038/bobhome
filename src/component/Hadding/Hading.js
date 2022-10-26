import React, { useState } from "react";
import { Head, HeadLogo, HadingMau, HeadmenuItem } from "./HadingEliment";
import Logo from "../Matarial/Img/images.jpg";
import { FcAddDatabase } from "react-icons/fc";
import {BsClockHistory} from "react-icons/bs";
import Button from "@material-ui/core/Button";
import {IoFastFoodOutline} from 'react-icons/io5'
import AddOn from "./AddonModal/AddOn";
import {BiCategoryAlt} from 'react-icons/bi'
import AddCatagory from "./Addcatagory/AddCatagory";
import './HadigLogo.css'
const   Hading = ({setAddItem,addItem,ctagoryes,item}) => {
  const [ opencart,setOpenCart]=useState(false)
  const [ openAddon,setopenAddon]=useState(false)


  let handelCatogaryClick=()=>
  {
    setOpenCart(!opencart)
    setopenAddon(false)
    setAddItem(false)
  }

  let handelAddonClick=()=>
  {
    setOpenCart(false)
    setopenAddon(!openAddon)
    setAddItem(false)
  }

  let handelSetAddItemClick=()=>
  {
    setOpenCart(false)
    setopenAddon(false)
    setAddItem(!addItem)
  }

  return (
    <Head>
      <HeadLogo className="Anim" src={Logo} />
      <HadingMau>
      <HeadmenuItem onClick={handelCatogaryClick}>
      <Button
            variant="contained"
            style={{backgroundColor:"rgb(75, 75, 255)",color:"white"}}
            startIcon={<BiCategoryAlt/>}
            
          >
            Add Catagory
          </Button>
      </HeadmenuItem>
      {opencart?<AddCatagory  ctagoryes={ctagoryes} setOpenCart={setOpenCart}/>:''}



      <HeadmenuItem onClick={handelAddonClick}>
      <Button
            variant="contained"
            style={{backgroundColor:"rgb(75, 75, 255)",color:"white"}}
            startIcon={<IoFastFoodOutline/>}
            
          >
            Add Addon
          </Button>
      </HeadmenuItem>
      {openAddon? <AddOn setopenAddon={setopenAddon} item={item} />:''}
      
        <HeadmenuItem>
          <Button
            variant="contained"
            style={{backgroundColor:"rgb(75, 75, 255)",color:"white"}}
            startIcon={<FcAddDatabase />}
            onClick={handelSetAddItemClick}
          >
            Add Item
          </Button>
        </HeadmenuItem>
        <HeadmenuItem>
          <Button
            variant="contained"
            style={{backgroundColor:"rgb(75, 75, 255)",color:"white"}}
            startIcon={<BsClockHistory/>}
          >
            History
          </Button>
        </HeadmenuItem>
      </HadingMau>
    </Head>
  );
};

export default Hading;
