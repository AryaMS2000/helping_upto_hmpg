import React, { useState, useEffect } from "react";
import Homebar from "./Homebar";
import { Button, List, ListItem, ListItemIcon, ListItemText, Typography, Grid, Card, CardContent, Box } from '@material-ui/core';
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
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Radio, RadioGroup } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Formik, Form } from 'formik';

const useStyles = makeStyles({
  root: {
    minwidth: 200,
    // minheight: 500,
  },
  paper: {
    width: '80%',
    maxHeight: 435,
  },
});
//const dataInfo=JSON.parse(localStorage.getItem("myInfo"))

//const options = ['Oldage Home','Green Earth','Pet show','children Home','Animal Shelter','Day 4 Family'];
//  const [wevent,setWevent]=useState([])
//  const event="Weekend event"

function ConfirmationDialogRaw(props) {
  const [wevent, setWevent] = useState([])
  const event = "Weekend event"
  const { onClose, value: valueProp, open, ...other } = props;
  const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);
  useEffect(() => {
    axios.get('http://localhost:8081/account/events/getEventsList/true/Weekend event')

      .then(res => {
        console.log(res)
        console.log(res.data[0].event_id)
        setWevent(res.data)

      })
      .catch(err => {
        console.log(err)

      })
  }, [event])
  React.useEffect(() => {
    if (!open) {
      setValue(valueProp);
    }
  }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  const handleOk = () => {
    const evnt = value;
    localStorage.setItem('eventName', JSON.stringify(evnt));
    const dataInfo = JSON.parse(localStorage.getItem("eventName"))
    console.log(dataInfo)

    onClose();
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Dialog
      maxWidth="xs"
      onEntering={handleEntering}
      aria-labelledby="confirmation-dialog-title"
      open={open}
      {...other}
    >
      <DialogTitle id="confirmation-dialog-title">Events</DialogTitle>
      <DialogContent dividers>
        <RadioGroup
          ref={radioGroupRef}
          aria-label="ringtone"
          name="ringtone"
          value={value}
          onChange={handleChange}
        >
          {wevent.map((option) => (
            <FormControlLabel value={option.name} key={option.name} control={<Radio />} label={option.name} />
          ))}
        </RadioGroup>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleCancel} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOk} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

ConfirmationDialogRaw.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};


export default function Adminpg() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDialogue = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (

    <Box>
      <ConfirmationDialogRaw
        classes={{
          paper: classes.paper,
        }}
        id="ringtone-menu"
        keepMounted
        open={open}
        onClose={handleClose}

      />
      <Homebar />
      <Box mt={1} mb={3} align="center">
        <img src={logo} alt="logo" width='200' height='150' />
      </Box>

      {/* <Box ml={20}> */}
        <Grid container justifyContent="flex-start"
  alignItems="center" direction="column" >
          <Grid item xs={12} sm={6} md={4} >
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
                  <hr/>
                  <ListItem alignItems='center'>

                    <ListItemText>
                      <Typography variant='h6'>Manage Users</Typography>
                    </ListItemText>
                    <ListItemIcon ><AccountCircle /></ListItemIcon>
                  </ListItem>
                  <Button onClick={handleDialogue} startIcon={< PeopleOutlineIcon />} size="large" style={{ fontSize: 15, textTransform: 'none', margin: 10 }} >
                    {/* <ListItemText>*/}
                    <Typography >&nbsp;&nbsp;View Registered Users</Typography> </Button><br /><br />
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
          {/* <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <List>
                  <ListItem alignItems='center'>

                    <ListItemText>
                      <Typography variant='h6'>Manage Users</Typography>
                    </ListItemText>
                    <ListItemIcon ><AccountCircle /></ListItemIcon>
                  </ListItem><br /> */}
          {/* <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}> */}
          {/* <ListItem alignItems='center'> */}

          {/* <ListItemIcon ><PeopleOutlineIcon /></ListItemIcon> */}
          {/* <br />
                  <Button onClick={handleDialogue} startIcon={< PeopleOutlineIcon />} size="large" style={{ fontSize: 15, textTransform: 'none', margin: 10 }} > */}
          {/* <ListItemText>*/}
          {/* <Typography >&nbsp;&nbsp;Users who registered</Typography> </Button><br /><br /> */}
          {/* </ListItemText> */}
          {/* </ListItem>  */}
          {/* </Link>  */}
          {/* <Box mr={-5} >
                    <Link to="/Register" style={{ textDecoration: 'none', color: 'black' }}>
                      <ListItem alignItems='center'>
                        <ListItemIcon ><NotificationsIcon /></ListItemIcon>
                        <ListItemText>
                          Send remainders to e-mail id
                        </ListItemText>
                      </ListItem>
                    </Link>
                  </Box> */}
          {/* </List><br />
              </CardContent>
            </Card>
          </Grid> */}
        </Grid>
        {/* </Box> */}
        {/* </Paper> */}
      </Box>
    // </Box>
  )

}
