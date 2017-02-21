/* eslint-disable */
import React, {Component, PropTypes} from 'react';

class Fruit extends Component {
  render() {
    console.log('this.params in Fruit', this.props);
    return (
      <div>
        <h1>Hi there from fruits</h1>
        You selected a {this.props.location.query.selectedFruit}
      </div>
    );
  }
}

Fruit.PropTypes = {
  selectedFruit: PropTypes.string.isRequired
};
export default Fruit;
