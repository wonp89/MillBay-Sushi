import React from 'react';
import ParallaxImages1 from './parallaxImages/ParallaxImages1'
import ParallaxImages2 from './parallaxImages/ParallaxImages2'
import { ParallaxProvider } from 'react-scroll-parallax';
import classes from '../../css/menuImages.css'

const MenuImages =  (props) => {

    return (
        <div id={classes.images}>
          <ParallaxProvider>
            <div></div>
              <ParallaxImages1 />
              <ParallaxImages2 />
          </ParallaxProvider>
        </div>
    )
  }

export default MenuImages;
