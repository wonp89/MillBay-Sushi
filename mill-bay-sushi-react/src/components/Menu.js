import React, {Component} from 'react';
import TopIllustration from './menus/TopIllustration'
import Intro from './Intro';
import forest from './img/forest.png'
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

      const forestParallax = {
        backgroundImage: 'url(' + forest + ')',
        minHeight: '100px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '400px',
        marginTop: '100px'
      }

      return (
        <div id="Menu">
          <TopIllustration />
          <Intro />
          <div  style={forestParallax} ></div>
          <div id={classes.AllTypes} className="wow slideInLeft">
              <h1 id={classes.menuHeading}>Menu</h1>
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
