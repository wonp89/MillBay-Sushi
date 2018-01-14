import React, {Component} from 'react';
import TopIllustration from './menus/TopIllustration'
import Scroll from 'react-scroll-to-element';
import Intro from './Intro';
import forest from './img/forest.png'
import menuPlateImage from './img/menuPlate.png'
import MenuPanels from './menus/MenuPanels';
import MenuImages from './menus/menuImages/MenuImages';
import Footer2 from './menus/footer/Footer2';
import TypesOfFood from './menus/TypesOfFood'
import Ocean from './menus/Ocean'
import classes from './css/Menu.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import WOW from 'wowjs';

class Menu extends Component {
  state = {menu: []}
  componentDidMount() {
    new WOW.WOW().init();
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu }));
  }

//boolean for displaying menus
  showMenu = (id) => {
    const clickedMenu = {...this.state.menu[id]};
    const show = clickedMenu.show
    const menus = [...this.state.menu]
    menus[id].show = !show
    this.setState({menu: menus})
    menus[id].show  === true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll';
  }

//pressing button goes to the next pages.
  nextMenu = (id) => {
    const menus = [...this.state.menu]
    menus[id].show = false;
    let nextPage = menus[id + 1]
    if (nextPage === undefined) nextPage = menus[0]
    nextPage.show = !nextPage.show
    this.setState({menu: menus})
  }

//pressing button goes to the previous pages.
  previousMenu = (id) => {
    const menus = [...this.state.menu]
    menus[id].show = false;
    let nextPage = menus[id - 1]
    if (nextPage === undefined) nextPage = menus[17]
    nextPage.show = !nextPage.show
    this.setState({menu: menus})
  }

    render() {
      const forestParallax = {
        backgroundImage: 'url(' + forest + ')',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        minHeight: '100vh',
        marginTop: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderTop: "solid 4px white"
      }

      const menuPlate = {
        backgroundImage: 'url(' + menuPlateImage + ')',
      }

      return (
          <div id="Menu">
            <Scroll>
              <div id={classes.scrollTop}>Scroll Top ⇪</div>
            </Scroll>
            <TopIllustration />
            <Intro />
            <div  style={forestParallax}>
              <h1>Heloo</h1>
            </div>
            <div id={classes.menuCurtain}></div>
            <div id={classes.AllTypes}>
                <div id={classes.menuHeading} style={menuPlate} className="wow slideInLeft">
                  <h1>MENU</h1>
                </div>
                {this.state.menu.map( (list, index) =>
                   <MenuPanels key={index} click={() => this.showMenu(list.id)} name={list.name} index={index} />
                )}
            </div>
            <div id={classes.menuContent}>
              <h1 style={{marginTop: '0'}}>Content about Menu</h1>
              <p style={{marginBottom: '0'}}>Amazing Experience</p>
            </div>
            <MenuImages className='wow fadeIn'/>
            <div>
              {this.state.menu.map((types, index)  =>
                {if (types.show === true) {
                    return <TypesOfFood foodType={types.name} key={index} types={types.food} click={() => this.showMenu(types.id)} next={() => this.nextMenu(types.id)} previous={() => this.previousMenu(types.id)}/>
                }}
              )}
            </div>
            <ParallaxProvider>
              <Footer2 />
            </ParallaxProvider>
            <Ocean />
          </div>
      );
    }

}

export default Menu;
