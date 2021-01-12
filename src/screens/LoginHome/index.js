import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Button,
  Box,
  Paper,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Typography,
  CardContent,
  Container,
  TextField,
  InputAdornment,
  Input,
  Grid,
  IconButton,
  Text,
  InputLabel,
  useForkRef,

} from '@material-ui/core';
import { Visibility, VisibilityOff, AccountCircle } from '@material-ui/icons';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { data } from '../../constants';
import HomePage from '../HomePage';


const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  IconButtonStyle: {
    padding: 0
  }

})
);



const LoginHome = () => {
  const [CheckOut, setCheckOut] = useState(false)


  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const classes = useStyles();

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (he) => (event) => {
    setValues({ ...values, [he]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ViewHome = (props) =>{

    setCheckOut(true)

    console.log(CheckOut)
    return {props}

  }

  const showEntry = () => {
    


    const dataObj = {
      userEmail,
      userPassword
    }
    
    const strgFor = JSON.stringify(dataObj)

    localStorage.setItem('dataObject', strgFor);
    // setUserEmail();
    
    // localStorage.setItem('Password', );
    // setUserEmail();
    
    console.log('submited ', strgFor)
  }

  return (
<Container maxWidth="sm" >
  <Card style={{ marginTop: '5%' }}>
    <CardActionArea>
      <h1 style={{
        color: "red",
        textAlign: "center"
      }}>Login Page</h1>
      <CardContent>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={12} spacing={1} alignItems="flex-end">
            <InputLabel>User Email</InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              label="Enter Your Email"

              value={userEmail} 
              onChange={e => setUserEmail(e.target.value)}
            />
          </Grid>
          <br />
          <Grid item xs={12} spacing={1} alignItems="flex-end">
            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={e => setUserPassword(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton className={classes.IconButtonStyle}
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              value={userPassword} 

            />
          </Grid>
        </Grid>

      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button variant="contained" color="primary" onClick={showEntry} >
        Login
      </Button>
      <Button variant="contained" color="primary" onClick={ViewHome} >
        View Home
      </Button>
    </CardActions>
  </Card>
</Container>
  );
}


export default LoginHome;