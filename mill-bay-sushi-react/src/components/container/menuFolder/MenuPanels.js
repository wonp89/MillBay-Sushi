import React from 'react';
import classes from '../../css/menuPanels.css';


const MenuPanels =  (props) => {
    return  (
            <div>
                <div style={{backgroundImage: 'url(http://localhost:3000/img/panel.png)'}} className={classes.Menus} onClick={props.click}><p className={classes.listName}>{props.name}</p>
                  <div className={classes.sushiImage} style={{backgroundImage: 'url(http://www.millbaysushi.com/img/menuPanelFoodImgs/menuPanelFoodImg' + props.index + '.png)' }}>
                  </div>
                </div>
            </div>
            )
}

export default MenuPanels;
