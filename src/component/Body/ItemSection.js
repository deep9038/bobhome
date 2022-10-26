import React from "react";
import { useState } from "react";
import {
  ItemContainer,
  ItemContainerOverFlow,
  ItemPrice,
  Veg,
} from "./ItemSectionEliment";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import ItemModal from "../ItemModal/ItemModal";

import axios from "axios";
import ItemModal2 from "./ItemModal2";
// import Button from "@material-ui/core/Button";
// import {AiFillFileAdd} from 'react-icons/ai'
const ItemSection = ({ surch, ctagoryes, item,onAdd}) => {
  const [openItrmModal, setOpenItemModal] = useState(false);
  const [modaldtaForcat, setModaldataForcat] = useState([]);
  const [openItrmModal2, setOpenItem2Modal] = useState(false);
  const [catid, setcatid] = useState();
  const [itemId, setItemId] = useState();
  

  var IcItems = [];

  for (let i = 0; i < item.length; i++) {
    // console.log(`eydekho array${i}`,  item[i].itemCategory._id);
    if (item[i].itemCategory !== undefined) {
      IcItems.push(item[i].itemCategory);
    } else {
      // console.log('y',item[i]);
      IcItems.push(item[i]);
    }
  }
 
  var lastarr = [];
  const uniq = IcItems.filter((item) => {
    const isDub = lastarr.includes(item._id);
    if (!isDub) {
      lastarr.push(item._id);
      return true;
    }
    return false;
  });

  const postItem = (e) => {
    axios.get(`http://127.0.0.1:2000/api/itemOfCategory/${e}`).then((res) => {
      setModaldataForcat(res.data.result);
      
    });



    setOpenItemModal(true);
    setcatid(e);
    //axios for
  };
  const openItemModal = (e) => {
    setItemId(e);
    setOpenItem2Modal(true);
  };

  return (
    <>
      <ItemContainer>
        <ItemContainerOverFlow>
          {uniq
            .filter((item) => item.Active === true)
            .map((filtered) => {
              if (filtered.categoryName) {
                if (filtered.categoryName.includes(surch)) {
                  return (
                    <>
                      <Card
                        key={filtered._id}
                        style={{
                          margin: "5px",
                          height: "150px",
                          width: "130px",
                          marginBottom: "10px",
                          boxShadow: "rgb(0 0 0 / 40%) 1px 3px 5px 3px",
                        }}
                        onClick={() => postItem(filtered._id)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="50"
                            width="50"
                            image={`http://127.0.0.1:2000${filtered.categoryImage[0].path.slice(
                              6
                            )}`}
                            alt="fishfry Img"
                          />
                          <CardContent style={{ padding: "0", height: "10px" }}>
                            <h6 style={{ margin: "0" }}>
                              Category :-{filtered.Category}
                            </h6>
                            <Typography
                              gutterBottom
                              variant="body2"
                              style={{
                                marginleft: "",
                                display: "flex",
                                justifyContent: "",
                                alignItems: "center",
                                marginTop: "5px",
                                fontSize: "8px",
                              }}
                              component="div"
                            >
                              <p style={{ margin: "0", fontSize: "1rem" }}>
                                {" "}
                                {filtered.categoryName}
                              </p>
                            </Typography>
                            <ItemPrice
                              style={{
                                marginTop: "10px",
                                background:
                                  " linear-gradient(180deg, rgba(255,215,65,0.7903536414565826) 0%, rgba(255,255,255,0.8827906162464986) 100%)",
                                height: "50px",
                              }}
                            >
                              

                              <Veg style={{marginLeft:'10px'}}>
                                <Chip
                                  label=""
                                  component="a"
                                  href="#basic-chip"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    backgroundColor: "green",
                                    marginBottom: "7px",
                                  }}
                                />
                                <Chip
                                  label=""
                                  component="a"
                                  href="#basic-chip"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    backgroundColor: "red",
                                  }}
                                />
                              </Veg>
                            </ItemPrice>
                          </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                    <Button variant="contained" color="primary"  startIcon={<AiFillFileAdd style={{color:'white'}}/>} >
                      Add
                    </Button>
                  </CardActions> */}
                      </Card>
                      {openItrmModal ? (
                        <ItemModal
                          setOpenItemModal={setOpenItemModal}
                          modaldtaForcat={modaldtaForcat}
                          catid={catid}
                          onAdd={onAdd}
                          ctagoryes={ctagoryes}
                        />
                      ) : (
                        ""
                      )}
                    </>
                  );
                }
              } else {
                if (filtered.itemName.includes(surch)) {
                  return (
                    <>
                      <Card
                        style={{
                          margin: "5px",
                          height: "150px",
                          width: "130px",
                          marginBottom: "10px",
                          boxShadow: "rgb(0 0 0 / 40%) 1px 3px 5px 3px",
                        }}
                        onClick={() => openItemModal(filtered.itemName)}
                      >
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="50"
                            width="50"
                            image={`http://127.0.0.1:2000${filtered.Image[0].path.slice(
                              6
                            )}`}
                            alt="fishfry Img"
                          />
                          <CardContent style={{ padding: "0", height: "10px" }}>
                            <h6 style={{ margin: "0" }}>Item :-</h6>
                            <Typography
                              gutterBottom
                              variant="body2"
                              style={{
                                marginleft: "",
                                display: "flex",
                                justifyContent: "",
                                alignItems: "center",
                                marginTop: "5px",
                                fontSize: "8px",
                              }}
                              component="div"
                            >
                              <p style={{ margin: "0", fontSize: "1rem" }}>
                                {" "}
                                {filtered.itemName}
                              </p>
                            </Typography>
                            <ItemPrice
                              style={{
                                marginTop: "10px",
                                background:
                                  " linear-gradient(180deg, rgba(255,215,65,0.7903536414565826) 0%, rgba(255,255,255,0.8827906162464986) 100%)",
                                height: "50px",
                              }}
                            >
                              <Typography
                                gutterBottom
                                variant="h5"
                                style={{
                                  marginBottom: "0",
                                  marginLeft: "0",
                                  color: "black",
                                  fontSize: "12px",
                                  fontWeight: "bolder",
                                }}
                                component="div"
                              >
                                <span
                                  style={{
                                    color: "black",
                                    marginLeft: "8px",
                                    fontSize: "13px",
                                  }}
                                >
                                  {" "}
                                  ₹{" "}
                                </span>
                                {filtered.itemPrice}
                              </Typography>

                              <Veg>
                                <Chip
                                  label=""
                                  component="a"
                                  href="#basic-chip"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    backgroundColor: "green",
                                    marginBottom: "7px",
                                  }}
                                />
                                <Chip
                                  label=""
                                  component="a"
                                  href="#basic-chip"
                                  style={{
                                    height: "10px",
                                    width: "10px",
                                    backgroundColor: "red",
                                  }}
                                />
                              </Veg>
                            </ItemPrice>
                          </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                    <Button variant="contained" color="primary"  startIcon={<AiFillFileAdd style={{color:'white'}}/>} >
                      Add
                    </Button>
                  </CardActions> */}
                      </Card>
                      {openItrmModal2 ? (
                        <ItemModal2
                          setOpenItemModal={setOpenItem2Modal}
                          filtered={itemId}
                          item={item}
                          onAdd={onAdd}
                        />
                      ) : (
                        ""
                      )}
                    </>
                  );
                }
              }
            })}
        </ItemContainerOverFlow>
      </ItemContainer>
    </>
  );
};

export default ItemSection;
