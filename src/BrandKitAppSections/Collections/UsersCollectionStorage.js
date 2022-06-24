import React from "react";
import { useSelector } from "react-redux";

import '../../App.css';
import CollectionItem from "./CollectionItem.js";
import { selectedCollections } from "../../redux/features/UserCollectionsReducerSlice";

const UsersCollectionStorage = () => {

    const BRAND_KIT_COLLECTIONS = useSelector(selectedCollections);

    return (
        <div className="users-brand-kit-board">
            {BRAND_KIT_COLLECTIONS.map(brandKits => {
                return <CollectionItem id={brandKits.id} key={brandKits.id}/>
            })}
        </div>
    )
}

export default UsersCollectionStorage;