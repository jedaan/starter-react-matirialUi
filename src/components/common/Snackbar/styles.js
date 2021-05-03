import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    marginTop: '-24px',
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(0)
    }
  }
}));

export default useStyles;
