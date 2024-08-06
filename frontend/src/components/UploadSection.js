import React, { useState, useRef } from 'react';
import { FaUpload, FaFilePdf, FaFileWord, FaFileImage, FaFileVideo, FaFilePowerpoint, FaFileAudio, FaFileCsv, FaFileAlt } from 'react-icons/fa';
import './UploadSection.css';

const iconStyle = { fontSize: '24px', marginRight: '8px' };

const fileTypes = [
  { ext: '.pdf', icon: <FaFilePdf style={iconStyle} /> },
  { ext: '.docx', icon: <FaFileWord style={iconStyle} /> },
  { ext: '.jpg', icon: <FaFileImage style={iconStyle} /> },
  { ext: '.png', icon: <FaFileImage style={iconStyle} /> },
  { ext: '.mov', icon: <FaFileVideo style={iconStyle} /> },
  { ext: '.pptx', icon: <FaFilePowerpoint style={iconStyle} /> },
  { ext: '.mp3', icon: <FaFileAudio style={iconStyle} /> },
  { ext: '.mp4', icon: <FaFileVideo style={iconStyle} /> },
  { ext: '.txt', icon: <FaFileAlt style={iconStyle} /> },
  { ext: '.wav', icon: <FaFileAudio style={iconStyle} /> },
  { ext: '.csv', icon: <FaFileCsv style={iconStyle} /> },
  { ext: '.m4a', icon: <FaFileAudio style={iconStyle} /> },
];

function UploadSection() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [plainText, setPlainText] = useState('');
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
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
    <section
      className={'upload-section'}
    //   className={`upload-section ${isDragging ? 'dragging' : ''}`}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      style={{
    //     height: '70%',
    //     width: '80%',
    //     margin: '0 auto', 
        backgroundColor: '#fff', // Correct camelCase property
    //     borderRadius: '16px',     // Correct camelCase property
        // boxhadow: '0px 0px 20px rgba(0,0,0,.4)' /* Horizontal offset, vertical offset, blur radius, color */
        // box-shadow: 0px 0px 20px rgba(0,0,0,.4);

      }}
    >
      <div className="drop-zone">
      {/* <upload-button class="upload-button">Choose Files</upload-button> */}
        {/* <i className="upload-icon"></i> */}
        <button className="upload-icon" onClick={handleButtonClick}>
            {/* <FaUpload style={{width: '1em'}} /> */}
            <FaUpload style={{width: '64px', height: '64px' }} />
        </button>
        <br></br>
        <p className="upload-text">Drop any document here to get started</p>

        <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
      </div>

      {/* <div className="supported-file-types">
        {fileTypes.map(file => (
          <div key={file.ext}>
            {file.icon} <span>{file.ext}</span> 
          </div>
        ))}
      </div>     */}


    <div className="supported-file-types">
        {fileTypes.map(file => (
            <div key={file.ext} className="file-type-item">
            {file.icon} {file.ext}
            </div>
        ))}
    </div>



        
      <br></br>  
      <p className="max-file-size">Max file size: 100MB</p>
{/*     
      <a href="https://react.school" target="_blank" rel="noopener noreferrer">
        <p className="or-summarize-from-url">Or summarize from URL</p>
      </a>
      <p className="or-summarize-from-url">Or Enter your text input</p>
      
      <div className="plain-text-input">
        <textarea
          placeholder="Enter plain text here"
          value={plainText}
          onChange={(e) => setPlainText(e.target.value)}
        />
      </div> */}

    </section>
  );
}

export default UploadSection;
