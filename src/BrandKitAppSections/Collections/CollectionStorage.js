import React from "react";
import { useSelector } from "react-redux";

import '../../App.css';
import EmptyCollectionStorage from "./EmptyCollectionStorage";
import UsersCollectionStorage from "./UsersCollectionStorage";
import { selectedCollections } from "../../redux/features/UserCollectionsReducerSlice";

const CollectionStorage = () => {

    const BRAND_KIT_COLLECTIONS = useSelector(selectedCollections);

    return (
        <div className="added-brand-kit-board">
            {BRAND_KIT_COLLECTIONS.length === 0 && <EmptyCollectionStorage />}

            {BRAND_KIT_COLLECTIONS.length > 0 && <UsersCollectionStorage collections={BRAND_KIT_COLLECTIONS} />}
        </div>
    )

}

export default CollectionStorage;