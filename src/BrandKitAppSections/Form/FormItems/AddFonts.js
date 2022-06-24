import React from "react";

import "../../../App.css";

const AddFonts = () => {
    
  return (
    <div className="font">
      <label>Brand Fonts</label>
      <div className="selected-font">
        <input type="file" style={{ display: "none" }} id="download-font" />
        <label htmlFor="download-font" className="add-font-btn" />
        <div className="added-font"></div>
      </div>
    </div>
  );
};

export default AddFonts;
