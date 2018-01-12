import React, {Component} from 'react';
import Map from './map/Map'
import classes from './css/Contact.css';
import Footer from './menus/footer/Footer';
import WOW from 'wowjs';

class Contact extends Component {

  componentDidMount() {
    new WOW.WOW().init();
  }

  render() {
    return (
      <div>
        <div id={classes.contactHeading}>
        <h1>-</h1>
            <p style={{animationDelay: '0.2s'}} className="wow fadeInUp">Tel. 250 929 7117</p>
            <p style={{animationDelay: '0.3s'}} className="wow fadeInUp">millbaysushi@gmail.com</p>
            <p style={{animationDelay: '0.4s'}} className="wow fadeInUp">2720 Mill bay RD, Mill bay, BC, V0R 2P1</p>
            <p style={{animationDelay: '0.5s'}} className="wow fadeInUp">Open 7 days a week 11:30AM ~ 9:00PM</p>
        <h1>___________________</h1>
        </div>
        <Footer />
          <Map googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `45vw`, width: '45vw', float:'right', marginRight: '20px', marginTop: '-100px'}} />}
          mapElement={<div style={{ height: `100%`, borderRadius: '100%', border:'solid #a3d7e7 10px' }} />}
          />
      </div>
    );
  }
}


export default Contact;
