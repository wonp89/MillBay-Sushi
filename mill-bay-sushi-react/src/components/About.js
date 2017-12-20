import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class About extends Component {
  constructor () {
  super();
  this.state = {aboutInfo: []}
}

  componentDidMount() {
    fetch('/about')
      .then(res => res.json())
      .then(aboutInfo => this.setState({ aboutInfo }));
  }

  render() {
    return (
      <div className="Index">
        <h1>About</h1>
        {this.state.aboutInfo.map((info, i) =>
        <div key={i}>
          <div>{info.name}</div>
          <div>{info.paragraph}</div>
        </div>
        )}
      </div>
    );
  }
}


export default About;
