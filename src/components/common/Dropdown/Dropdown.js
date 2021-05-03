import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles';

const CommonDropdown = ({ buttonElement, listItems }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.commonDropdown}>
      <div
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {buttonElement}
      </div>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {listItems.map(item => (
          <MenuItem onClick={handleClose}>{item.displayName}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default CommonDropdown;
