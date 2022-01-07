import React from "react";

import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop.selectors';

const CollectionOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...collectionProps }) => (
                <CollectionPreview key={id} {...collectionProps} />
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
