import React, {Component} from 'react';
import classes from '../../css/salmonPainting.css'
import footerImage from '../../img/salmonPainting1.png'
import waterSplash from '../../img/waterSplash.png'
import WOW from 'wowjs';

class Footer extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <img src={footerImage} id={classes.contactFooterImage} alt="Salmon"/>
        <img src={waterSplash} className="wow fadeInDown" id={classes.waterSplash} alt="water splashing"/>
      </div>
    )
  }
}

export default Footer;
