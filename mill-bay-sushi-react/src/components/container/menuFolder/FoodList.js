import React from 'react';

const appetizers = (props) => {
  const style = {
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
    marginTop: '7px',
    marginBottom: '2px'
  }

  const LineForNameAndPrice = {
    borderBottom: 'dotted 1px #c1c1c1',
    flexGrow: '1'
  }

  return (
      <div style={style}>
        <div style={container}>
          <p style={nameStyle}>{props.name}</p>
          <div style={LineForNameAndPrice}></div>
          <p style={priceStyle}>{props.price}</p>
        </div>
        <p className='about' style={props.about ? paragraphStyle : {marginBottom: '-11px'}}>{props.about}</p>
      </div>
  )
};

export default appetizers;
