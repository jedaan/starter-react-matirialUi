import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  commonSelect: {
    width: '100%',
    margin: '10px 0',
    '.Mui-error': {
      display: 'none'
    },
    '& > div': {
      width: '100%',
      '& > span': {
        fontSize: '18px',
        marginBottom: '7px'
      },
      '& fieldset': {
        borderWidth: '2px',
        transition: 'all .3s ease-in-out'
      }
    }
  },
  invalid: {
    '& > div': {
      '& fieldset': {
        borderColor: `${theme.palette.danger.main} !important`
      }
    }
  },
  errorMsg: {
    position: 'absolute',
    bottom: '0',
    transform: 'translateY(160%)',
    fontSize: '14px !important',
    color: theme.palette.danger.main,
    margin: '0 14px'
  }
}));

export default useStyles;
