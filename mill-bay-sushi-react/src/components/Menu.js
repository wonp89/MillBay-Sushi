import React, {Component} from 'react';
import Intro from './Intro';
import MenuPanels from './menus/MenuPanels';
import MenuImages from './menus/menuImages/MenuImages';
import Footer from './menus/footer/Footer';
import TypesOfFood from './menus/TypesOfFood'
import classes from './css/Menu.css';
import {Link} from 'react-router-dom';
import WOW from 'wowjs';

class Menu extends Component {
  state = {menu: []}
  componentDidMount() {
    new WOW.WOW().init();
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu }));
  }

  showMenu = (id) => {
    const clickedMenu = {...this.state.menu[id]};
    const show = clickedMenu.show
    const menus = [...this.state.menu]
    menus[id].show = !show
    this.setState({menu: menus})
    menus[id].show  === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }

    render() {
      return (
        <div className="Menu">
          <h1 id={classes.menuHeading}>Mill Bay Sushi</h1>
          <Intro />
          <div id={classes.AllTypes} className="wow slideInLeft">
              {this.state.menu.map( (list, index) =>
                 <MenuPanels key={index} click={() => this.showMenu(list.id)} name={list.name} index={index} />
              )}
          </div>
          <MenuImages />
          <div>
            {this.state.menu.map((types, index)  =>
              {if (types.show === true) {
                  return <TypesOfFood key={index} types={types.food} click={() => this.showMenu(types.id)} />
              }}
            )}
          </div>
          <Footer />
        </div>
      );
    }

}


export default Menu;
