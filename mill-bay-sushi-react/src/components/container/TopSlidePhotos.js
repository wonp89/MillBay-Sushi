import React, {Component} from 'react';
import classes from '../css/topSlidePhotos.css';
import WOW from 'wowjs';

class TopIllustration extends Component {

  state = {
    slideImgs: [
                {images: [
                          'http://localhost:3000/img/topImages/topImage1.jpg',
                          'http://localhost:3000/img/topImages/topImage2.jpg',
                          'http://localhost:3000/img/topImages/topImage3.jpg'
                         ],
                  index: 0}
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
