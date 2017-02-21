import React, {Component} from 'react';

import Results from './components/Results';

export class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 style={{color: 'black'}} className="text-center">Hey ho hidy hey</h1>
        </div>
        <Results/>
      </div>
    );
  }
}
