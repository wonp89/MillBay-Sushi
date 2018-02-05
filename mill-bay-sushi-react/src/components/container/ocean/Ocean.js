import React, { Component } from 'react';
import classes from '../../css/Ocean.css'
import WOW from 'wowjs';

class OceanImages extends Component {
  state = { foodNames:
              [
                {name: 'Spicy Chirashi Don', price: '$20.95'},
                {name: 'Cucumber Salad Roll', price: '$11.90'},
                {name: 'Kiss of Fire', price: '$18.90'},
                {name: 'Cheese Lava Roll', price: '$20.90'},
                {name: 'Butterfly Roll', price: '$18.90'},
                {name: 'Firecracker Roll', price: '$16.90'},
                {name: 'M80 Roll', price: '$20.90'},
                {name: 'Futomaki Roll', price: '$10.90'},
                {name: 'Crazy Roll', price: '$20.90'},
                {name: 'Beef Udon', price: '$11.90'},
                {name: 'Tuna Tataki', price: '$12.90'},
                {name: 'Monkey Brain', price:  '$7.90'},
                {name: 'Kamikaze Salmon Roll', price: '$11.90'},
                {name: 'Caterpillar Roll', price: '$11.90'},
                {name: 'Beef Teriyaki', price: '12.90'}
              ]
          }

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
    <div id={classes.ocean}>
      <div id={classes.galleryHeading} className="wow fadeInDown">
          <h1 id={classes.gHeading}>G A L L E R I E S</h1>
          <p id={classes.gParagraph}>Come join us for great culinary experience.</p>
          <img id={classes.whiteStroke} src="http://www.millbaysushi.com/img/whiteStroke.png" alt="" />
      </div>
        <div className={classes.galleryContainer}>
          {this.state.foodNames.map((food, index) => (
            <div className={classes.gallery}>
              <img src={"http://www.millbaysushi.com/img/galleries/gallery" + index + ".jpg"} alt="" />
              <div className={classes.desc}><h3>{food.name}</h3>
                <p>{food.price}</p>
              </div>
            </div>
          ))}
        </div>
        <center className={classes.copyRight}>Copyright © 2018 by Mill Bay Sushi  All Rights Reserved. Website created by: wonpark89@gmail.com</center>
    </div>
    )
  }
}

export default OceanImages;
