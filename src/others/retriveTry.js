
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

import './HeaderSection.css'; 



function Retrive() {

   let headerStyle ={
      textAlign:'center',
      marginTop:'20px',
      color:'green',
   }
 

const [data, setData] = useState([]);


const navigate = useNavigate();

  const getData=()=>{

   axios.get(`http://localhost:8000/sign_up`)
   .then((getData) => {
      setData(getData.data);
              })
  }



const getDataId=()=>{
   
     let id = document.getElementById('id_value').value;

       axios.get(`http://localhost:8000/sign_up/${id}`)
      .then((getData) => {
         setData(getData.data);
                 })
       console.log(data)
      //const users []= {data.map((item) =>{item.email_id})}

     }
      
   return (
     <>  
     <h1 style={headerStyle}>Data From Sign _Up table </h1> 
     <input type="text" style={{marginLeft:'20%'}} id="id_value"/>

    <button style={{marginLeft:'2%',marginTop:'5%',backgroundColor:' cadetblue ',padding:'8px'}}
     onClick={getDataId}>fetch data</button>
     
  {/* {data.map((item) =><h5>{item.email_id}</h5>)} */}
       
        <div className='tableColumn'>
        {/* <table >
          <thead>
            <tr >
              <th>chemist_id</th>
              <th>pharmacy_name</th>
              <th>contact_name</th>
              <th>email_id</th>
              <th>mobile_no</th>
              <th>door_no</th>
              <th>street</th>
              <th>area</th>
              <th>city</th>
              <th>state_name</th>
              <th>pincode</th>
              <th>chemist_drug_licence_no</th>
              <th>chemist_photo</th>
            </tr>
          </thead>
          <tbody> */}
          
               {/* {data.map((item) => {
                       return (
                          <tr className="tableData" >
                           <td >{item.chemist_id}</td>
                           <td>{item.pharmacy_name}</td>
                            <td>{item.contact_name}</td>
                            <td>{item.email_id}</td>
                             <td>{item.mobile_no}</td>
                             <td>{item.door_no}</td>
                             <td>{item.street}</td>
                             <td>{item.area}</td>
                             <td>{item.city}</td>
                             <td>{item.state_name}</td>
                             <td>{item.pincode}</td>
                             <td>{item.chemist_drug_licence_no}</td>
                             <td>{item.chemist_photo}</td>
                          </tr>
                       );
                        })}
              </tbody> */}

              {/* </table> */}
              </div>



              <List  component="nav" aria-label="mailbox folders">
  <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List>
           </>);
}
export default Retrive;