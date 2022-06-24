import React from "react";
import { useSelector } from "react-redux";

import '../../App.css';
import EmptyCollectionStorage from "./EmptyCollectionStorage";
import UsersCollectionStorage from "./UsersCollectionStorage";
import { selectCollectionStorageState } from "../../redux/features/CollectionStorageReducerSlice";

const CollectionStorage = () => {

    const STORAGE = useSelector(selectCollectionStorageState);

    return (
        <div className="added-brand-kit-board">
            {!STORAGE && <EmptyCollectionStorage />}

            {STORAGE && <UsersCollectionStorage />}
        </div>
    )

}

export default CollectionStorage;