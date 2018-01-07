import React from 'react';

const appetizers = (props) => {
  const style = {
    borderBottom: 'dotted 1px black',
    width: '90%',
    margin: 'auto',
    color: 'black',
    backgroundColor: 'white',
    marginTop: '0'
  }

  const container = {
    display: 'flex',
    justifyContent: 'space-between'
  }

//remove width later and change to container for name and price for aligning
  const nameStyle = {
    color: 'black',
    display: 'inline-block',
    width: '85%',
    marginBottom: '0'
  }

  const priceStyle = {
    display: 'inline-block',
    marginBottom: '0',
    marginLeft: '20px',
    color: 'black'
  }

  const paragraphStyle = {
    color: '#919191',
    fontStyle: 'italic',
    fontSize: '13px',
    marginTop: '7px'
  }

  return (
      <div style={style}>
        <div style={container}>
          <p style={nameStyle}>{props.name}</p>
          <p style={priceStyle}>{props.price}</p>
        </div>
        <p style={props.about ? paragraphStyle : {}}>{props.about}</p>
      </div>
  )
};

export default appetizers;
