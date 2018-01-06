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
        <div id={classes.contactHeading}>
        <h1>Contact</h1>
          {this.state.contactInfo.map(info =>
            <div>{info.phone} {info.address}</div>
          )}
        </div>
          <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />
      </div>
    );
  }
}


export default Contact;
