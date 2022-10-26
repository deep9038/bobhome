import React from 'react'
import { CatModal, ModalBoxContainer } from './EditCatModalEliment'
import IconButton from '@material-ui/core/IconButton';
import {AiFillCamera} from 'react-icons/ai'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const EditCatModal = ({seteditCatmol}) => {
  return (
    <ModalBoxContainer>
        <CatModal>

        <IconButton color="primary" aria-label="upload picture"  component="label">
  <input hidden accept="image/*" type="file" />
  <AiFillCamera size={100}/>
</IconButton>


<TextField id="outlined-basic" label="Outlined" variant="outlined"  />
<Button variant="contained" color="secondary" onClick={()=>seteditCatmol(false)}>
  Update
</Button>
        </CatModal>
    </ModalBoxContainer>
  )
}

export default EditCatModal
