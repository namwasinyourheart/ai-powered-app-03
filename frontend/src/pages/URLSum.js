// src/pages/URLSum.js

import './URLSum.css';
import React, { useState } from 'react';

const URLSum = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const handleSummarize = () => {
    // Basic summarization logic (placeholder for actual algorithm)
    const sentences = inputText.split('. ');
    const summaryText = sentences.slice(0, Math.ceil(sentences.length / 2)).join('. ');

    setSummary(summaryText);
    setShowOutput(true);
  };

  return (
    <div>
      <div className='input-container'>
        <div className="url-sum">
          <input
            className="input-text"
            placeholder="Enter your URL"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button className="url-sum-button" onClick={handleSummarize}>Summarize</button>
        </div>
      </div>

      {showOutput && (
        <div className='output-container'>
          <div className='statistic'>
            <p>How to Build a to-do application</p>
            <p>Word Count: 5000</p>
          </div>

          <div className='summary'>
            <p>{summary}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default URLSum;
