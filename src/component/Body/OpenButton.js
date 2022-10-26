import React from 'react'
import Button  from '@material-ui/core/Button'
const OpenButton = ({open}) => {
  return (
    <Button variant="contained" component="label" onClick={open(true)} >
      Add    
    </Button>

  )
}

export default OpenButton
