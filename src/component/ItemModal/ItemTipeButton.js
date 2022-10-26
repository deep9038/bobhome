import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const ItemTipeButton = ({handelItemType}) => {
  return (
    <FormControl style={{marginTop:'20px'}}>
    <FormLabel id="demo-radio-buttons-group-label">Food Type</FormLabel>
    <RadioGroup
    row
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="Veg" control={<Radio onChange={()=>handelItemType('Veg')} />}  label="Veg" />
      <FormControlLabel value="Non-Veg" control={<Radio onChange={()=>handelItemType('Non-Veg')} />} label="Non-Veg" />
      <FormControlLabel value="All" control={<Radio onChange={()=>handelItemType('All')} />} label="All" />
    </RadioGroup>
  </FormControl>
  )
}

export default ItemTipeButton
