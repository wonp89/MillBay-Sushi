import React, {Component} from 'react';
import topImg from '../img/topImage1.jpg'
import topImg2 from '../img/topImage2.jpg'
import topImg3 from '../img/topImage4.jpg'
import classes from '../css/topSlidePhotos.css';
import WOW from 'wowjs';

class TopIllustration extends Component {
  state = {
    slideImgs: [
      {images: [topImg, topImg2, topImg3], index: 0}
    ]
  }
  componentDidMount() {
    new WOW.WOW().init();
      var index = 0;
      this.imageInterval = setInterval(() => {
         index += 1;
         if (index > this.state.slideImgs[0].images.length-1) {index = 0}
         var slideImages = [...this.state.slideImgs]
         slideImages[0].index = index;
         this.setState({slideImgs: slideImages})
      },  4000)
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
  }

  render() {
    return (
        <div style={{backgroundImage: 'url(' + this.state.slideImgs[0].images[this.state.slideImgs[0].index] + ')'}} id={classes.topImage}>
        </div>
      )
    }
  }

export default TopIllustration;
