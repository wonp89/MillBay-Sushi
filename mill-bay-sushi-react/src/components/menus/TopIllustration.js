import React, {Component} from 'react';
import hands from '../img/hand.png'
import classes from '../css/topIllustration.css';
import WOW from 'wowjs';

class TopIllustration extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    const style = {
      backgroundImage: 'url(' + hands + ')',
      minHeight: '120px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    };

    return (
        <div style={style} id={classes.homeHeading}>
        </div>
      )
    }
  }

export default TopIllustration;
