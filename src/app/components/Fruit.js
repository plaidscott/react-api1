/* eslint-disable */
import React, {Component} from 'react';

class Fruit extends Component {
  render() {
    console.log('this.params in Fruit', this.props);
    return (
      <div>
        <h1>Hi there from fruits</h1>
        You selected a {this.props.params.fruit}
      </div>
    );
  }
}

export default Fruit;
