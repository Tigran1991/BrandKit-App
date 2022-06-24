import React from "react";

import "../../../App.css";

const AddLogo = () => {
  return (
    <div className="logo">
      <label>Brand Logo</label>
      <div className="selected-image">
        <div className="add-brand-logo">
          <input
            type="file"
            style={{ display: "none" }}
            id='download-logo'
          />
          <label htmlFor="download-logo" className="plus" />
        </div>
        <div className="added-image"></div>
      </div>
    </div>
  );
};

export default AddLogo;
