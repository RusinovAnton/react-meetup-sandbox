import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    data: [],
    isLoading: true
  };

  componentDidMount() {
    fetch('/data').then(response => {
      this.setState({
        data: [...this.state.data, ...response.data],
        isLoading: false
      });
    });
  }

  render() {
    const { data, isLoading } = this.state;

    if (isLoading) return <Loader />;

    return <div>{data.map(element => <Element />)}</div>;
  }
}

export default App;
