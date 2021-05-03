/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '../Button/Button';
// core components
import useStyles from './styles';

export default function CustomTable(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const {
    tableHead,
    tableData,
    tableHeaderColor,
    fullDetailsColumnAction,
    fullDetailsColumnMapping = '',
    showFullDetailsColumn = false
  } = props;
  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[`${tableHeaderColor}TableHeader`]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={`${classes.tableCell} ${classes.tableHeadCell}`}
                    key={key}
                  >
                    {prop}
                  </TableCell>
                );
              })}
              {showFullDetailsColumn && (
                <TableCell className={classes.tableCell} />
              )}
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {tableData &&
            tableData.map((prop, key) => {
              return (
                <TableRow key={key} className={classes.tableBodyRow}>
                  {props.columnMapping.map((column, key) => {
                    const isCompination = column.includes(':');
                    const columnsArray = column.split(':');
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {isCompination
                          ? `${prop[columnsArray[0]]} ${prop[columnsArray[1]]}`
                          : prop[column]}
                      </TableCell>
                    );
                  })}
                  {showFullDetailsColumn && (
                    <TableCell className={classes.tableCell} key={key}>
                      <Button
                        containerClass={classes.detailsButton}
                        onClick={() =>
                          fullDetailsColumnAction(
                            prop[fullDetailsColumnMapping]
                          )
                        }
                        title="view deails"
                      />
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: 'gray'
};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    'warning',
    'primary',
    'danger',
    'success',
    'info',
    'rose',
    'gray'
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};
