import React from 'react';
import classes from '../../css/salmonPainting.css'
import footerImage from '../../img/salmonPainting2.png'
import footerImageSalmons from '../../img/salmonPainting2Salmons.png'
import { Parallax } from 'react-scroll-parallax';

const Footer =  (props) => {
    return (
      <div>
          <Parallax
            offsetXMax={100}
            offsetXMin={20}
            offsetYMin={0}
            offsetYMax={100}
            slowerScrollRate
            tag="figure"
            >
              <img src={footerImageSalmons} style={{width: '40%'}} alt="" />
            </Parallax>
            <img src={footerImage} style={{width: '100%', marginTop: '-430px'}} alt=""/>
      </div>
    )
  }

export default Footer;
