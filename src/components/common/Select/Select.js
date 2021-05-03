import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import useStyles from './styles';

const CommonSelect = ({
  title = '',
  items = [],
  onChange,
  id = '',
  labelId = '',
  name = '',
  error = '',
  onBlur = '',
  fullWidth = '',
  value = ''
}) => {
  const classes = useStyles();
  return (
    <div className={`${classes.commonSelect} ${error ? classes.invalid : ''} `}>
      <FormControl variant="outlined" className={classes.commonSelectControl}>
        <span>{title}</span>
        <Select
          name={name}
          labelId={labelId}
          id={id}
          onChange={onChange}
          label={title}
          helperT
          error={error}
          onBlur={onBlur}
          fullWidth={fullWidth}
          value={value}
        >
          {items.map(item => (
            <MenuItem value={item.value} key={item.id}>
              {item.displayValue}
            </MenuItem>
          ))}
        </Select>
        {error && <span className={classes.errorMsg}>{error}</span>}
      </FormControl>
    </div>
  );
};

export default CommonSelect;
