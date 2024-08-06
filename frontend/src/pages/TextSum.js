import React, { useState } from 'react';
import './TextSum.css'; // Make sure to create this CSS file for styling

const TextSum = () => {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [showOutput, setShowOutput] = useState(false); // New state for controlling output visibility
    const [loading, setLoading] = useState(false); // New state for loading status
    const [error, setError] = useState(''); // New state for error messages
    const [copyStatus, setCopyStatus] = useState('Copy'); // New state for copy button text

    const handleSummarize = () => {
        if (!inputText.trim()) {
            setError('Please enter some text to summarize.');
            return;
        }

        setError(''); // Clear any previous errors
        setLoading(true); // Set loading to true when summarizing starts
        setShowOutput(false); // Hide output while summarizing

        // Simulate a delay for loading effect (e.g., API call delay)
        setTimeout(() => {
            // Basic summarization logic (placeholder for actual algorithm)
            const sentences = inputText.split('. ');
            const summaryText = sentences.slice(0, Math.ceil(sentences.length / 2)).join('. ');

            setSummary(summaryText);
            setShowOutput(true); // Show the output container after summarizing
            setLoading(false); // Set loading to false when summarizing is done
        }, 1000); // Simulated delay of 1 second
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(summary).then(() => {
            setCopyStatus('Copied!');
            setTimeout(() => setCopyStatus('Copy'), 2000); // Revert text back to "Copy" after 2 seconds
        }).catch(() => {
            setCopyStatus('Failed to copy');
            setTimeout(() => setCopyStatus('Copy'), 2000); // Revert text back to "Copy" after 2 seconds
        });
    };

    const handleRegenerate = () => {
        handleSummarize(); // Reuse the summarize function to regenerate summary
    };

    return (
        <div>
            <div className="input-container">
                <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Enter text here..."
                />
                <button className='sum-button' onClick={handleSummarize} disabled={loading}>
                    {loading && <div className='loading-spinner'></div>}
                    {loading ? 'Summarizing...' : 'Summarize'}
                </button>
                {error && <div className='error-message'>{error}</div>}
            </div>

            {showOutput && ( // Conditionally render the output container
                <div className='output-container'>
                    <div className='statistic'>
                    <p>Word Count: 5000</p>
                    <p>Characters Count: </p>
                    <p>Sentences Count: </p>
                    <p>Paragraphs Count: </p>
                    </div>

                    <div className='summary'>
                        <div className='tabs'>
                        <div className='tabs'>
                            <button className='tab-button'>Length</button>
                            <button className='tab-button'>Translate</button>
                            <button className='tab-button'>Bullet Points</button>
                            <button className='tab-button' onClick={handleCopy}>
                                {copyStatus}
                            </button>
                            <button className='tab-button' onClick={handleRegenerate}>
                                Regenerate
                            </button>
                        </div>
                            {/* <div className='tab'>
                                
                            </div> */}
                        </div>
                        <p>{summary}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextSum;
