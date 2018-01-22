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
            className={classes.businessHours}
            offsetYMax={-80}
            offsetYMin={0}
            fasterScrollRate
            tag="figure"
            >
            <div id={classes.businessHoursContent} className="wow rotateInDownLeft"><h1> 「Business Hour 11:30am ~ 9:00pm, 7 Days」</h1></div>
          </Parallax>
    )
  }
}

export default parallaxImages1;
