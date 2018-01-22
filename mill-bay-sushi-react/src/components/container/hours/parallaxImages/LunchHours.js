import React, {Component} from 'react';
import classes from '../../../css/hoursImages.css'
import { Parallax } from 'react-scroll-parallax';
import WOW from 'wowjs';

class parallaxImages2 extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
          <Parallax
            className={classes.lunchHours}
            offsetYMax={-80}
            offsetYMin={0}
            fasterScrollRate
            tag="figure"
            >
            <div id={classes.lunchHoursContent} className="wow rotateInDownRight"><h1>「Lunch Hour 11:00am ~ 2:30pm」</h1></div>
          </Parallax>
        )
      }
    }

export default parallaxImages2;
