import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Box from '@material-ui/core/Box';
import image from '../image.jpg';
import { fade } from '@material-ui/core/styles/colorManipulator';
import TextField from '@material-ui/core/TextField';

const backgroundImage = image;

const styles = (theme) => ({
  root: {
    color: theme.palette.common.white,

    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      height: '90vh',
      minHeight: 500,
      maxHeight: 1300,
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: 'center',
      backgroundColor: fade(theme.palette.common.black, 1),
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
    },
  },
  loginform: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'end',
    marginLeft: '78vw',
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  textField: {
    margin: '3px 0',
  },
  button: {
    margin: '20px 0',
    minWidth: 200,
  },
});

function Landing(props) {
  const { classes } = props;

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    // dispatch(login(email, password));\
    console.log('functionless filler');
  };

  return (
    <Box className={classes.root}>
      <form noValidate autoComplete='off'>
        <Box className={classes.loginform}>
          <Typography variant='h3'>Zion</Typography>
          <TextField
            id='outlined-secondary'
            label='Email or Ph. no'
            variant='outlined'
            color='secondary'
            className={classes.textField}
            name='email'
            value={email}
            onChange={onChange}
          />
          <TextField
            id='outlined-secondary'
            label='Password'
            variant='outlined'
            color='secondary'
            className={classes.textField}
            name='password'
            value={password}
            onChange={onChange}
          />
          <Button
            variant='contained'
            color='primary'
            onClick={onSubmit}
            className={classes.button}
          >
            Log in
          </Button>
        </Box>
      </form>
    </Box>
  );
}

Landing.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Landing);
