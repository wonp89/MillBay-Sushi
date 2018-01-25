import React, {Component} from 'react';
import InteriorPhotos from './container/interiorImages'
import Scroll from 'react-scroll-to-element';
import classes from './css/Intro.css';
import logo from './img/logo.png'
import WOW from 'wowjs';

class Intro extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id={classes.Intro}>
        <img id={classes.logo} src={logo} alt="" />
          <div id={classes.paragraph}>
              <div id={classes.introContainter}>
                <div className="wow fadeIn">
                  <p id={classes.introParagraph} >
                  Mill Bay Sushi is a Japanese restaurant located at beautiful town Mill bay, BC. Mill Bay sushi can offer you amazing dining experience with outstanding quality service that will exceed your expectation. Our chefs have years of experience and they ensure freshness of the ingredients and create innovative dishes.
                  The restaurant has near 150 seats that can provide plenty of space for large groups of people who want our Japanese and Korean cuisine. Please contact us for more information.
                  </p>
                </div>
                <Scroll type="id" element="Menu__AllTypes__2S_3b">
                  <div id={classes.scrollToMenu}>GO TO MENU</div>
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
