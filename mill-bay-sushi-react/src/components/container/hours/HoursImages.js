import React from 'react';
import ParallaxImages1 from './parallaxImages/BusinessHours'
import ParallaxImages2 from './parallaxImages/LunchHours'
import { ParallaxProvider } from 'react-scroll-parallax';
import classes from '../../css/menuImages.css'
import japanesePattern from '../../img/backgroundPattern.png'

const MenuImages =  (props) => {
  const backgroundPattern = {
    backgroundImage: 'url(' + japanesePattern + ')'
  }
    return (
          <div id={classes.images} style={backgroundPattern}>
            <ParallaxProvider>
                <ParallaxImages1 />
                <ParallaxImages2 />
            </ParallaxProvider>
          </div>
    )
  }

export default MenuImages;
