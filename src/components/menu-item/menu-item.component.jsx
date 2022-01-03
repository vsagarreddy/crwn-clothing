import React from "react";

import './menu-item.styles.scss';

const MenuItem = ({title = '', imageUrl, size, subtitle = 'SHOP NOW'}) => (
  <div className={`${size} menu-item`}>
    <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}></div>

    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">{subtitle}</span>
    </div>
  </div>
);

export default MenuItem;
