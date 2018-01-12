import React, {Component} from 'react';
import Scroll from 'react-scroll-to-element';
import classes from './css/Intro.css';
import {Link} from 'react-router-dom';
import logo from './img/logo.png'
import WOW from 'wowjs';

class Intro extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id={classes.Intro}>
        <img id={classes.logo} src={logo} className="wow slideInUp" />
          <div id={classes.paragraph}>
              <div>
                <h1 id={classes.IntroContent} className="wow fadeInLeft">Welcome to Mill Bay Sushi</h1>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <h1 style={{color: 'white', animationDelay: '0.2s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.3s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.4s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.5s'}} className="wow fadeInDown">▼</h1>
                </div>
                <p style={{color: 'white', animationDelay: '0.7s'}} className="wow fadeIn">Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif. Mill bay Sushi is located in Victoria, Mill bay. This is the place that anyone can enjoy sushi. the best sushi restaurant in Mill bay. We love you. Wow, I can't believe it. Baldfasdfjaosidjoif
                </p>
                <Scroll type="class" element="menuHeading">
                  <div id={classes.scrollToMenu} className="wow fadeInRight"><div id={classes.scrollToMenuInsideDiv}>GO TO MENU</div></div>
                </Scroll>
              </div>
          </div>
        <div id={classes.IntroImages}>
        </div>
      </div>
    );
  }
}

export default Intro;
