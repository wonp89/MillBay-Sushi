import React, { Component } from 'react';
import classes from '../../css/Ocean.css'
import ParallaxImage2 from '../../img/menuImages2.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';
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
          <h1 id={classes.oceanHeading} className="wow flash">G A L L E R I E S ►</h1>
          <div id={classes.OceanImagesContainer} className="wow fadeInUp">
            <GridList
              cellHeight={300}
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
      </MuiThemeProvider>
    )
  }
}

export default OceanImages;
