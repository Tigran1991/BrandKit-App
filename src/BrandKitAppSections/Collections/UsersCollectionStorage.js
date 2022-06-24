import React, { memo } from "react";

import '../../App.css';
import CollectionItem from "./CollectionItem.js";

const UsersCollectionStorage = memo((props) => {

    return (
        <div className="users-brand-kit-board">
            {props.collections.map(brandKits => {
                return <CollectionItem id={brandKits.id} key={brandKits.id}/>
            })}
        </div>
    )
})

export default UsersCollectionStorage;