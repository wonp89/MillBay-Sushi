import React from 'react';
import OceanImages from './ocean/OceanImages'
import classes from '../css/Ocean.css'

const ocean = (props) => {
  return (
    <div id={classes.ocean}>
      <OceanImages />
    </div>
  )
}

export default ocean;
