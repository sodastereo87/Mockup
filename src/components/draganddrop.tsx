import React, { useState } from 'react';
import dragndropCSS from './draganddrop.module.css'

const FileUploader: React.FC = () => {
  // useState<string>('') is used to maintain the file name as state (fileName) in the component
  const [fileName, setFileName] = useState<string>('');

  // handleDrop and handleDragOver functions handle the drop and drag over events respectively
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
     
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // handleFileInputChange function is triggered when a file is selected manually using the file input element. It extracts the file information and updates the fileName state
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFileName(file.name);
     
    }
  };

  return (
    <div
      className={dragndropCSS.dropfile}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
       {/* upload the file using Drag & Drop */}
      <p className={dragndropCSS.dropborder}>Drag & Drop File Here or Browse</p>
      {fileName && <p>Uploaded File: {fileName}</p>}
      <label htmlFor="fileInput">
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        {/* upload the file manually using the button */}
        <button onClick={() => document.getElementById('fileInput')?.click()} className={dragndropCSS.dragsec}>
          Upload Manifeston
        </button>
      </label>
    </div>
  );
};

export default FileUploader;
