import React, { Component } from 'react';
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
  render() {
    return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
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
