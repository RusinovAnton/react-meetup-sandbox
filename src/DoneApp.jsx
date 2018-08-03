import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { repoInsightsTypes } from './types';
import DataTable from './components/DataTable';

import './App.css';

class App extends Component {
  static propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape(repoInsightsTypes))
  };

  state = {
    sort: {
      key: null,
      order: 'ASC'
    },
    columns: ['name', 'issues', 'prs', 'commits', 'deletions', 'additions'],
    selectedRows: new Set()
  };

  handleRowSelect = (id, shiftKey) => {
    if (shiftKey) {
      this.setState(state => {
        return {
          ...state,
          selectedRows: new Set(state.selectedRows).add([id])
        };
      });
    } else {
      this.setState({ selectedRows: new Set([id]) });
    }
  };

  render() {
    const { selectedRows } = this.state;

    if (selectedRows.length) {
      return <h1>{selectedRows.join(', ')}</h1>;
    }

    return (
      <div>
        <DataTable
          selectedRows={selectedRows}
          columns={this.state.columns}
          data={this.props.initialData}
          onSelect={this.handleRowSelect}
        />
      </div>
    );
  }
}

export default App;
