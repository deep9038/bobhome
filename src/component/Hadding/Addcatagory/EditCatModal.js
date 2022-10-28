import React, { useState } from 'react'
import { CatModal, ModalBoxContainer } from './EditCatModalEliment'
import IconButton from '@material-ui/core/IconButton';
import {AiFillCamera} from 'react-icons/ai'
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const EditCatModal = ({seteditCatmol,UpdtCatId}) => {


const [editImage,setEditImage]=useState()
const [editName,setEditName]=useState()

const hndelEditCat=(e)=>{
 
  e.preventdefault()
  axios.post(`http://127.0.0.1:2000/api//categoryUpdate_post`,
  {

  })
  seteditCatmol(false)
}

  return (
    <ModalBoxContainer method='get' action='/categoryUpdate_post'>
        <CatModal>

        <IconButton color="primary" aria-label="upload picture"  component="label">
  <input hidden accept="image/*" onChange={e=>setEditImage(e.target.files[0])}  type="file" />
  <AiFillCamera size={100}/>
</IconButton>


<TextField id="outlined-basic" label="Outlined" onChange={e=>setEditName(e.target.value)} variant="outlined"  />
<input type="submit" value="Update"  onClick={hndelEditCat}/>

        </CatModal>
    </ModalBoxContainer>
  )
}

export default EditCatModal
