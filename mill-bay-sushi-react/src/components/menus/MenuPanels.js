import React from 'react';
import classes from '../css/menuPanels.css';

//images for panels
import Panel from '../img/panel.png'
import sampleSushi from '../img/sampleSushi.png'
import sampleSushi2 from '../img/sushi.png'

//Wood panels
const style = {
  backgroundImage: 'url(' + Panel + ')'
};

//Array of images
const images = [
                { backgroundImage: 'url(' + sampleSushi + ')' },
                { backgroundImage: 'url(' + sampleSushi2 + ')' }
               ];

const MenuPanels =  (props) => {
    return  (
            <div>
                <div style={style} className={classes.Menus} onClick={props.click}><p className={classes.listName}>{props.name}</p><div className={classes.sushiImage} style={images[props.index]}></div></div>
            </div>
            )
}

export default MenuPanels;
