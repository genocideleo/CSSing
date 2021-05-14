import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      <span>
        {'© '}
        <span color='inherit'>Zion</span> {new Date().getFullYear()}
      </span>
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '42.5%',
    height: '10vh',
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component='footer' className={classes.root}>
      <Box className={classes.container}>
        <Copyright />
        <Typography style={{ marginLeft: '1rem' }} variant='caption'>
          Zion shoppping app from Quirks
        </Typography>
      </Box>
    </Typography>
  );
}
