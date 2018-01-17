import React, {Component} from 'react';
import Map from './map/Map'
import classes from './css/Contact.css';
import Footer from './menus/footer/Footer';
import phoneImage from './img/phone.png'
import WOW from 'wowjs';

class Contact extends Component {
  state = {isClicked: false}
  constructor (props) {
    super(props);
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
      }
    )
    .then(() => console.log("updated"))
  }

  disableButton = (event) => {
    console.log("sdfs")
    this.setState({isClicked: true})
  }


  render() {
    return (
      <div>
        <div id={classes.contactHeading}>
          <div id={classes.contactHeadingContent}>
                <p style={{animationDelay: '0.2s'}} className="wow fadeInUp"><span>Tel</span> 250 929 7117</p>
                <p style={{animationDelay: '0.4s'}} className="wow fadeInUp"><span>Address</span> 2720 Mill bay RD, Mill bay, BC, V0R 2P1</p>
                <p style={{animationDelay: '0.6s'}} className="wow fadeInUp"><span>Hours</span> Open 7 days a week 11:30AM ~ 9:00PM</p>
          </div>
          <form className="contact-form" onSubmit={this.onSubmit}>
            <div className="form-field">
              <label htmlFor="subject">
                <div className="label-content">Subject:</div>
                <input type="text" ref="subject"  required />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="name">
                <div className="label-content">Name:</div>
                <input type="text" ref="name" required />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="from">
                <div className="label-content">Email:</div>
                <input type="text" ref="from" required />
              </label>
            </div>

            <div className="form-field">
              <label htmlFor="text">
                <div className="label-content">Message:</div>
                <textarea className="stretch" ref="text" rows="5" required />
              </label>
            </div>
            <button type="submit">Send</button>
          </form>

          <img src={phoneImage} alt="Phone" id={classes.phoneImage} />
        </div>
        <Footer />
          <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `45vw`, width: '45vw', float:'right', marginRight: '15vw', marginTop: '-100px', marginBottom: '50px'}} />}
          mapElement={<div style={{ height: `100%`, borderRadius: '100%', border:'solid white 20px' }} />}
          />
      </div>
    );
  }
}


export default Contact;
