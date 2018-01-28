import React, { Component } from 'react';
import classes from '../../css/Ocean.css'
import gallery from '../../img/galleries/gallery.jpg'
import gallery1 from '../../img/galleries/gallery1.jpg'
import gallery2 from '../../img/galleries/gallery2.jpg'
import gallery3 from '../../img/galleries/gallery3.jpg'
import gallery4 from '../../img/galleries/gallery4.jpg'
import gallery5 from '../../img/galleries/gallery5.jpg'
import gallery6 from '../../img/galleries/gallery6.jpg'
import gallery7 from '../../img/galleries/gallery7.jpg'
import gallery8 from '../../img/galleries/gallery8.jpg'
import gallery9 from '../../img/galleries/gallery9.jpg'
import gallery10 from '../../img/galleries/gallery10.jpg'
import gallery11 from '../../img/galleries/gallery11.jpg'
import gallery12 from '../../img/galleries/gallery12.jpg'
import gallery13 from '../../img/galleries/gallery13.jpg'
import gallery14 from '../../img/galleries/gallery14.jpg'
import whiteStroke from '../../img/whiteStroke.png'
import WOW from 'wowjs';


class OceanImages extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {

    return (
    <div id={classes.ocean}>
      <div id={classes.galleryHeading} className="wow fadeInDown">
          <h1 id={classes.gHeading}>G A L L E R I E S</h1>
          <p id={classes.gParagraph}>Come join us for great culinary experience.</p>
          <img id={classes.whiteStroke} src={whiteStroke} />
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery} alt="" />
          <div className={classes.desc}><h3>Spicy Chirashi Don</h3><p>$20.95</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery1} alt="" />
          <div className={classes.desc}><h3>Cucumber Salad Roll</h3><p>$11.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery2} alt="" />
          <div className={classes.desc}><h3>Kiss of Fire</h3><p>$18.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery3} alt="" />
          <div className={classes.desc}><h3>Cheese Lava Roll</h3><p>$20.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery4} alt="" />
          <div className={classes.desc}><h3>Butterfly Roll</h3><p>$18.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery5} alt="" />
          <div className={classes.desc}><h3>Firecracker Roll</h3><p>$16.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery6} alt="" />
          <div className={classes.desc}><h3>M80 Roll</h3><p>$20.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery7} alt="" />
          <div className={classes.desc}><h3>Futomaki Roll</h3><p>$10.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery8} alt="" />
          <div className={classes.desc}><h3>Crazy Roll</h3><p>$20.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery9} alt="" />
          <div className={classes.desc}><h3>Beef Udon</h3><p>$11.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery10} alt="" />
          <div className={classes.desc}><h3>Tuna Tataki</h3><p>$12.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery11} alt="" />
          <div className={classes.desc}><h3>Monkey Brain</h3><p>$7.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery12} alt="" />
          <div className={classes.desc}><h3>Kamikaze Salmon Roll</h3><p>$11.90</p></div>
        </div>
        <div className={classes.gallery}>
          <img src={gallery13} alt="" />
          <div className={classes.desc}><h3>Caterpillar Roll</h3><p>$11.90</p></div>
        </div>
      </div>
      <div className={classes.galleryContainer}>
        <div className={classes.gallery}>
          <img src={gallery14} alt="" />
          <div className={classes.desc}><h3>Beef Teriyaki</h3><p>$12.90</p></div>
        </div>
      </div>
        <center className={classes.copyRight}>Copyright © 2018 by Mill Bay Sushi  All Rights Reserved. Website created by: wonpark89@gmail.com</center>
    </div>
    )
  }
}

export default OceanImages;
