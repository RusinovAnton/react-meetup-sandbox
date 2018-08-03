import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { columnsTypes } from '../types';

import DataTableCell from './DataTableCell';
import './DataTableHeader.css'
class DataTableHeader extends Component {
  static displayName = 'DataTableHeader';
  static propTypes = {
    columns: columnsTypes
  };

  render() {
    const { columns } = this.props;

    return (
      <div className="DataTableHeader">
        {columns.map(key => <DataTableCell header>{key}</DataTableCell>)}
      </div>
    );
  }
}

export default DataTableHeader;
