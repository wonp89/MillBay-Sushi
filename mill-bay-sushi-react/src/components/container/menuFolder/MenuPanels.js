import React from 'react';
import classes from '../../css/menuPanels.css';

//images for panels
import Panel from '../../img/panel.png'
import sampleSushi1 from '../../img/menuPanelFoodImg1.png'
import sampleSushi2 from '../../img/menuPanelFoodImg2.png'
import sampleSushi3 from '../../img/menuPanelFoodImg3.png'
import sampleSushi4 from '../../img/menuPanelFoodImg4.png'
import sampleSushi5 from '../../img/menuPanelFoodImg5.png'
import sampleSushi6 from '../../img/menuPanelFoodImg6.png'
import sampleSushi8 from '../../img/menuPanelFoodImg8.png'
import sampleSushi9 from '../../img/menuPanelFoodImg9.png'
import sampleSushi10 from '../../img/menuPanelFoodImg10.png'
import sampleSushi11 from '../../img/menuPanelFoodImg11.png'
import sampleSushi12 from '../../img/menuPanelFoodImg12.png'
import sampleSushi13 from '../../img/menuPanelFoodImg13.png'
import sampleSushi14 from '../../img/menuPanelFoodImg14.png'
import sampleSushi15 from '../../img/menuPanelFoodImg15.png'
import sampleSushi16 from '../../img/menuPanelFoodImg16.png'
import sampleSushi17 from '../../img/menuPanelFoodImg17.png'
import sampleSushi18 from '../../img/menuPanelFoodImg18.png'

//Wood panels
const style = {
  backgroundImage: 'url(' + Panel + ')'
};

//Array of images
const images = [
                { backgroundImage: 'url(' + sampleSushi1 + ')' },
                { backgroundImage: 'url(' + sampleSushi2 + ')' },
                { backgroundImage: 'url(' + sampleSushi3 + ')' },
                { backgroundImage: 'url(' + sampleSushi4 + ')' },
                { backgroundImage: 'url(' + sampleSushi5 + ')' },
                { backgroundImage: 'url(' + sampleSushi6 + ')' },
                { backgroundImage: 'url(' + sampleSushi8 + ')' },
                { backgroundImage: 'url(' + sampleSushi9 + ')' },
                { backgroundImage: 'url(' + sampleSushi10 + ')' },
                { backgroundImage: 'url(' + sampleSushi11 + ')' },
                { backgroundImage: 'url(' + sampleSushi12 + ')' },
                { backgroundImage: 'url(' + sampleSushi13 + ')' },
                { backgroundImage: 'url(' + sampleSushi14 + ')' },
                { backgroundImage: 'url(' + sampleSushi15 + ')' },
                { backgroundImage: 'url(' + sampleSushi16 + ')' },
                { backgroundImage: 'url(' + sampleSushi17 + ')' },
                { backgroundImage: 'url(' + sampleSushi18 + ')' }
               ];

const MenuPanels =  (props) => {
    return  (
            <div>
                <div style={style} className={classes.Menus} onClick={props.click}><p className={classes.listName}>{props.name}</p><div className={classes.sushiImage} style={images[props.index]}></div></div>
            </div>
            )
}

export default MenuPanels;
