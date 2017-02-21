import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import translationHelper from '../utils/yodaHelpers';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToTranslate: '',
      translatedInput: '',
      selectedFruit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputToTranslate = this.handleInputToTranslate.bind(this);
    this.handleFruitSelect = this.handleFruitSelect.bind(this);
    this.handleFruitSelectClick = this.handleFruitSelectClick.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleInputToTranslate() {
    console.log('in handleInputToTranslate----this.state.inputToTranslate', this.state.inputToTranslate);
    translationHelper.translateInputToTranslate(this.state.inputToTranslate)
      .then(response => {
        this.setState({translatedInput: response.data});
      });
  }

  handleFruitSelect(event) {
    this.setState({selectedFruit: event.target.value});
  }

  handleFruitSelectClick(e) {
    e.preventDefault();
    console.log(this);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h3>Speak Like Yoda Here</h3>
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.handleInputToTranslate}>Search</button>
            </span>
            <input className="form-control" placeholder="Yoda Translation here" name="inputToTranslate" onChange={this.handleChange}></input>
          </div>
          <h3>{this.state.inputToTranslate}</h3>
          <h3>{this.state.translatedInput}</h3>
        </div>
        <div className="jumbotron">
          <h3>Choose some cool stuff</h3>
          <div className="input-group">
            <select className="form-control" onChange={this.handleFruitSelect}>
              <option>Apples</option>
              <option>Oranges</option>
              <option>Bananas</option>
              <option>Pineapples</option>
            </select>
            <span className="input-btn-group">
              <Link activeClassName="navlink-active" to={`/fruit/${this.state.selectedFruit}`}>
                {this.state.selectedFruit}
              </Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

Results.propTypes = {
  inputToTranslate: PropTypes.string.isRequired
};

export default Results;
