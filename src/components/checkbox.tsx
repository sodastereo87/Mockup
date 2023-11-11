import React, { useState } from 'react';

interface QuestionProps {
  question: string;
}

const Question: React.FC<QuestionProps> = ({ question }) => {
  const [isCheckedYes, setCheckedYes] = useState(false);
  const [isCheckedNo, setCheckedNo] = useState(false);

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
    <div>
      <p>{question}</p>
      <label>
        <input
          type="checkbox"
          checked={isCheckedYes}
          onChange={() => handleCheckboxChange('yes')}
        />
        Yes
      </label>
      <label>
        <input
          type="checkbox"
          checked={isCheckedNo}
          onChange={() => handleCheckboxChange('no')}
        />
        No
      </label>
    </div>
  );
};

export default Question;
