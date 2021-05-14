import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import MuiAppBar from '@material-ui/core/AppBar';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'row',
    justifyContent: 'space-between',
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
  zion: {
    marginLeft: '47.5%',
    marginTop: 16,
    color: theme.palette.common.white,
  },
  right: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 32,
    marginRight: '6rem',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
});

function Navbar(props) {
  const { classes } = props;

  return (
    <div>
      <MuiAppBar elevation={0} position='fixed' className={classes.root}>
        {/* <Typography variant='h3' className={classes.zion}>
          Zion
        </Typography> */}

        <div className={classes.right}>
          <Link
            color='inherit'
            variant='h6'
            underline='none'
            className={classes.rightLink}
            href='/premium-themes/onepirate/sign-in/'
          >
            {'Sign Up'}
          </Link>
        </div>
      </MuiAppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
