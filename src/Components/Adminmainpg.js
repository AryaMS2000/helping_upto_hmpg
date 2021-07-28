import React from "react";
import Homebar from "./Homebar";
import Box from '@material-ui/core/Box';
import { Paper, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Card, CardContent } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import logo from './logo.jpg';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import PublishSharpIcon from '@material-ui/icons/PublishSharp';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  root: {
    minwidth: 200,
    minheight:500,
  }
});

export default function Adminpg() {
  return (
    <Box>
      <Homebar />
      <Box mt={1} mb={5} align="center">
        <img src={logo} alt="logo" width='200' height='150' />
      </Box>
      {/*<Box mb={3} align='center' fontFamily='san-serif' fontSize='30px' color='blue'>
        <b>Welcome to Admin Page</b>
  </Box >*/}
      {/* <Paper  >  */}
      <Box ml={20}>
        <Grid container spacing={10} >
          <Grid item xs={12} sm={6} md={4}>
            <Card className={useStyles.root}>
              <CardContent>
                <List>
                  <ListItem alignItems='center'>
                    <ListItemText>
                      <Typography variant='h6'>Manage Events</Typography>
                    </ListItemText>
                    <ListItemIcon ><EventIcon /></ListItemIcon>
                  </ListItem>
                  <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem alignItems='center'>
                      <ListItemIcon ><AddIcon /></ListItemIcon>
                      <ListItemText>
                        Add Events
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem alignItems='center'>
                      <ListItemIcon ><EditIcon /></ListItemIcon>
                      <ListItemText>
                        Edit Events
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem alignItems='center'>
                      <ListItemIcon ><PublishSharpIcon /></ListItemIcon>
                      <ListItemText>
                        Upload past event photos
                      </ListItemText>
                    </ListItem>
                  </Link>

                </List>
              </CardContent>
            </Card>
          </Grid>
          {/* </Grid> */}
          {/* </Box> */}
          {/* </Paper> */}
          {/* <Paper > */}
          {/* <Box mr={30} ml={10}> */}
          {/* <Grid container > */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <List>
                  <ListItem alignItems='center'>

                    <ListItemText>
                      <Typography variant='h6'>Manage Users</Typography>
                    </ListItemText>
                    <ListItemIcon ><AccountCircle /></ListItemIcon>
                  </ListItem><br/>
                  <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItem alignItems='center'>

                      <ListItemIcon ><PeopleOutlineIcon /></ListItemIcon>
                      <ListItemText>
                        Users who registered
                      </ListItemText>

                    </ListItem> </Link>
                  <Box mr={-5} >
                    <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                      <ListItem alignItems='center'>
                        <ListItemIcon ><NotificationsIcon /></ListItemIcon>
                        <ListItemText>
                          Send remainders to e-mail id
                        </ListItemText>
                      </ListItem>
                    </Link>
                  </Box>
                </List><br/>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        {/* </Box> */}
        {/* </Paper> */}
      </Box>
      </Box>
      )

}
