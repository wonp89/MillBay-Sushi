import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Menu extends Component {
  constructor () {
  super();
  this.state = {menus: []}
}

  componentDidMount() {
    fetch('/menu')
      .then(res => res.json())
      .then(menus => this.setState({ menus }));
  }

  render() {
    return (
      <div className="Index">
        <h1>Menu</h1>
        {this.state.menus.map(list =>
          <div>{list.food}{list.price}</div>
        )}
      </div>
    );
  }
}


export default Menu;
