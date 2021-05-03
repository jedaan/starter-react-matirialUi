import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    // margin: theme.spacing(0.2, 0, 0.2, 0.2),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  commonInput: {
    margin: '10px 0'
  }
}));

export default useStyles;
