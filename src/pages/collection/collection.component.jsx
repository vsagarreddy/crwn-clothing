import React from "react";

import "./collection.styles.scss";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = () => {
    const { type } = useParams();
    const { title, items } = useSelector((state) =>
        selectCollection(type)(state)
    );

    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default CollectionPage;
