import React, { useState } from 'react';
import buttonsCSS from './buttons.module.css'

interface QuestionProps {
  questionText: string;
  option1Text: string;
  option2Text: string;
}

const Buttons: React.FC<QuestionProps> = ({
  questionText,
  option1Text,
  option2Text,
}) => {
    // This will set the default selected option to 1.
    // 'selectedOption' is a state variable that keeps track of the selected option (1 or 2). It's initialized as null.
    // 'handleOptionClick' is a function that updates the selectedOption state based on the clicked button.
    const [selectedOption, setSelectedOption] = useState<number | null>(1);

  const handleOptionClick = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <div  style={{ marginTop: '20px'}}>
      <p>{questionText}</p>
      <div>
        {/* The style changes the background color of the selected button  */}
        <button 
          className={buttonsCSS.buttonsec}
          onClick={() => handleOptionClick(1)}
          style={{ backgroundColor: selectedOption === 1 ? 'darkblue' : 'white', color: selectedOption === 1 ? 'white' : 'orange', border: selectedOption === 1 ? '' : '' }}
        >
          {option1Text}
        </button>
        <button
          className={buttonsCSS.buttonsec}
          onClick={() => handleOptionClick(2)}
          style={{ backgroundColor: selectedOption === 2 ? 'darkblue' : 'white', color: selectedOption === 2 ? 'white' : 'orange', border: selectedOption === 2 ? '' : ''  }}
        >
          {option2Text}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
