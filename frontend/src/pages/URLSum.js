// const 
import './URLSum.css'
import React, { useState } from 'react';


const URLSum = () => {
  const [inputText, setInputText] = useState('');
  const [summary, setSummary] = useState('');
  const [showOutput, setShowOutput] = useState(false); // New state for controlling output visibility

  const handleSummarize = () => {
      // Basic summarization logic (placeholder for actual algorithm)
      const sentences = inputText.split('. ');
      const summaryText = sentences.slice(0, Math.ceil(sentences.length / 2)).join('. ');

      setSummary(summaryText);
      setShowOutput(true); // Show the output container after summarizing
  };
    return (
      <div>
          {/* <h1>URL Summarizer</h1> */}
          <div className='input-container'>
              {/* <h1>URL Summarizer</h1> */}
              <div className="url-sum">
                <input className="input-text" placeholder="Enter your URL"></input>
                
                {/* <select className='input'>
                  <option value='Vietnamese'>Vietnamese</option>
                  <option value='English'>English</option>
                </select> */}
                
                <button className="url-sum-button" onClick={handleSummarize}>Summarize</button>
              </div>
          </div>

          {showOutput && ( // Conditionally render the output container
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
  