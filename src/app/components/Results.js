import React, {Component, PropTypes} from 'react';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputToTranslate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.sendInputToTranslate = this.sendInputToTranslate.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h3>Speak Like Yoda Here</h3>
          <div className="input-group">
            <span className="input-group-btn">
              <button className="btn btn-primary" onClick={this.sendInputToTranslate}>Search</button>
            </span>
            <input className="form-control" placeholder="Yoda Translation here" name="inputToTranslate" onChange={this.handleChange}></input>
          </div>
        </div>
        <div className="container">
          <div className="jumbotron">
            <h3>{this.state.inputToTranslate}</h3>
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
