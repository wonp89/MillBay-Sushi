import React from 'react';
import ParallaxImage1 from '../../../img/menuImages1.png'
import classes from '../../../css/parallaxImages.css'
import { Parallax } from 'react-scroll-parallax';

const parallaxImages1 =  (props) => {

    return (
          <Parallax
            className={classes.parallaxImages1}
            // disabled='false'
            // offsetXMax={-40}
            // offsetXMin={20}
            offsetYMax={-40}
            offsetYMin={20}
            slowerScrollRate
            tag="figure"
            >
            <img style={{width: '100%', flexGrow: '1'}} src={ParallaxImage1} />
          </Parallax>
    )
  }

export default parallaxImages1;
