import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import './App.css';

import { repoInsightTypes } from './types';

import DataTable from './components/DataTable';

const columns = ['name', 'issues', 'prs', 'commits', 'additions', 'deletions'];

const RepoInsightDetails = props => {
  debugger;
  return <div>insight</div>;
};

class App extends Component {
  static displayName = 'App';
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape(repoInsightTypes))
  };

  state = {
    selectedRows: new Set()
  };

  handleRowClick = (rowId, shift) => {
    if (shift) {
      this.setState({ selectedRows: this.state.selectedRows.add(rowId) });
    } else {
      this.setState({ selectedRows: new Set([rowId]) });
    }
  };

  render() {
    const { data } = this.props;
    const { selectedRows } = this.state;

    const rowsForDetails = data.filter(repoInsightItem =>
      selectedRows.has(repoInsightItem.id)
    );

    return (
      <Fragment>
        {rowsForDetails.map(detail => (
          <RepoInsightDetails key={detail.id} {...detail} />
        ))}

        <DataTable
          selectedRowsSet={selectedRows}
          rows={data}
          columns={columns}
          onRowClick={this.handleRowClick}
        />
      </Fragment>
    );
  }
}

export default App;
