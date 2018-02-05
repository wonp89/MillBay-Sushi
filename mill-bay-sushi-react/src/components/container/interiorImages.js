import React, {Component} from 'react';
import classes from '../css/interiorImages.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {GridList, GridTile} from 'material-ui/GridList';

class InteriorImages extends Component {
  state = {
          interiorImgs: [
              'http://localhost:3000/img/interior/interior1.png',
              'http://localhost:3000/img/interior/interior2.png',
              'http://localhost:3000/img/interior/interior3.png',
              'http://localhost:3000/img/interior/interior4.png',
              'http://localhost:3000/img/interior/interior5.png',
              'http://localhost:3000/img/interior/interior6.png',
              'http://localhost:3000/img/interior/interior7.png',
              'http://localhost:3000/img/interior/interior8.png',
          ]}

  selectedImage(photo) {
    this.setState({ active: photo });
    this.refs.firstImg.style.display = "none"
  }

render() {
  const styles = {
    gridList: {
      display: 'flex',
      flexWrap: 'nowrap',
      overflowX: 'auto',
    }
  };

    return (
      <MuiThemeProvider>
        <div style={styles.root} id={classes.root}>
         <GridList style={styles.gridList} cols={2.2}>
           {this.state.interiorImgs.map((img, index) => (
             <GridTile
               key={index}
               titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
             >
               <img src={img} key={index} className={classes.imgsSmall} onClick={this.selectedImage.bind(this, img)} alt="Interior Images" />
             </GridTile>
           ))}
         </GridList>
       </div>
       {this.state.interiorImgs.map((largeImg, index) =>
         {if(this.state.active === largeImg)
           return <img src={largeImg} key={index} className={classes.largeImgs} alt="Interior Images"/>
          }
       )}
        <img src="http://localhost:3000/img/interior/interior1.png" className={classes.largeImgs} ref="firstImg" alt="" />
        <img src="http://localhost:3000/img/interior/blackBackground.png" className={classes.blackBackground} alt="" />
      </MuiThemeProvider>
    )
  }
}

export default InteriorImages;
