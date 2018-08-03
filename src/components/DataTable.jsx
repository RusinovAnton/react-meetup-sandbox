import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './DataTable.css';

import { columnsTypes, idType } from '../types';

import DataTableHeader from './DataTableHeader';
import DataTableRow from './DataTableRow';

class DataTable extends Component {
  static displayName = 'DataTable';
  static propTypes = {
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: idType
      })
    ),
    selectedRowsSet: PropTypes.object,
    columns: columnsTypes,
    onRowClick: PropTypes.func
  };

  render() {
    const { rows, columns, selectedRowsSet, onRowClick } = this.props;

    return (
      <div className="DataTable">
        <DataTableHeader columns={columns} />

        {rows.map(row => (
          <DataTableRow
            key={row.id}
            isSelected={selectedRowsSet.has(row.id)}
            rowData={row}
            columns={columns}
            onClick={onRowClick}
          />
        ))}
      </div>
    );
  }
}

export default DataTable;
