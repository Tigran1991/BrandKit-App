import React from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";

import '../../App.css';
import { updateBoard } from "../../redux/features/UserCollectionsReducerSlice";

const CollectionItem = memo((props) => {

    const dispatch = useDispatch();

    const ID = props.id

    return (
        <div className="brand-kit-collection">
            <button className="delete-item" onClick={() => dispatch(updateBoard({ID}))}>X</button>
        </div>
    )
})

export default CollectionItem;