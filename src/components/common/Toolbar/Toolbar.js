import React from 'react';
import * as _ from 'lodash';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import Button from '../Button/Button';

const useStyles = makeStyles(theme => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t, searchCustomerPlaceHolder, buttonTitile, buttonOnClick } = rest;

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box display="flex" justifyContent="space-between">
              <Box flexGrow={4} maxWidth={400} justifyContent="flex-start">
                <Input
                  fullWidth
                  icon={<SearchIcon />}
                  placeholder={searchCustomerPlaceHolder}
                />
              </Box>
              {!_.isEmpty(buttonTitile) && (
                <Box display="flex" justifyContent="flex-end" p={2}>
                  <Button
                    color="primary"
                    onClick={buttonOnClick}
                    title={buttonTitile}
                  />
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default withTranslation('translations')(Toolbar);
