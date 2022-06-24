import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Form from "./BrandKitAppSections/Form/Form";
import CollectionStorage from "./BrandKitAppSections/Collections/CollectionStorage";
import { appSelectedState } from "./redux/features/BrandKitAppReducerSlice";
import { selectBrandKitAppState } from "./redux/features/BrandKitAppReducerSlice";

const BrandKitApp = () => {

  const dispatch = useDispatch();

  const BOARD = useSelector(selectBrandKitAppState);

  return (
    <div className="brand-kit-board">

      {!BOARD &&
        <button
          className="add-brand-kit-btn"
          onClick={() => dispatch(appSelectedState(true))}
        > Add Brand Kit </button>
      }

      {BOARD && 
      <>
        <Form />
        <CollectionStorage />
      </>
      }

    </div>
  );
};

export default BrandKitApp;
