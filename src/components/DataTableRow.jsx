import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { columnsTypes } from '../types';
import DataTableCell from './DataTableCell';

import './DataTableRow.css';

class DataTableRow extends Component {
  static displayName = 'DataTableRow';
  static propTypes = {
    columns: columnsTypes,
    rowData: PropTypes.shape({
      id: PropTypes.string
    }),
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
  };

  handleClick = event => {
    const { rowData, onClick } = this.props;

    onClick(rowData.id, event.shiftKey);
  };

  render() {
    const { isSelected, rowData, columns, onClick } = this.props;

    return (
      <div
        className={classnames('DataTableRow', {
          'DataTableRow--selected': isSelected
        })}
        onClick={this.handleClick}
      >
        {columns.map(key => <DataTableCell>{rowData[key]}</DataTableCell>)}
      </div>
    );
  }
}

export default DataTableRow;
