import React, { Component } from 'react';
import classes from './css/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

//pages
import Index from './Index';
import Menu from './Menu';
import About from './About';
import Contact from './Contact';

class App extends Component {
  state = {
          navItems: [
                      {name: 'Home', to: '/'},
                      {name: 'Menu', to: '/menu'},
                      {name: 'About', to: '/about'},
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
            {this.state.navItems.map(navItem =>
             <li><Link
             to={navItem.to}
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
          <Route path="/menu" component={Menu} />
          <Route path="/about" component={About} />
          <Route path="/" component={Index} />
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
