import React, { Component } from 'react';
import classes from './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

//pages
import Menu from './Menu';
import Contact from './Contact';

class App extends Component {
  state = {
          navItems: [
                      {name: 'Home', to: '/' },
                      {name: 'Contact', to: '/contact'}
                    ]
          }

  selectedNavItem(navItem) {
    this.setState({ active: navItem });
  }

  render() {
    return (
    <Router>
      <div className="App">
        <nav>
          <ul className={classes.topnav}>
            {this.state.navItems.map((navItem, index) =>
             <li key={index}><Link             
             to={navItem.to}
            //  style={this.state.active === undefined ? navItem.style : {}}
             className={this.state.active === navItem ? classes.active : {}}
             onClick={this.selectedNavItem.bind(this, navItem)}
             >
            {navItem.name}
             </Link></li>
            )}
          </ul>
        </nav>
        <Switch>
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Menu} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
