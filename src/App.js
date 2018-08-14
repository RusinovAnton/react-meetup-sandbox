import React, { Component } from 'react';
import './App.css';

class App extends Component {
  static displayName = 'App';
  static propTypes = {};

  state = {
    date: null,
    value: null
  };

  componentDidMount() {
    this.beginValueUpdate();
  }

  beginValueUpdate() {
    this.intervalToken = window.setInterval(() => {
      this.setState({ date: Date.now(), value: Math.random() });
    }, 1000);
  }

  render() {
    const { value, date } = this.state;
    if (!value) return null;

    return (
      <div key={date} className="animatable">
        {value}
      </div>
    );
  }
}

export default App;
