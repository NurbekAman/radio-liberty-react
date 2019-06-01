import React from 'react';

import './index.scss';

const blockName = 'header';

export default function Header(props) {
  const { title } = props;

  return (
   <div className={blockName}>
     <div className={`${blockName}__title-wrapper`}>
       <p className={`${blockName}__title`}>
         {title}
       </p>
     </div>
   </div>
  );
}