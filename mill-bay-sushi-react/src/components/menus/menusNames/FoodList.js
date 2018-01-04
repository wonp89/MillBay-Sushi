import React from 'react';

const appetizers = (props) => {
  const style = {
    border: 'solid 1px white',
    width: '60%',
    margin: 'auto',
    marginTop: '20px',
    color: 'black',
    borderRadius: '5px',
    backgroundColor: 'white'
  }

//remove width later and change to container for name and price for aligning
  const nameStyle = {
    color: 'blue',
    display: 'inline-block',
    marginLeft: '20px',
    width: '85%',
    marginBottom: '0'
  }

  const priceStyle = {
    display: 'inline-block',
    marginBottom: '0',
    marginLeft: '20px',
    color: 'blue',
    marginRight: '20px'
  }

  const paragraphStyle = {
    color: '#919191',
    paddingTop: '5px',
    margin: '10px',
    marginLeft: '20px'
  }

  return (
      <div style={style}>
        <p style={nameStyle}>{props.name}</p>
        <p style={priceStyle}>$ {props.price}</p>
        <p style={props.about ? paragraphStyle : {}}>{props.about}</p>
      </div>
  )
};

export default appetizers;
