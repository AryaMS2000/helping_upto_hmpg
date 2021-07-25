import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useHistory } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import Admincomp from './Admin';
import Leadercomp from './Leadercomp';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight:theme.spacing(5),
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  /*const handleChange = (event) => {
    setAuth(event.target.checked);
  };*/

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  let history = useHistory();
  const handleSignout = () => {
    setAnchorEl(null);
    history.push('/');

  };
  const dataInfo=JSON.parse(localStorage.getItem("myInfo"))
  console.log(dataInfo.firstname)

  return (
    <div className={classes.root}>
      {/*<FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>*/}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="account of current user">
            
            <AccountCircle />
    </IconButton>
          <Typography variant="h6" className={classes.title}>
            Welcome  {dataInfo.firstname},
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
               onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <List>
                <ListItem alignItems='center'>
                <ListItemIcon ><PersonIcon/></ListItemIcon>
                <ListItemText>
                  Profile
                </ListItemText>
                   </ListItem>
                   </List>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                <List>
                <ListItem alignItems='center'>
                <ListItemIcon ><DashboardIcon/></ListItemIcon>
                <ListItemText>
                 Dashboard
                </ListItemText>
                </ListItem>
                </List>
                </MenuItem>
                <MenuItem onClick={handleClose}><Admincomp/></MenuItem>
                <MenuItem onClick={handleClose}><Leadercomp/></MenuItem>
                <MenuItem onClick={handleSignout}>
                <List>
                <ListItem alignItems='center'>
                <ListItemIcon ><ExitToAppIcon/></ListItemIcon>
                <ListItemText>
                 Signout
                </ListItemText>
                </ListItem>
                </List>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}