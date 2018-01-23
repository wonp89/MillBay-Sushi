import React from 'react';
import classes from '../../css/salmonPainting.css'
import footerImage from '../../img/salmonPainting2.png'
import footerImageSalmons from '../../img/salmonPainting2Salmons.png'
import { Parallax } from 'react-scroll-parallax';

const Footer =  (props) => {
    return (
      <div>
        <div style={{overflow: "hidden"}}>
          <Parallax
            offsetXMax={100}
            offsetXMin={20}
            slowerScrollRate
            tag="figure"
            >
              <img src={footerImageSalmons} style={{width: '40%'}} alt="" />
            </Parallax>
          </div>
            <img src={footerImage} style={{width: '100%', marginTop: '-600px'}} alt=""/>
      </div>
    )
  }

export default Footer;
