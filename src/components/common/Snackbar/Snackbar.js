import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CommonSnackbar = props => {
  const classes = useStyles();
  const {
    alertType = 'info',
    show = false,
    handleClose,
    alertContent = ''
  } = props;

  return (
    <div className={classes.root}>
      <Snackbar
        open={show}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'top'
        }}
      >
        <Alert onClose={handleClose} severity={alertType}>
          {alertContent}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CommonSnackbar;
