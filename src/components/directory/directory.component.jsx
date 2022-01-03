import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import data from './../../assets/data.json';

import './directory.styles.scss';

const sections = data.sections;

export default class Directory extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="directory-menu">
        {
          sections.map(({title, imageUrl, size, id}) => <MenuItem key={id} size={size} title={title} imageUrl={imageUrl} />)
        }
      </div>
    )
  }
}