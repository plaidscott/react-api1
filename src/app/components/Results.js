import React, {Component, PropTypes} from 'react';

import translationHelper from '../utils/yodaHelpers';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToTranslate: '',
      translatedInput: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputToTranslate = this.handleInputToTranslate.bind(this);
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
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h3>Speak Like Yoda Here</h3>
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.handleInputToTranslate}>Search</button>
            </span>
            <input className="form-control" placeholder="Yoda Translation here" name="inputToTranslate" onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron">
            <h3>{this.state.inputToTranslate}</h3>
            <h3>{this.state.translatedInput}</h3>
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
