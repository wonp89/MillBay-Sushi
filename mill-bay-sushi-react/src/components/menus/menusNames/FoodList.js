import React from 'react';

const appetizers = (props) => {
  const style = {
    border: 'solid 1px white',
    width: '80%',
    margin: 'auto',
    marginTop: '20px',
    color: 'white'
  }

  return (
      <div>
        <h2 style={style}>{props.name} • {props.price}</h2>
      </div>
  )
};

export default appetizers;
