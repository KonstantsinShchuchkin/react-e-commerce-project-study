import React from "react";
import { withRouter } from "react-router-dom";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

import SHOP_DATA from "./shop.data";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collection: SHOP_DATA,
    };
  }

  render() {
      const {collection} = this.state;
      return (<div className="shop-page">
          {
              collection.map(({id, ...otherCollectionProps}) => (
                  <CollectionPreview key={id} {...otherCollectionProps}/>

              ))
          }
      </div>)
  }
}
export default withRouter(ShopPage);
