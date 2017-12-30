import React, {Component} from 'react';
import Appetizer from './menus/Appetizer'
import classes from './css/Menu.css';
import {Link} from 'react-router-dom';

class Menu extends Component {
  state = {menu: []}
  componentDidMount() {
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

      return (
        <div className="Menu">
          <h1>Menu</h1>
          <div>
            {this.state.menu.map(list =>
              <div key={list.id} className={classes.Menus} onClick={() => this.showMenu(list.id)}>{list.name}</div>
            )}
          </div>
          <div>
            {this.state.menu.map(types =>
              {if (types.show === true) {
                  return <Appetizer types={types.food} click={() => this.showMenu(types.id)} />
              }}
            )}
          </div>
        </div>
      );
    }

}


export default Menu;
