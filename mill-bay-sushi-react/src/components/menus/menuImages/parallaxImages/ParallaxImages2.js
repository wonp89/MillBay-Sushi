import React from 'react';
import ParallaxImage2 from '../../../img/menuImages2.png'
import classes from '../../../css/parallaxImages.css'
import { Parallax } from 'react-scroll-parallax';

const parallaxImages2 =  (props) => {

    return (
          <Parallax
            className={classes.parallaxImages2}
            offsetYMax={40}
            offsetYMin={-20}
            fasterScrollRate
            tag="figure"
            >
            <img style={{width: '100%', flexGrow: '1'}} src={ParallaxImage2} />
          </Parallax>
    )
  }

export default parallaxImages2;
