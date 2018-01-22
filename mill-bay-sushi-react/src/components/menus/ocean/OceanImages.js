import React, { Component } from 'react';
import classes from '../../css/Ocean.css'
import ParallaxImage2 from '../../img/menuImages2.png'
import submarineImage from '../../img/submarine.png'
import whaleImage from '../../img/whale.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
import { Parallax } from 'react-scroll-parallax';
import WOW from 'wowjs';

class OceanImages extends Component {
  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    const imgeList = [
      {
        img: ParallaxImage2,
        title: 'sushi1',
        price: '9.99'
      },
      {
        img: ParallaxImage2,
        title: 'sushi2',
        price: '9.99'
      },
      {
        img: ParallaxImage2,
        title: 'sushi1',
        price: '9.99'
      },
      {
        img: ParallaxImage2,
        title: 'sushi1',
        price: '9.99'
      }
    ]

    return (
      <MuiThemeProvider>
        <div>
          <h1 id={classes.oceanHeading} className="wow fadeIn">G A L L E R I E S ►</h1>
          <div className="wow flash">
            <div id={classes.submarineContainer}>
              <img id={classes.submarine} src={submarineImage} alt="" />
              <div id={classes.oceanLight}></div>
            </div>
            <Parallax
              className={classes.parallaxImages1}
              offsetXMax={50}
              offsetXMin={-20}
              slowerScrollRate
              tag="figure"
              >
                <img src={whaleImage} id={classes.whale} />
            </Parallax>
          </div>
            <div id={classes.OceanImagesOuterContainer}>
                <div id={classes.OceanImagesContainer} className="wow fadeIn">
                  <GridList
                    cellHeight={400}
                    cols={2}
                  >
                    {imgeList.map((tile) => (
                    <GridTile
                      key={tile.img}
                      title={tile.title}
                      subtitle={<span>Price <b>{tile.price}</b></span>}
                    >
                      <img src={tile.img} alt="" />
                    </GridTile>
                  ))}
                 </GridList>
                </div>
            </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default OceanImages;
