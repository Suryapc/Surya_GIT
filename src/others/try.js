import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TextField, FormControl, Button } from "@mui/material";
const Try = () => {
return(
  <>
<Grid container >
  <Grid item xs={6}>
  <Box  sx={{backgroundColor:'cornflowerblue ',
            height:'100%',
            textAlign:'center',
            fontFamily:'sans-serif',
           marginTop:'10%'
          }}>
       <Typography variant="h2">ASTITVA</Typography>
       </Box>
  </Grid>
  <Grid item xs={6}>
  <Typography sx={{marginLeft:'10%',textDecoration: 'underline',color:'primary.main'}} variant='h3'>Login Form</Typography>
     <div style={{border:'1px solid red',width:'520px', height:'500px',marginLeft:'5%'}}>
     <form className="body_design" > 
  <TextField  required
  variant="standard"  
  label="Email"
  type="email"
   sx={{marginLeft:'2%',marginTop:'5%',width:'21%'}} 
   />
   <br></br>
  <TextField required 
  variant="standard" 
   label="Password" sx={{marginLeft:'20%',marginTop:'5%',width:'21%'}}  
  />
   <br></br> <br></br>

   <Button sx={{backgroundColor:'slategray',marginLeft:'20%','&:hover':{backgroundColor:'tan'}}} 
   className="mt-5" type="submit" variant="contained">Submit</Button>



  <Button  sx={{marginLeft:'1%',backgroundColor:'slategray'}} 
  type="reset"  className="mt-5" variant="contained">Cancel</Button> 
   </form> 
   </div>
  </Grid>
 
</Grid>
</>)
}

export default Try;