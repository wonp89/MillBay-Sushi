import React, { Component } from 'react';
import classes from '../../../css/hoursImages.css'
import { Parallax } from 'react-scroll-parallax';

const parallaxImages1 = (props) => {
  return (
    <Parallax
      offsetYMax={0}
      offsetYMin={-80}
      slowerScrollRate
      tag="figure"
    >
      <div id={classes.businessHoursContent}>
        <center>
          <h3 style={{ marginTop: '0' }}>Business</h3>
          <h1>Open Wednesday - Sunday, 12:00pm ~ 8:00p</h1>
          <h3 style={{ marginTop: '40px' }}>Lunch</h3>
          <h1>Hour 12:00pm ~ 2:30pm</h1>
        </center>
      </div>
    </Parallax>
  )
}

export default parallaxImages1;