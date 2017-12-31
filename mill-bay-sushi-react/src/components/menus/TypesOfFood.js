import React from 'react';
import FoodList from './menusNames/FoodList';
import classes from '../css/TypesOfFood.css';
import {Animated} from "react-animated-css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const menuTypes =  (props) => {

  const foodNames = () =>
    props.types.map((food, index) =>
      <FoodList key={index} name={food.name} price={food.price} />
    )

    return (
      <MuiThemeProvider>
        <div className={classes.overlay}>
          <a href="javascript:void(0)" className={classes.closebtn} onClick={props.click}>&times;</a>
          <div className={classes.overlayContent}>
            <Animated animationIn="fadeInUp" animationOut="fadeOut" isVisible={true}>
              {foodNames()}
            </Animated>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

export default menuTypes;
