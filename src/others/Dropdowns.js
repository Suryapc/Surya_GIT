import React from 'react';
import {Select, MenuItem} from "@mui/material";
import {states} from '../pages/states';
import {useState} from "react";






function Dropdowns () {

  const [state_name, setstate_name] = useState("")
const stateHandler = (e)=>{setstate_name(e.target.value);}  


const getState = () => {
  return states.map((state) => {
    return (
      <option value={state.name} key={state.dial_code}>
        {state.name}
      </option>
    );
  });
};
    return (
       <Select 
       value={state_name}
       onChange={stateHandler}
        sx={{
       marginTop:35,        
          width: 250,
          height: 50,
        }}
      >
       <MenuItem value ="" disabled >select state</MenuItem> 
       {getState()}
      </Select>
)
}
export default Dropdowns;
