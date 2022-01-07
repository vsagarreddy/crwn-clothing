import React from "react";
import { Routes, Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";

import "./shop.styles.scss";

import CollectionPage from '../collection/collection.component';

const ShopPage = () => {
    return (
        <div className="shop-page">
            <Routes>
                <Route path="/" element={<CollectionOverview />} />
                <Route path="/:type" element={<CollectionPage />} />
            </Routes>
        </div>
    );
};

export default ShopPage;
