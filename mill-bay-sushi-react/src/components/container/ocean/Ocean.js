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
      <center className={classes.copyRight}>Copyright © 2018 by Mill Bay Sushi  All Rights Reserved. Illustration & Photo & Website: wonpark89@gmail.com</center>
    </div>
  )
}

export default ocean;
