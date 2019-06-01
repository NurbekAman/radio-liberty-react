import React from 'react';
import PropTypes from 'prop-types';

import './hero.scss';

const blockName = 'hero';

function Hero(props) {
 return (
  <div className={blockName}>
    <div className={`${blockName}__hero-image-wrapper`}>
      <img
       src="./assets/background.jpg"
       className={`${blockName}__hero-image`}
       role="presentation"
      />
    </div>
  </div>
 );
};

export default Hero;