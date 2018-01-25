import React, {Component} from 'react';
import TopSlideImages from './container/TopSlidePhotos'
import Scroll from 'react-scroll-to-element';
import Intro from './Intro';
import middleImg from './img/middleImage.jpg'
import pwPatternImage from './img/pw_pattern.png'
import cloud from './img/cloud.png'
import togoMenu from './img/MillBaySushi-TogoMenu.pdf'
import MenuPanels from './container/menuFolder/MenuPanels';
import Hours from './container/hours/HoursImages';
import SalmonPainting2 from './container/paintings/Painting2';
import TypesOfFood from './container/menuFolder/TypesOfFood'
import Ocean from './container/ocean/Ocean'
import classes from './css/Menu.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import WOW from 'wowjs';

class Menu extends Component {
  state = {menu: []};
  componentDidMount() {
    new WOW.WOW().init();
    fetch('/menu')
      .then(res => res.json())
      .then(menu => this.setState({ menu: menu }));
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
    if (nextPage === undefined) nextPage = menus[16]
    nextPage.show = !nextPage.show
    this.setState({menu: menus})
  }

    render() {

      return (
          <div id="Menu">
            <Scroll>
              <div id={classes.scrollTop}>⇪</div>
            </Scroll>
            <Intro />
            <TopSlideImages />
            {/* <div  style={{backgroundImage: 'url(' + middleImg + ')'}} id={classes.sashimiMiddleImage}>
              <h1 id={classes.overlaidText}>MENU</h1>
            </div> */}
            <div id={classes.AllTypes} style={{backgroundImage: 'url(' + pwPatternImage + ')'}}>
                <div id={classes.menuHeading} className="wow slideInLeft">
                  <h1>MENU</h1>
                </div>
                {this.state.menu.map( (list, index) =>
                   <MenuPanels key={index} click={() => this.showMenu(list.id)} name={list.name} index={index} />
                )}
            </div>
            <div id={classes.menuContent} style={{backgroundImage: 'url(' + pwPatternImage + ')'}}>
              <h3 style={{marginTop: '0'}} id={classes.takeOutMenuPointer}>▼</h3>
              <a href={togoMenu} style={{marginBottom: '0'}} target="_blank">
                <span>Take Out Menu PDF</span>
              </a>
            </div>
            <div style={{maxWidth: '1440px', overflow: 'hidden', paddingBottom: '130px'}}>
              <img src={cloud} style={{position: 'sticky', zIndex: '-1'}} alt="" />
            </div>
            <Hours className='wow fadeIn'/>
            <div>
              {this.state.menu.map((types, index)  =>
                {if (types.show === true)
                    return <TypesOfFood foodType={types.name} key={index} types={types.food} click={() => this.showMenu(types.id)} next={() => this.nextMenu(types.id)} previous={() => this.previousMenu(types.id)} />
                }
              )}
            </div>
            <ParallaxProvider>
              <SalmonPainting2 />
            </ParallaxProvider>
            <Ocean />
          </div>
      );
    }

}

export default Menu;
