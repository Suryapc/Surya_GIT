import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';



const AdminMainPage = () => {
                return (
                  <>
                  <AppBar sx={{p:4}} position="static">
                     <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                           <Toolbar>
                           <Typography variant="h2">Admin</Typography>
                           </Toolbar>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                       <Button sx={{width:'50%'}}>
                        <Link href="login" 
                        sx={{backgroundColor:'white',marginLeft:'70%',padding:'10px'}}>Log out
                        </Link></Button>
                              
                        </Grid>
                  </Grid> 
                   </AppBar>
                   <Grid container>

                    <Grid item xs={12} sm={12} md={6}>

                      <Card variant="outlined" sx={{'marginTop':'1%','width':'40%','height':'20%' }}>
                      <CardContent>
                      <Typography sx={{fontSize:24,'&:hover':{color:'peru'}}} color="royalblue" gutterBottom>OPERATORS</Typography>
                      </CardContent>
                      </Card>

                      <Card variant="outlined" sx={{'marginTop':'1%','width':'40%','height':'20%' }}>
                      <CardContent>
                      <Typography sx={{fontSize:24,'&:hover':{color:'peru'}}} color="royalblue" gutterBottom>CHEMISTS</Typography>
                      </CardContent>
                      </Card>

                      <Card variant="outlined" sx={{'marginTop':'1%','width':'40%','height':'20%' }}>
                      <CardContent>
                      <Typography sx={{fontSize:24,'&:hover':{color:'peru'}}} color="royalblue" gutterBottom>PRODUCTS</Typography>
                      </CardContent> 
                     </Card> 

                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                     2
                    </Grid>

                   </Grid>
                   
                  </>   
                               );
              };
export default AdminMainPage;