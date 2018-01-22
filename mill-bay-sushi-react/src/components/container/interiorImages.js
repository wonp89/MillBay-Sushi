import React, {Component} from 'react';
import classes from '../css/interiorImages.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

//interior images
import interior1 from '../img/interior/interior1.png';
import interior2 from '../img/interior/interior2.png';
import interior3 from '../img/interior/interior3.png';
import interior4 from '../img/interior/interior4.png';
import interior5 from '../img/interior/interior5.png';
import interior6 from '../img/interior/interior6.png';
import interior7 from '../img/interior/interior7.png';
import interior8 from '../img/interior/interior8.png';

class InteriorImages extends Component {
  state = {
    interiorImgs: [
            {
              img: interior1
            },
            {
              img: interior2
            },
            {
              img: interior3
            },
            {
              img: interior4
            },
            {
              img: interior5
            },
            {
              img: interior6
            },
            {
              img: interior7
            },
            {
              img: interior8
            }
          ]}

  selectedImage(photo) {
    this.setState({ active: photo });
    this.refs.firstImg.style.display = "none"
  }


render() {
  const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      borderTop: 'solid 1px white'
    },
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    }
  };

    return (
      <MuiThemeProvider>
        <div style={styles.root}>
         <GridList style={styles.gridList} cols={2.2}>
           {this.state.interiorImgs.map((img, index) => (
             <GridTile
               key={img.img}
               title={img.title}
               titleStyle={styles.titleStyle}
               titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
             >
               <img src={img.img} key={index} className={classes.imgsSmall} onClick={this.selectedImage.bind(this, img)} alt="Interior Images" />
             </GridTile>
           ))}
         </GridList>
       </div>
       {this.state.interiorImgs.map((largeImg, index) =>
         {if(this.state.active === largeImg)
           return <img src={largeImg.img} key={index} className={classes.largeImgs} alt="Interior Images"/>
          }
       )}
        <img src={interior1} className={classes.largeImgs} ref="firstImg" alt="" />
      </MuiThemeProvider>
    )
  }
}

export default InteriorImages;
