import React from "react";
import DATA from "../../assets/data.json";

import "./shop.styles.scss";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const SHOP_DATA = DATA.SHOP_DATA;

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="shop-page">
        {SHOP_DATA.map(({id, ...collectionProps})=> (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
