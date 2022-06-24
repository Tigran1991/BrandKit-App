import React from "react";

import '../../../App.css';

const AddColors = () => {

    return (
        <div className="color">
            <label>Brand Color</label>
            <div className="selected-color">
                <div className="add-brand-color">
                    <input
                        type="file"
                        style={{ display: "none" }}
                        id='download-color'
                    />
                <label htmlFor="download-logo" className="plus" />
                </div>
                <div className="added-color"></div>
            </div>
        </div>
    )
}

export default AddColors;