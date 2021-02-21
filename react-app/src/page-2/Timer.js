import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      date: new Date(),
      count: this.props.start,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ date: new Date(), count: this.state.count - 1 });
    }, 1000);
  }

  componentDidUpdate() {
    if (this.state.count == 0 && this.state.visible) {
      this.setState({ visible: false });
    }
  }

  render() {
    const style = {
      container: {
        display: 'flex',
        justifyContent: 'space-around',
      },
    };
    return (
      this.state.visible && (
        <div style={style.container}>
          <h4>Sekarang jam: {this.state.date.toLocaleTimeString()}</h4>
          <h4>Hitung mundur: {this.state.count}</h4>
        </div>
      )
    );
  }
}

export default Timer;
