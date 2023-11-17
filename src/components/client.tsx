import React, { useState } from 'react';
import clientCSS from './client.module.css'

// specifying the props that this component expects. In this case, it includes a question prop of type string
interface ClientProps {
  client: string;
}

// declares a functional component named client
const Client: React.FC<ClientProps> = ({ client }) => {

   // useState is used to manage the state of two boolean variables
  const [isCheckedSingle, setCheckedSingle] = useState(false);
  const [isCheckedMultiple, setCheckedMultiple] = useState(true);

   // handleCheckboxChange is a function that toggles the states of the 'Single' and 'Multiple' options based on the selected option
  const handleCheckboxChange = (option: 'Single' | 'Multiple') => {
    if (option === 'Single') {
      setCheckedSingle(!isCheckedSingle);
      setCheckedMultiple(false);
    } else {
      setCheckedMultiple(!isCheckedMultiple);
      setCheckedSingle(false);
    }
  };

  return (
    <div className={clientCSS.client}>
      <p style={{ marginRight: '100px'}}>{client}</p>
      <label>
        <input 
          type="radio"
          checked={isCheckedSingle}
          onChange={() => handleCheckboxChange('Single')}
        />
        &nbsp;Single
      </label>
      <label className={clientCSS.lab}>
        <input
          type="radio"
          checked={isCheckedMultiple}
          onChange={() => handleCheckboxChange('Multiple')}
        />
        &nbsp;Multiple
      </label>
    </div>
  );
};

export default Client;
