import React, {Component} from 'react';
import classes from './css/Intro.css';
import {Link} from 'react-router-dom';
import kimbob from './img/kimbob.png'
import logo from './img/logo.png'

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
        <img src={logo} />
          <div id={classes.paragraph}>
              <div>
                <h1 id={classes.IntroContent}>Welcome to Mill Bay Sushi</h1>
                <h1>_______</h1>
                Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif. Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif
                <p>Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif. Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif
                </p>
              </div>
          </div>
          {/* <img id={classes.kimbob} src={kimbob} /> */}
        <div id={classes.IntroImages}>
        </div>
      </div>
    );
  }
}

export default Intro;
