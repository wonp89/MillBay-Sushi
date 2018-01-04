import React, {Component} from 'react';
import classes from './css/Intro.css';
import {Link} from 'react-router-dom';

class Intro extends Component {
  state = {intro: []}

  componentDidMount() {
    fetch('/index')
      .then(res => res.json())
      .then(intro => this.setState({ intro }));
  }

  render() {
    return (
      <div id={classes.Intro}>
        <h1 id={classes.IntroHeading}>Welcome</h1>
        {this.state.intro.map(title =>
          <div id={classes.IntroContent}>{title.title}</div>
        )}
        <div id={classes.IntroImages}>
        </div>
      </div>
    );
  }
}

export default Intro;
