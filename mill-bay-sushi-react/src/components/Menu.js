import React, {Component} from 'react';
import './css/Menu.css';
import {Link} from 'react-router-dom';

class Menu extends Component {
  state = {menus: []}

  componentDidMount() {
    fetch('/menu')
      .then(res => res.json())
      .then(menus => this.setState({ menus }));
  }

  render() {
    const style = {
      width: '60%',
      margin: 'auto',
      border: '1px solid #eee',
      boxShadow: '0 2px 3px #ccc',
      padding: '16px',
      textAlign: 'center',
      maringTop: '10px',
      };

    return (
      <div className="Menu">
        <h1>Menu</h1>
        <div style={style}>
          {this.state.menus.map(list =>
            <div>{list.food}{list.price}</div>
          )}
        </div>
      </div>
    );
  }
}


export default Menu;
