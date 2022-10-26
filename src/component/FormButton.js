import React from 'react'
import { FButton } from './FormButtonEliment'

const FormButton = ({handelButton}) => {
  return (
    <FButton type="submit" value="Submit" onClick={handelButton}>
        Submit
    </FButton>
  )
}

export default FormButton
