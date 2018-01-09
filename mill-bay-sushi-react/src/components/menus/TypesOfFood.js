import React from 'react';
import FoodList from './menusNames/FoodList';
import classes from '../css/TypesOfFood.css';
import {Animated} from "react-animated-css";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const menuTypes =  (props) => {

  const foodNames = () =>
    props.types.map((food, index) =>
      <FoodList key={index} name={food.name} price={food.price} about={food.about} />
    )

    return (
      <MuiThemeProvider>
        <div className={classes.overlay}>
          <h1 id={classes.nextPage} onClick={props.next}>▻▻</h1>
          <h1 id={classes.previousPage} onClick={props.previous}>◅◅</h1>
          <a href="javascript:void(0)" className={classes.closebtn} onClick={props.click}>&times;</a>
          <div className={classes.overlayContent}>
            <h1 id={classes.foodType}>{props.foodType}</h1>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
              {foodNames()}
            </Animated>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }

export default menuTypes;
