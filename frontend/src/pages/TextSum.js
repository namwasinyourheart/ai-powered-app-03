import React, { useState } from 'react';
import './TextSum.css'; // Make sure to create this CSS file for styling

const TextSum = () => {
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
            <div className="input-container">
                {/* <h1>Text Summarization App</h1> */}
                {/* <p>
                Simplify your content writing with our AI summarizer.
                Transform your sentences, paragraphs, and articles into digestible copy and summarize any text in one click.
                </p> */}
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text here..."
                />
                <button className='sum-button' onClick={handleSummarize}>Summarize</button>
                {/* <h2>Summary</h2> */}
                {/* <div className="summary-output">{summary}</div> */}
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

export default TextSum;
