import React, {Component} from 'react';
import classes from '../../../css/hoursImages.css'
import { Parallax } from 'react-scroll-parallax';
import WOW from 'wowjs';

class parallaxImages1 extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
          <Parallax
            offsetYMax={0}
            offsetYMin={-80}
            slowerScrollRate
            tag="figure"
            >
            <div id={classes.businessHoursContent}><center><h3>Business</h3><h1>Hour 11:30am ~ 9:00pm, 7 Days</h1><h3>Lunch</h3><h1>Hour 11:00am ~ 2:30pm</h1></center></div>
          </Parallax>
    )
  }
}

export default parallaxImages1;
