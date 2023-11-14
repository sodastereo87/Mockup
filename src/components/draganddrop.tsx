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

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

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

    // Here you can handle the file upload using API calls or other logic
    // Replace the interval simulation with your actual upload progress logic
  };

  return (
    <div
      className={dragndropCSS.dropfile}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className={dragndropCSS.dropborder}>Drag & Drop File Here or Browse</p>
      {fileName && <p>Uploaded File: {fileName}</p>}
      {uploadProgress > 0 && (
        <div className={dragndropCSS.progressBar}>
          <div
            className={dragndropCSS.progressFill}
            style={{ width: `${uploadProgress}%`, background: 'blue', height: '20px' }}
          />
        </div>
      )}
      <label htmlFor="fileInput">
        <input
          type="file"
          id="fileInput"
          style={{ display: 'none' }}
          onChange={handleFileInputChange}
        />
        <button
          onClick={() => document.getElementById('fileInput')?.click()}
          className={dragndropCSS.dragsec}
        >
          Upload Manifeston
        </button>
      </label>
    </div>
  );
};

export default FileUploader;
