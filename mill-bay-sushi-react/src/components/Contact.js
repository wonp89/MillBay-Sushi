import React, {Component} from 'react';
import Map from './container/Map'
import classes from './css/Contact.css';
import SalmonPainting1 from './container/paintings/Painting';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import WOW from 'wowjs';

class Contact extends Component {
  constructor (props) {
    super(props);
    this.state = {sent: false}
    this.onSubmit = this.contact.bind(this);
  }

  componentDidMount() {
    new WOW.WOW().init();
  }

  contact (e) {
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
        // .then(() => loading = true)  << idea of setting up loading page
      }
    )
    .then(() => {
          const sentBoolean = this.state.sent;
          this.setState({sent: !sentBoolean});
          })
    .catch(error => alert("Error occured while sending your message"))
  }

  render() {
    var button = null;
    this.state.sent === false ? button = <RaisedButton label="SEND" type="submit" primary={true} /> : button = <RaisedButton label="MESSAGE SENT" type="submit" primary={true} disabled />

    return (
      <MuiThemeProvider>
        <div>
          <div id={classes.contactHeading}>
            <div id={classes.emptyDiv}></div>
            <form id={classes.contactForm} className="contact-form" onSubmit={this.onSubmit}>
              <div className={classes.formField}>
                <label htmlFor="subject">
                  <div className="label-content">Subject:</div>
                  <input type="text" ref="subject"  required />
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
              <div className={classes.formField} style={this.state.sent === false ? {borderBottom: "dotted"} : {borderBottom: "solid rgb(100, 216, 242)"}} >
                <label htmlFor="text">
                  <div className="label-content">Message:</div>
                  <textarea className="stretch" ref="text" rows="5" required />
                </label>
              </div>
              {button}
            </form>

            <div id={classes.contactHeadingContent} style={this.state.sent === false ? {border: "dotted"} : {border: "solid rgb(100, 216, 242)"}} >
                  <h1 className="wow fadeInUp"><a href="tel:+2509297117" id={classes.phoneNumber}> 250. 929. 7117</a></h1>
                  <p style={{animationDelay: '0.2s'}} className="wow fadeInUp"><span>Email</span> millbay.sushi@gmail.com</p>
                  <p style={{animationDelay: '0.3s'}} className="wow fadeInUp"><span>Address</span> 2720 Mill bay RD, Mill bay, BC, V0R 2P1</p>
                  <p style={{animationDelay: '0.4s'}} className="wow fadeInUp"><span>Hours</span> Open 7 days a week 11:30AM ~ 9:00PM</p>
            </div>
          </div>
          <SalmonPainting1 />
            <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBOO071sg9pRmhLo_iBA0ycoKczwmMmfyA&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div id={classes.mapLoadingElement} />}
            containerElement={<div id={classes.mapContainerElement} />}
            mapElement={<div id={classes.mapElement} />}
            />
        </div>
      </MuiThemeProvider>
    );
  }
}


export default Contact;
