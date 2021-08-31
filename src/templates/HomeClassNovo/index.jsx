import React, { Component } from 'react';
import P from 'prop-types';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState(
      (prevState, prevProps) => {
        console.log('PREV', prevState.counter);
        console.log('PROPS', prevProps.numberToIncrement);
        return { counter: prevState.counter + prevProps.numberToIncrement };
      },
      () => {
        console.log('POST', this.state.counter);
      },
    );
  };

  render() {
    return (
      <div className="container">
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

Home.defaultProps = {
  numberToIncrement: 1,
};

Home.propTypes = {
  numberToIncrement: P.number,
};

export default Home;
