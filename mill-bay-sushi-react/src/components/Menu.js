import React, {Component} from 'react';
import TypesOfFood from './menus/TypesOfFood'
import classes from './css/Menu.css';
import Panel from './img/panel.png'
import {Link} from 'react-router-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import WOW from 'wowjs';

class Menu extends Component {
  state = {menu: []}
  componentDidMount() {
    // new WOW.WOW().init();
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
  }

    render() {
      const style = {
        backgroundImage: 'url(' + Panel + ')',
      };

      return (
      // <MuiThemeProvider>
        <div className="Menu">
          <h1 className={classes.menuHeading}>Menu</h1>
          <div id={classes.AllTypes}>
              {this.state.menu.map((list, index) =>
                  <div key={list.id} zDepth={2} style={style} className={classes.Menus} onClick={() => this.showMenu(list.id)}><p className={classes.listName}>{list.name}</p></div>
              )}
          </div>
          <div>
            {this.state.menu.map(types  =>
              {if (types.show === true) {
                  return <TypesOfFood key={types.id} types={types.food} click={() => this.showMenu(types.id)} />
              }}
            )}
          </div>
        </div>
      // </MuiThemeProvider>
      );
    }

}


export default Menu;
