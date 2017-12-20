import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Index extends Component {
  constructor () {
  super();
  this.state = {intro: []}
}

  componentDidMount() {
    fetch('/index')
      .then(res => res.json())
      .then(intro => this.setState({ intro }));
  }

  render() {
    return (
      <div className="Index">
        <h1>Welcome</h1>
        {this.state.intro.map(title =>
          <div>{title.title}</div>
        )}
      </div>
    );
  }
}

export default Index;
