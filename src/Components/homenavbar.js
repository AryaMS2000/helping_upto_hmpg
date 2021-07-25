import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core';
/*import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';*/
import List from '@material-ui/core/List';
//import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
import Admincomp from './Admin';
import Leader from './Leadercomp';
const drawerWidth = 240;
const post=1;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  
 
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "blue",
   
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
   
    padding: theme.spacing(3),
   
  },
}));

export default function Homenavbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="right"
      >
        <div className={classes.toolbar} />
        <div align='middle' padding="0px 0px 20px 0px">
        <b style={{color:"white"}}>Hello user ,</b>
        </div><br/><br/>
        <Divider /> 
        <List align='center'>
        <br/><br/><br/>
            <ListItem alignItems='center'>
            <ListItemIcon style={{color:'white'}}></ListItemIcon>
           <ListItemText>
          <NavLink to='/Register' style={{ textDecoration: 'none',color:'white', }}>
          <b>Profile</b> 
          </NavLink></ListItemText>
          </ListItem>
           <ListItem alignItems='center'>
          <ListItemIcon style={{color:'white'}}><DashboardIcon/></ListItemIcon>
          <ListItemText>
           <NavLink to='/' style={{ textDecoration: 'none',color:'white'}}>
           <b>DashBoard</b> </NavLink>
           </ListItemText>
           </ListItem>
           {post===1 ? <Admincomp/>:null}
           <Leader/>
           <ListItem alignItems='center'>
           <ListItemIcon style={{color:'white'}}><ExitToAppIcon/></ListItemIcon>
           <ListItemText>
          <NavLink to='/' style={{ textDecoration: 'none',color:'white' }}>
           <b>Signout</b> 
          </NavLink>
          </ListItemText>
          </ListItem>
          
        </List>
      </Drawer>
      </div>)
      }
