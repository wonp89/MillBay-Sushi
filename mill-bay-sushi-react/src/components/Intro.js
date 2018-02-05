import React, {Component} from 'react';
import InteriorPhotos from './container/interiorImages'
import Scroll from 'react-scroll-to-element';
import classes from './css/Intro.css';
import WOW from 'wowjs';

class Intro extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div id={classes.Intro}>
        <img id={classes.logo} src="http://localhost:3000/img/logo.png" alt="" />
          <div id={classes.paragraph}>
              <div id={classes.introContainter}>
                <div className="wow fadeIn">
                  <img src="http://localhost:3000/img/brushStroke.png" id={classes.brushStroke} alt="" />
                  <p id={classes.introParagraph} >
                  Mill Bay Sushi is a Japanese restaurant located at the beautiful town Mill bay, BC. Mill Bay sushi can offer you amazing dining experience with outstanding quality service that will exceed your expectation. Our chefs have years of experience and they ensure freshness of the ingredients and create innovative dishes.
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
        <div id={classes.descriptionContainer}>
          <div>
            <h3>Dishes</h3>
              <img src="http://localhost:3000/img/brushStroke.png" id={classes.brushStroke} alt="" />
            <p>Our main chef has more than 10 years of experience working as a sushi chef. Some of his dishes are experimental and unique. He hopes his passion and love towards sushi could make the customers to enjoy the dining experience at Mill Bay Sushi.</p>
          </div>
          <div>
            <h3>Restaurant</h3>
              <img src="http://localhost:3000/img/brushStroke.png" id={classes.brushStroke} alt="" />
            <p>Fall in love with our beauifully designed restaurant. The peaceful interior will make you feel comfortable. We also have a private room for a large group which can fit twenty people. Bring all you family and friends. Just sit back down, relax, and taste. </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
