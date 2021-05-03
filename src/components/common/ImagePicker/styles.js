import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  commonImagePicker: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    position: 'relative',
    margin: '10px 0'
  },
  commonImagePickerInput: {
    display: 'none'
  },
  commonImagePickerLabel: {
    border: `2px solid ${theme.palette.grey[400]}`,
    width: '100%',
    borderRadius: '5px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    cursor: 'pointer',
    transition: 'all .3s ease-in-out',

    '&.invalid': {
      borderColor: theme.palette.danger.main
    },
    '&.invalid:hover': {
      borderColor: theme.palette.danger.main
    },
    '&:hover': {
      borderColor: theme.palette.primary.main
    },
    '& > svg': {
      fill: theme.palette.grey[400],
      marginRight: '20px'
    }
  },
  commonImagePickerError: {
    position: 'absolute',
    bottom: '17%',
    transform: 'translateY(100%)',
    color: theme.palette.danger.main,
    fontSize: '12px',
    left: '2%'
  },
  commonInputPickerTitle: {
    fontSize: '18px',
    paddingBottom: '6px'
  }
}));

export default useStyles;
