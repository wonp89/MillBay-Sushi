import React from 'react';
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
              <img src='http://localhost:3000/img/salmonPainting2Salmons.png' style={{width: '40%'}} alt="" />
            </Parallax>
          </div>
            <img src='http://localhost:3000/img/salmonPainting2.png' style={{width: '100%', marginTop: '-600px'}} alt=""/>
      </div>
    )
  }

export default Footer;
