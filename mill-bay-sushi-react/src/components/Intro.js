import React, {Component} from 'react';
import InteriorPhotos from './menus/interiorImages'
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
        <img id={classes.logo} src={logo} />
          <div id={classes.paragraph}>
              <div>
                <h1 id={classes.IntroContent} className="wow fadeInLeft">EAT SUSHI AT MILL BAY</h1>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <h1 style={{color: 'white', animationDelay: '0.2s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.3s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.4s'}} className="wow fadeInDown">▼</h1>
                  <h1 style={{color: 'white', animationDelay: '0.5s'}} className="wow fadeInDown">▼</h1>
                </div>
                <p style={{color: 'white', animationDelay: '0.7s'}} className="wow fadeIn">
                Mill Bay Sushi is a Japanese restaurant located at beautiful town Mill bay, BC. Mill Bay sushi can offer you amazing dining experience with outstanding quality service that will exceed your expectation. Our chefs have years of experience and they ensure freshness of the ingredients and create innovative dishes.
                The restaurant has near 150 seats that can provide plenty of space for large groups of people who want our Japanese and Korean cuisine. Please contact us for more information.
                </p>
                <Scroll type="id" element="Menu__AllTypes__2S_3b">
                  <div id={classes.scrollToMenu} className="wow fadeInRight"><div id={classes.scrollToMenuInsideDiv}>GO TO MENU</div></div>
                </Scroll>
              </div>
          </div>
        <div id={classes.IntroImages}>
          <InteriorPhotos />
        </div>
      </div>
    );
  }
}

export default Intro;
