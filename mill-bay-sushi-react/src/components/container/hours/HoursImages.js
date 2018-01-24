import React from 'react';
import ParallaxImages1 from './parallaxImages/BusinessHours'
import { ParallaxProvider } from 'react-scroll-parallax';
import classes from '../../css/hoursImages.css'
import japanesePattern from '../../img/pw_pattern.png'

const MenuImages =  (props) => {
    return (
          <div id={classes.hoursImagesContainer} >
            <ParallaxProvider>
                <ParallaxImages1 />
            </ParallaxProvider>
          </div>
    )
  }

export default MenuImages;
