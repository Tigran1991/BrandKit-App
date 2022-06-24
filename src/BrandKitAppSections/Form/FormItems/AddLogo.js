import React from "react";

import "../../../App.css";

const AddLogo = () => {
  return (
    <div className="logo">
      <label>Brand Logo</label>
      <div className="add-brand-logo">
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id='download'
        />
        <label htmlFor="download" className="plus" />
      </div>
    </div>
  );
};

export default AddLogo;
