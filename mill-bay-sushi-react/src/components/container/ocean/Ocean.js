import React from 'react';
import OceanImages from './OceanImages'
import classes from '../../css/Ocean.css'
import { ParallaxProvider } from 'react-scroll-parallax';

const ocean = (props) => {
  return (
    <div id={classes.ocean}>
      <ParallaxProvider>
        <OceanImages />
      </ParallaxProvider>
    </div>
  )
}

export default ocean;
