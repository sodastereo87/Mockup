import React, { useState } from 'react';
import clientCSS from './client.module.css'


interface ClientProps {
  client: string;
}

const Client: React.FC<ClientProps> = ({ client }) => {
  const [isCheckedSingle, setCheckedSingle] = useState(false);
  const [isCheckedMultiple, setCheckedMultiple] = useState(true);

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
      <p>{client}</p>
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
