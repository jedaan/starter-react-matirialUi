import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const CommonButton = ({
  title,
  color = 'primary',
  type = 'button',
  endIcon = null,
  fullWidth = false,
  disabled = false,
  onClick = () => {},
  className = '',
  link = false,
  goTo = '#',
  activeClassName = '',
  icon = null,
  iconClassName = '',
  containerClass = ''
}) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLinkClick = () => navigate(goTo);

  return (
    <div className={containerClass}>
      <Button
        endIcon={endIcon}
        className={`${classes.commonButton} ${color} ${className} ${activeClassName}  `}
        variant="contained"
        type={type}
        fullWidth={fullWidth}
        onClick={e => (link ? handleLinkClick() : onClick(e))}
        disabled={disabled}
        color={color}
      >
        {icon && (
          <span className={`${classes.commonButtonIcon} ${iconClassName} `}>
            {icon}
          </span>
        )}
        <span>{title}</span>
      </Button>
    </div>
  );
};

export default CommonButton;
