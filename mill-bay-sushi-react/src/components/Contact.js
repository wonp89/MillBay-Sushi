import React, { Component } from 'react';
import Map from './container/Map'
import classes from './css/Contact.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import WOW from 'wowjs';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { sent: false }
    this.onSubmit = this.contact.bind(this);
  }

  componentDidMount() {
    new WOW.WOW().init();
  }

  contact(e) {
    e.preventDefault()
    var self = this;
    return fetch(
      '/contact',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: self.refs.from.value,
          name: self.refs.name.value,
          subject: self.refs.subject.value,
          text: self.refs.text.value
        })
      }
    )
      .then(() => {
        const sentBoolean = this.state.sent;
        this.setState({ sent: !sentBoolean });
      })
      .catch(error => alert("Error occured while sending your message"))
  }

  render() {
    var button = null;
    this.state.sent === false ? button = <RaisedButton label="SEND" type="submit" primary={true} /> : button = <RaisedButton label="MESSAGE SENT" type="submit" primary={true} disabled />

    const style = {
      backgroundImage: 'url(http://www.millbaysushi.com/img/salmonPainting1.png)'
    };

    return (
      <MuiThemeProvider>
        <div>
          <div id={classes.contactHeading} style={style}>
            <div id={classes.emptyDiv}></div>
            <form id={classes.contactForm} className="contact-form" onSubmit={this.onSubmit}>
              <div className={classes.formField}>
                <label htmlFor="subject">
                  <div className="label-content">Subject:</div>
                  <input type="text" ref="subject" required />
                </label>
              </div>
              <div className={classes.formField}>
                <label htmlFor="name">
                  <div className="label-content">Name:</div>
                  <input type="text" ref="name" required />
                </label>
              </div>
              <div className={classes.formField}>
                <label htmlFor="from">
                  <div className="label-content">Email:</div>
                  <input type="text" ref="from" required />
                </label>
              </div>
              <div className={classes.formField} style={this.state.sent === false ? { borderBottom: "none" } : { borderBottom: "solid rgb(100, 216, 242)" }} >
                <label htmlFor="text">
                  <div className="label-content">Message:</div>
                  <textarea className="stretch" ref="text" rows="5" required />
                </label>
              </div>
              {button}
              <div id={classes.businessInquiries}>* We don't take food orders by email. Business inquiries only.</div>
            </form>
            <div id={classes.contactHeadingContent} style={this.state.sent === false ? { border: "none" } : { border: "solid rgb(100, 216, 242)" }} >
              <h1 className="wow fadeInUp"><a href="tel:+12509297117" id={classes.phoneNumber}> 250. 929.  7117</a></h1>
              <p style={{ animationDelay: '0.3s' }} className="wow fadeInUp"><span>Address</span> 2720 Mill bay RD, Mill bay, BC, V0R 2P1</p>
              <p style={{ animationDelay: '0.4s' }} className="wow fadeInUp"><span>Hours</span> Open 7 days a week 12:00AM ~ 8:00PM</p>
            </div>
          </div>
          <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOO071sg9pRmhLo_iBA0ycoKczwmMmfyA&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div id={classes.mapLoadingElement} />}
            containerElement={<div id={classes.mapContainerElement} />}
            mapElement={<div id={classes.mapElement} />}
          />
        </div>
        <center className={classes.copyRight}>Copyright © 2018 by Mill Bay Sushi  All Rights Reserved. Website created by: wonpark89@gmail.com</center>
      </MuiThemeProvider >
    );
  }
}


export default Contact;
