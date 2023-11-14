import React, { useState } from 'react';
import dragndropCSS from './draganddrop.module.css';

const FileUploader: React.FC = () => {
  const [fileName, setFileName] = useState<string>('');
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // simulated progress bar
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  // this function is responsible for setting up the file name and initiating the progress simulation
  const handleFileUpload = (file: File) => {
    setFileName(file.name);

    // Simulated upload progress
    const totalSize = file.size;
    const step = 50; // Simulated step
    let uploaded = 0;

    const uploadInterval = setInterval(() => {
      uploaded += step;
      const progress = (uploaded / totalSize) * 100;
      setUploadProgress(progress);

      if (progress >= 100) {
        clearInterval(uploadInterval);
      }
    }, 10); // Simulated time delay

    
  };

  return (
    <div>
    <div
      className={dragndropCSS.dropfile}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className={dragndropCSS.dropborder}>Drag & Drop File Here or  <strong>Browse</strong></p>
      <button
          onClick={() => document.getElementById('fileInput')?.click()}
          className={dragndropCSS.dragsec}
        >
          Upload Manifeston
      </button>
      <label htmlFor="fileInput">
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
      
      </label>
    </div>
    {/* progress bar */}
    <div>
        {fileName && <p className={dragndropCSS.progressBar}>Uploaded File: {fileName}</p>}
      {/* uploadProgress state to simulate the progress of the file upload */}
      {uploadProgress > 0 && (
        <div>
          <div
            className={dragndropCSS.progressFill}
            style={{ width: `${uploadProgress}%` }}
          />
        </div>
      )}
    </div>
  </div>
  );
};

export default FileUploader;
