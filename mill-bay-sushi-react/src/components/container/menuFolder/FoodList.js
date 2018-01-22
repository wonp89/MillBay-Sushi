import React from 'react';
import classes from '../../css/foodList.css'

const appetizers = (props) => {
//remove width later and change to container for name and price for aligning
  const paragraphStyle = {
    color: '#919191',
    fontStyle: 'italic',
    fontSize: '13px',
    marginTop: '7px',
    marginBottom: '2px'
  }

  return (
      <div id={classes.listStyle}>
        <h3 id={classes.category} style={props.category ? {} : {display:'none'}}>{props.category}</h3>
        <div id={classes.container}>
          <p id={classes.nameStyle}>{props.name}</p>
          <div id={classes.LineForNameAndPrice} style={props.category ? {display: 'none'} : {}}></div>
          <p id={classes.priceStyle}>{props.price}</p>
        </div>
        <p className='about' style={props.about ? paragraphStyle : {marginBottom: '-11px'}}>{props.about}</p>
      </div>
  )
};

export default appetizers;
