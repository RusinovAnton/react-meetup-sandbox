import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './DataTableCell.css';

class DataTableCell extends Component {
  static displayName = 'DataTableCell';
  static propTypes = {
    header: PropTypes.bool
  };

  render() {
    const { children, header } = this.props;

    return (
      <div
        className={classnames('DataTableCell', {
          'DataTableCell--header': header
        })}
      >
        {children}
      </div>
    );
  }
}

export default DataTableCell;
