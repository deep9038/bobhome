import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Realcard.css";
import Badge from '@material-ui/core/Badge';


const Realcard = ({item,setProduct}) => {
  const [invisible,setInvisibal]=useState(true)
  const handelclick=()=>{
    setInvisibal(!invisible)
    setProduct(item)
  }
  return (
    <li>
      <Badge color="primary" variant="dot" invisible={invisible}>
          
       
      <Card sx={{ maxWidth: 200 }} onClick={handelclick} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="60"
        image={`http://127.0.0.1:2000${item.Image[0].path.slice(6)}`}
      />
      <CardContent style={{margin:'0',padding:'0'}}>
        <Typography gutterBottom variant="body2" component="div">
          {item.itemName}
        </Typography>
      
      </CardContent>
     
    </Card>
    </Badge>
      </li>
  );
};

export default Realcard;
