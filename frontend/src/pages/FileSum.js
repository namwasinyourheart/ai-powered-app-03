// src/pages/FileSum.js

import React, { useState, useRef } from 'react';
import { FaUpload, FaFilePdf, FaFileWord, FaFileImage, FaFileVideo, FaFilePowerpoint, FaFileAudio, FaFileCsv, FaFileAlt } from 'react-icons/fa';
import './FileSum.css';

const iconStyle = { fontSize: '24px', marginRight: '8px' };

const fileTypes = [
  { ext: '.pdf', icon: <FaFilePdf style={iconStyle} /> },
  { ext: '.docx', icon: <FaFileWord style={iconStyle} /> },
  { ext: '.jpg', icon: <FaFileImage style={iconStyle} /> },
  { ext: '.png', icon: <FaFileImage style={iconStyle} /> },
  { ext: '.pptx', icon: <FaFilePowerpoint style={iconStyle} /> },
  { ext: '.mp3', icon: <FaFileAudio style={iconStyle} /> },
  { ext: '.mp4', icon: <FaFileVideo style={iconStyle} /> },
  { ext: '.txt', icon: <FaFileAlt style={iconStyle} /> },
  { ext: '.wav', icon: <FaFileAudio style={iconStyle} /> },
  { ext: '.csv', icon: <FaFileCsv style={iconStyle} /> },
];

const FileSum = () => {
  const [setFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
    // Handle file upload logic here
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // Handle file upload logic here
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div>
      <div className='input-container'>
        <section
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="drop-zone">
            <button className="upload-icon" onClick={handleButtonClick}>
              <FaUpload style={{ width: '64px', height: '64px' }} />
            </button>
            <p className="upload-text">Drop any document here to get started</p>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
          </div>
          <div className="supported-file-types">
            {fileTypes.map(file => (
              <div key={file.ext} className="file-type-item">
                {file.icon} {file.ext}
              </div>
            ))}
          </div>
          <p className="max-file-size">Max file size: 100MB</p>
        </section>
        <button className='sum-button'>Summarize</button>
      </div>

      <div className='output-container'>
        <div className='statistic'>
          <p>Word Count: 5000</p>
          <p>Characters Count: </p>
          <p>Sentences Count: </p>
          <p>Paragraphs Count: </p>
        </div>

        <div className='summary'>
          <p>This is summary</p>
        </div>
      </div>
    </div>
  );
};

export default FileSum;
