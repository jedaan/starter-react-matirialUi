/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  TextField,
  makeStyles,
  Typography,
  InputAdornment
} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const ValidationTextField = withStyles({
  root: {
    '& input:valid + fieldset': {
      borderWidth: 2,
      transition: 'all .2s ease-in-out'
    },
    '& input[aria-invalid="true"] + fieldset': {
      borderWidth: 2,
      borderColor: '#e53935 !important'
    },
    '& input:focus + fieldset': {
      borderLeftWidth: 3,
      padding: '4px !important' // override inline-style
    },
    '& > p': {
      color: '#e53935 !important',
      position: 'absolute',
      bottom: '0',
      transform: 'translateY(100%)'
    }
  }
})(TextField);

const WhiteTextTypography = withStyles({
  root: {
    fontSize: 18,
    paddingBottom: 6
  }
})(Typography);

const CommonInput = props => {
  const classes = useStyles();
  const {
    name = '',
    label = '',
    error = null,
    onBlur = () => {},
    onChange = () => {},
    value = '',
    disabled = false,
    type = 'text',
    t,
    viewMode = false,
    onIconClick,
    className = '',
    fullWidth = false,
    placeholder = ''
  } = props;

  return (
    <div className={`${classes.commonInput} ${className} `}>
      <WhiteTextTypography variant="h3">{label}</WhiteTextTypography>
      {type === 'search' ? (
        <ValidationTextField
          error={!!error}
          fullWidth
          helperText={error}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          type="text"
          disabled={disabled}
          variant="outlined"
          placeholder={placeholder}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <div>{t('clientSearch')}</div>
                <SearchIcon onClick={onIconClick} />
              </InputAdornment>
            )
          }}
        />
      ) : viewMode ? (
        <ValidationTextField
          error={!!error}
          fullWidth
          helperText={error}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          fullWidth={fullWidth}
          value={value}
          placeholder={placeholder}
          type={type}
          variant="outlined"
        />
      ) : (
        <ValidationTextField
          className={classes.margin}
          error={!!error}
          helperText={error}
          name={name}
          onBlur={onBlur}
          onChange={onChange}
          fullWidth={fullWidth}
          value={value}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          variant="outlined"
        />
      )}
    </div>
  );
};

export default withTranslation('translations')(CommonInput);
