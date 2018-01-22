import React, {Component} from 'react';
import topImg from '../img/topImage.png'
import topImg2 from '../img/topImage2.png'
import topImg3 from '../img/topImage3.png'
import topImg4 from '../img/topImage4.png'
import topImg5 from '../img/topImage5.png'
import classes from '../css/topIllustration.css';
import WOW from 'wowjs';

class TopIllustration extends Component {
  state = {
    slideImgs: [
      {images: [topImg, topImg2, topImg3, topImg4, topImg5], index: 0}
    ]
  }
  componentDidMount() {
    new WOW.WOW().init();
      var index = 0;
       setInterval(() => {
         index += 1;
         if (index > this.state.slideImgs[0].images.length-1) {index = 0}
         var slideImages = [...this.state.slideImgs]
         slideImages[0].index = index ;
         this.setState({slideImgs: slideImages})
      },  4000)
  }

  render() {
    return (
        <div style={{backgroundImage: 'url(' + this.state.slideImgs[0].images[this.state.slideImgs[0].index] + ')'}} id={classes.topImage}>
        </div>
      )
    }
  }

export default TopIllustration;
