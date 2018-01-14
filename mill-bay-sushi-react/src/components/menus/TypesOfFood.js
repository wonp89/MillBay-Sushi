import React from 'react';
import FoodList from './menusNames/FoodList';
import classes from '../css/TypesOfFood.css';
import treeBackgroundImage from '../img/tree_bark.png'
import {Animated} from "react-animated-css";

const menuTypes =  (props) => {

  const foodNames = () =>
    props.types.map((food, index) =>
      <FoodList key={index} name={food.name} price={food.price} about={food.about} />
    )

    const treeBackground = {
      backgroundImage: 'url(' + treeBackgroundImage + ')',
    }

    return (
        <div className={classes.overlay} style={treeBackground}>
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
    )
  }

export default menuTypes;
