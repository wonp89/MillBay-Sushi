import React, {Component} from 'react';
import Map from './map/Map'
import classes from './css/Contact.css';
import {Link} from 'react-router-dom';

class Contact extends Component {
  state = {contactInfo: []}

  componentDidMount() {
    fetch('/contact')
      .then(res => res.json())
      .then(contactInfo => this.setState({ contactInfo }));
  }

  render() {
    return (
      <div>
        <h1 id={classes.contactHeading}>Contact</h1>
        {this.state.contactInfo.map(info =>
          <div>{info.phone} {info.address}</div>
        )}
        <Map />
      </div>
    );
  }
}


export default Contact;
