import React, { useState } from 'react';
import checkCSS from './checkbox.module.css'

// specifying the props that this component expects. In this case, it includes a question prop of type string
interface QuestionProps {
  question: string;
}

// declares a functional component named question
const Question: React.FC<QuestionProps> = ({ question }) => {

  // useState is used to manage the state of two boolean variables
  const [isCheckedYes, setCheckedYes] = useState(true);
  const [isCheckedNo, setCheckedNo] = useState(false);

  // handleCheckboxChange is a function that toggles the states of the 'Yes' and 'No' options based on the selected option
  const handleCheckboxChange = (option: 'yes' | 'no') => {
    if (option === 'yes') {
      setCheckedYes(!isCheckedYes);
      setCheckedNo(false);
    } else {
      setCheckedNo(!isCheckedNo);
      setCheckedYes(false);
    }
  };

  return (
    <div className={checkCSS.question}>
      <p>{question}</p>
      <label>
        <input 
          type="radio"
          checked={isCheckedYes}
          onChange={() => handleCheckboxChange('yes')}
        />
        &nbsp;Yes
      </label>
      <label className={checkCSS.lab}>
        <input
          type="radio"
          checked={isCheckedNo}
          onChange={() => handleCheckboxChange('no')}
        />
        &nbsp;No
      </label>
    </div>
  );
};

export default Question;
