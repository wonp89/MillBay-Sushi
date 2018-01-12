import React, {Component} from 'react';
import classes from '../../css/Footer.css'
import footerImage from '../../img/footerImage.png'
import waterSplash from '../../img/waterSplash.png'
import WOW from 'wowjs';

class Footer extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div>
        <img src={footerImage} id={classes.contactFooterImage} style={{width: '100%'}}/>
        <img src={waterSplash} className="wow fadeInDown" id={classes.waterSplash} />
      </div>
    )
  }
}

export default Footer;
