import React, {Component} from 'react';
import ParallaxImage2 from '../../../img/menuImages2.png'
import classes from '../../../css/parallaxImages.css'
import { Parallax } from 'react-scroll-parallax';
import WOW from 'wowjs';

class parallaxImages2 extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
          <Parallax
            className={classes.parallaxImages2}
            offsetYMax={-80}
            offsetYMin={0}
            fasterScrollRate
            tag="figure"
            >
            <div id={classes.parallaxImages2Content} className="wow rotateInDownRight"><h1>「Lunch Hour 11:00am ~ 2:30pm」</h1></div>
          </Parallax>
        )
      }
    }

export default parallaxImages2;
