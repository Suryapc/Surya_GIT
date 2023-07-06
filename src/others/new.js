import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const LoginPage = () => {
                const [email, setEmail] = useState("")
                const [password, setPassword] = useState("")
                const emailHandler = (e)=>{
   
                                setEmail(e.target.value);
                              }
                            
                const passwordHandler =(e)=>{
                           
                                setPassword(e.target.value);
                              }
               const onSubmitHandler = (e)=>{
                                e.preventDefault();
                                if(email.trim()===""){
                                                alert("Name field cant be Empty");
                                              }

                              }
return(
                <>
              <form className="ms-5 " onSubmit={(e)=>{onSubmitHandler(e)}}>
              <h3>User Name:</h3>
                   <div>
                    <input type="text"  id='inp_name'  className="text-danger"  
                    value={email} onChange={(e)=>{ emailHandler(e)}} />
                    </div><br/><br/>
                    {/* {nameError ? <p>Name length must be greater than 5</p>: " "} */}
                    <br/>
                 
                     <h3>Password :</h3>
                   <div className='text-white'> 
                      <input type="password" id='inp_pwd'  className=""
                       value={password} onChange={(e)=>{passwordHandler(e)}} />
                    </div><br/><br/>
                    {/* {pwdError ? <p>Name lengthmust be greater than 5</p>: " "} */}
                    <br/>
                  
                    <button>Submit</button>
                    
          
            </form>
            </>
               );
             }
             export default LoginPage; 