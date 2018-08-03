import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { repoInsightsTypes, columnsTypes } from '../types';
import DataTableRow from './DataTableRow';
import './DataTable.css';

class DataTable extends Component {
  static displayName = 'DataTable';
  static propTypes = {
    columns: columnsTypes,
    data: PropTypes.arrayOf(PropTypes.shape(repoInsightsTypes)),
    selectedRows: repoInsightsTypes.id
  };

  handleRowSelect = (id, shiftKey) => {
    this.props.onSelect(id, shiftKey);
  };

  render() {
    const { data, selectedRows, columns } = this.props;

    return (
      <div className="DataTable">
        <div className="DataTable__header">
          {columns.map(key => (
            <div key={key} className="DataTable__header-cell DataTable__cell">
              {key}
            </div>
          ))}
        </div>

        {data.map(row => {
          return (
            <DataTableRow
              key={row.id}
              isSelected={selectedRows.has(row.id)}
              data={row}
              columns={columns}
              onClick={this.handleRowSelect}
            />
          );
        })}
      </div>
    );
  }
}

export default DataTable;
