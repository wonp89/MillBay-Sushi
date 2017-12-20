import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Contact extends Component {
  constructor () {
  super();
  this.state = {contactInfo: []}
}

  componentDidMount() {
    fetch('/contact')
      .then(res => res.json())
      .then(contactInfo => this.setState({ contactInfo }));
  }

  render() {
    return (
      <div className="Index">
        <h1>Contact</h1>
        {this.state.contactInfo.map(info =>
          <div>{info.phone}{info.address}</div>
        )}
      </div>
    );
  }
}


export default Contact;
