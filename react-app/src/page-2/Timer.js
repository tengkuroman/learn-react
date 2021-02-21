import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  render() {
    return (
      <div>
        <Now />
        <Countdown start={100} />
      </div>
    );
  }
}

class Now extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  render() {
    return <h4>Sekarang jam: {this.state.date.toLocaleTimeString()}</h4>;
  }
}

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.start,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ count: this.state.count - 1 });
    }, 1000);
  }

  render() {
    return <h4>Hitung mundur: {this.state.count}</h4>;
  }
}

export default Timer;
