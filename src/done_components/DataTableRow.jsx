import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { repoInsightsTypes } from '../types';

import './DataTableRow.css';

class DataTableRow extends Component {
  static displayName = 'DataTableRow';
  static propTypes = {
    data: PropTypes.shape(repoInsightsTypes),
    isSelected: PropTypes.bool,
    onClick: PropTypes.func
  };

  handleRowClick = (event) => {
    const {
      data: { id },
      onClick
    } = this.props;

    onClick(id, event.shiftKey);
  };

  render() {
    const { data, columns, isSelected } = this.props;

    return (
      <div
        className={classnames('DataTableRow DataTable__row', {
          'DataTable__row--selected': isSelected
        })}
        onClick={this.handleRowClick}
      >
        {columns.map(key => (
          <div
            key={key}
            className="DataTable__cell"
          >
            {data[key]}
          </div>
        ))}
      </div>
    );
  }
}

export default DataTableRow;
