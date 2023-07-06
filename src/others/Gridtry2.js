import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from "axios";


import { useState} from "react";

import { useNavigate } from "react-router-dom";

function ChemistFetch() {
   
  const [data, setData] = useState([]);


  const navigate = useNavigate();
  
  const getDataId=()=>{
   
    let record_id = document.getElementById('inpRecordNo').value;

      axios.get(`http://localhost:8000/sign_up/${record_id}`)
     .then((getData) => {
        setData(getData.data);
                })
      console.log(data)
     

    }
  
 return (
        <>
      
        <TextField 
           sx={{'marginLeft':'4%','marginTop':'4%','width':'15%'}} 
           id="inpRecordNo"
           type="text" 
           placeholder='Enter Id here..' 
           variant="outlined"/>
        <Button 
           sx={{'&:hover':{backgroundColor:'tan'},'marginTop':'4%','marginLeft':'1%','padding':'1%','width':'8%'}}
           variant="contained"
           onClick={getDataId}>Submit
        </Button>
        
        {/* <div className='d-flex justify-content-center'>            */}
       <TableContainer sx={{ 'width': '90%','alignItems':'center','margin':'5%' }}>
        <Table  aria-label="customized table">

          <TableHead>
              <TableRow>
                 <TableCell align="right">ID</TableCell>
                 <TableCell align="right">Pharmacy Name </TableCell>
                 <TableCell align="right">Contact Name</TableCell>
                 <TableCell align="right">Email</TableCell>
                 <TableCell align="right">Mobile Number</TableCell>
                 <TableCell align="right">Door No</TableCell>
                 <TableCell align="right">Street</TableCell>
                 <TableCell align="right">Area</TableCell>
                 <TableCell align="right">City</TableCell>
                <TableCell align="right">State </TableCell>
                <TableCell align="right">Pincode</TableCell>
                <TableCell align="right">Chemist Drug Licence No</TableCell>
                <TableCell align="right">Chemist Photo</TableCell> 
             </TableRow>
          </TableHead>

          <TableBody>
              {data.map((datas) => (
                  <TableRow >
      
                     <TableCell align="right" key={datas.id}>{datas.chemist_id}</TableCell>  
                     <TableCell align="right"key={datas.id} >{datas.pharmacy_name}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.contact_name}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.email_id}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.mobile_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.door_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.street}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.area}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.city}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.state_name}</TableCell> 
                     <TableCell align="right" key={datas.id}>{datas.pincode}</TableCell> 
                     <TableCell align="right" key={datas.id}>{datas.chemist_drug_licence_no}</TableCell>
                     <TableCell align="right" key={datas.id}>{datas.chemist_photo}</TableCell>
    
                  </TableRow>
                   ))}
           </TableBody>
        </Table>
        </TableContainer> 
         </>
  );
};

export default ChemistFetch;







// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { DataGrid } from '@mui/x-data-grid';

// function ChemistFetch() {
//   const [APIData, setAPIData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = () => {
//     axios
//       .get('http://localhost:5000/signup')
//       .then((response) => {
//         setAPIData(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 100 },
//     { field: 'shopname', headerName: 'Shop Name', width: 150 },
//     { field: 'firstname', headerName: 'First Name', width: 150 },
//     { field: 'lastname', headerName: 'Last Name', width: 150 },
//     { field: 'dob', headerName: 'Date of Birth', width: 150 },
//     { field: 'licenceno', headerName: 'Licence No.', width: 150 },
//     { field: 'qualification', headerName: 'Qualification', width: 150 },
//     { field: 'email', headerName: 'Email', width: 200 },
//     { field: 'phoneno', headerName: 'Phone No.', width: 150 },
//     { field: 'drivinglicenceno', headerName: 'Driving Licence No.', width: 200 },
//     { field: 'address', headerName: 'Address', width: 200 },
//     { field: 'state', headerName: 'State', width: 150 },
//     { field: 'country', headerName: 'Country', width: 150 },
//     { field: 'chemistlicence', headerName: 'Chemist Licence', width: 200 },
//     { field: 'drivinglicence', headerName: 'Driving Licence', width: 200 },
//     { field: 'chemistphoto', headerName: 'Chemist Photo', width: 200 }
//   ];

//   return (
//     <>
//       <DataGrid
//         columns={columns}
//         rows={APIData.map((dataItem) => ({ id: dataItem.id, shopname: dataItem.shopname, firstname: dataItem.firstname, lastname: dataItem.lastname, dob: dataItem.dob, licenceno: dataItem.licenceno, qualification: dataItem.qualification, email: dataItem.email, phoneno: dataItem.phoneno, drivinglicenceno: dataItem.drivinglicenceno, address: dataItem.address, state: dataItem.state, country: dataItem.country, chemistlicence: dataItem.chemistlicence, drivinglicence: dataItem.drivinglicence, chemistphoto: dataItem.chemistphoto }))}
//         autoHeight
//         autoPageSize
//         checkboxSelection
//         disableSelectionOnClick
//       />
//       <button onClick={getData}>Fetch Data</button>
//     </>
//   );
// }

// export default ChemistFetch;






   {/* <Grid style={{ fontSize: "12px" }} container spacing={1}>
                {APIData.map((APIData) => (
            
                    <div>
                        <Grid container sm={5}>
                <Grid sm={1}>{APIData.id}</Grid>
                <Grid sm={1}>{APIData.shopname}</Grid>
                <Grid sm={1}>{APIData.firstname}</Grid>
                <Grid sm={1}>{APIData.lastname}</Grid>
                <Grid sm={3}>{APIData.dob}</Grid>
                <Grid sm={2}>{APIData.licenceno}</Grid>
                <Grid sm={1}>{APIData.qualification}</Grid>
                <Grid sm={1}> {APIData.email}</Grid>
               

            </Grid>

            <Grid container sm={7}>
                <Grid spacing={2} sm={1}>{APIData.phoneno}</Grid>
                <Grid sm={1}>{APIData.drivinglicenceno}</Grid>
                <Grid sm={1}>{APIData.address}</Grid>
                <Grid sm={1}>{APIData.state}</Grid>
                <Grid sm={1}>{APIData.country}</Grid>
                <Grid sm={2}>{APIData.chemistlicence}</Grid>
               <Grid sm={3}>{APIData.drivinglicence}</Grid>
                <Grid sm={2}> {APIData.chemistphoto}</Grid>
            </Grid>
                    </div>
                    
                     ))}
    </Grid> */}



















// {/* <Grid container spacing={1}>
        
//         <Grid item xs={12} sm={1}>
//         {APIData.id}
//               </Grid>
//               </Grid>
         
          
//          <Grid container spacing={1}>
//         <Grid item xs={12} sm={1}>
//         {APIData.shopname}
//               </Grid>
//               </Grid>
//    <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.firstname}
//               </Grid>
//               </Grid>
//               <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.lastname}
//               </Grid>
//           </Grid>
//               <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.dob}
//               </Grid>
//               </Grid>
//               <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.licenceno}
//               </Grid>
//               </Grid>
//     <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.qualification}
//               </Grid>
//           </Grid>
//     <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.email}
//               </Grid>
//               </Grid>
          
//               <Grid container spacing={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.phoneno}
//               </Grid>
//               </Grid>
//     <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.drivinglicenceno}
//               </Grid>
//           </Grid>
//           <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.address}
//               </Grid>
//               </Grid>
//     <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.state}
//               </Grid>
//               </Grid>
//        <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.country}
//               </Grid>
//           </Grid>
//           <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.chemistlicence}
//               </Grid>
//               </Grid>
//        <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.drivinglicence}
//               </Grid>
//                   </Grid>
  
//   <Grid item xs={12} sm={1}>
//               <Grid item xs={12} sm={1}>
//         {APIData.chemistphoto}
//           </Grid>
//           </Grid> */}