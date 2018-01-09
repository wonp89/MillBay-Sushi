import React from 'react';
import classes from '../../css/Footer.css'
import footerImage from '../../img/footerImage.png'

const ocean = {
  backgroundImage: 'url(' + footerImage + ')',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const Footer =  (props) => {
    return (
        <div style={ocean} id={classes.footer}>
        </div>
    )
  }

export default Footer;
