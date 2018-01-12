import React from 'react';
import classes from '../../css/Footer.css'
import footerImage from '../../img/footerImage2.png'
import footerImageSalmons from '../../img/FooterImage2Salmons.png'
import { Parallax } from 'react-scroll-parallax';

const style = {
  backgroundImage: 'url(' + footerImage + ')',
  minHeight: '65vh',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};


const Footer =  (props) => {
    return (
      <div>
          <Parallax
            className={classes.parallaxImages1}
            // disabled='false'
            offsetXMax={100}
            offsetXMin={20}
            offsetYMin={0}
            offsetYMax={100}
            slowerScrollRate
            tag="figure"
            >
              <img src={footerImageSalmons} style={{width: '40%'}} />
            </Parallax>
            <img src={footerImage} style={{width: '100%', marginTop: '-423px'}}/>
      </div>
    )
  }

export default Footer;
