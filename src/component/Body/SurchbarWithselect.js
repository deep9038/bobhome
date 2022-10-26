import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import NoContect from "./NoContect";
import OpenButton from "./OpenButton";
export default function SurchWithSelect(props ) {
  const [inputValue, setInputValue] = useState("");

  const [options, setOptions] =useState(
    [
        {
          id:1,
          Name:'ill pal',
          PhonNum:9038440784,
        },
        {
          id:2,
          Name:'taniya saha',
          PhonNum:8589643454,
        },
        {
          id:3,
          Name:'bill sifer',
          PhonNum:4565783490,
        },
        {
          id:4,
          Name:'rob luchi',
          PhonNum:6789054328,
        },
        {
          id:5,
          Name:'monky D liffy',
          PhonNum:1000336789,
        }
      ]
  );

 


  return (
    <Autocomplete
      disabled={props.disbelcusSurch}
      options={options}
      disableCloseOnSelect
      noOptionsText={<OpenButton open={props.setOpenCustomeradd}/>}
      getOptionLabel={(option) => `${option.Name}(${option.PhonNum})`}
      onInputChange={(e, newValue) => {
        setInputValue(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Select"
          variant="outlined"
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              options.findIndex((o) => o.title === inputValue) === -1
            ) {
              setOptions((o) => o.concat({ title: inputValue }));
            }
          }}
        />
      )}
    />
  );
}