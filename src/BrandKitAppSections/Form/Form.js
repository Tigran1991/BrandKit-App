import React from "react";
import { useDispatch } from "react-redux";

import '../../App.css';
import AddLogo from './FormItems/AddLogo';
import AddFonts from "./FormItems/AddFonts";
import AddColors from './FormItems/AddColors';
import { selectedItem } from "../../redux/features/ItemReducerSlice";
import { generateId } from '../../utils';

const Form = () => {

  const dispatch = useDispatch();

  return (
    <div className="brand-kit">

      <AddLogo />
      <AddFonts />
      <AddColors />

      <div className="save-brand-kit">
        <button className="save-brand-kit-btn" onClick={() => dispatch(selectedItem({
          id: generateId(),
          image: 'Tesla_Motors.png',
        }))}> Save </button>
      </div>
      
    </div>
  );
};

export default Form;
