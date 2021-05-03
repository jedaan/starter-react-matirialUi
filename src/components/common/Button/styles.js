import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  commonButton: {
    color: '#fff',
    display: 'flex',
    alignItems: 'center',

    '&.primary': {
      backgroundColor: theme.palette.primary.main
    },
    '&.success': {
      backgroundColor: theme.palette.success.main,
      '&:hover': {
        backgroundColor: theme.palette.success.dark
      }
    },
    '&.danger': {
      backgroundColor: theme.palette.danger.main,
      '&:hover': {
        backgroundColor: theme.palette.danger.dark
      }
    },
    '&.secondary': {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.main
      }
    },
    '&.white': {
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main
    },

    '&:disabled': {
      backgroundColor: theme.palette.grey[300]
    }
  },
  commonButtonIcon: {
    display: 'flex',
    '& svg': {
      width: '30px',
      height: '30px',
      marginRight: '8px'
    }
  }
}));

export default useStyles;
