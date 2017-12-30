import React from 'react';
import Appetizers from './menusNames/Appetizers';
import classes from '../css/Appetizer.css';
import {Animated} from "react-animated-css";

const menuTypes =  (props) => {

  const foodNames = () =>
    props.types.map((food, index) =>
      <Appetizers key={index} name={food.name} price={food.price} />
    )

    return (
        <div className={classes.overlay}>
          <a href="javascript:void(0)" className={classes.closebtn} onClick={props.click}>&times;</a>
          <div className={classes.overlayContent}>
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
              {foodNames()}
            </Animated>
          </div>
        </div>
    )
  }

export default menuTypes;
