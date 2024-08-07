import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './TextSum.css'; // Make sure to create this CSS file for styling

const TextSum = () => {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [showOutput, setShowOutput] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [copyStatus, setCopyStatus] = useState('Copy');

    const handleSummarize = () => {
        if (!inputText.trim()) {
            setError('Please enter some text to summarize.');
            return;
        }

        setError('');
        setLoading(true);
        setShowOutput(false);

        setTimeout(() => {
            // Basic summarization logic (placeholder for actual algorithm)
            const sentences = inputText.split('. ');
            const summaryText = sentences.slice(0, Math.ceil(sentences.length / 2)).join('. ');

            // Convert summary to markdown format (you can customize this)
            const markdownSummary = `**Summary**\n\n${summaryText}`;

            setSummary(markdownSummary);
            setShowOutput(true);
            setLoading(false);
        }, 1000); // Simulated delay of 1 second
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(summary).then(() => {
            setCopyStatus('Copied!');
            setTimeout(() => setCopyStatus('Copy'), 2000);
        }).catch(() => {
            setCopyStatus('Failed to copy');
            setTimeout(() => setCopyStatus('Copy'), 2000);
        });
    };

    const handleRegenerate = () => {
        handleSummarize();
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

            {showOutput && (
                <div className='output-container'>
                    <div className="statistic">
                        <div className="stats-container">
                            <div className="stat-item">239 Words</div>
                            <div className="stat-item">1,092 Characters</div>
                            <div className="stat-item">853 Characters without space</div>
                            <div className="stat-item">316 Syllables</div>
                            <div className="stat-item">10 Sentences</div>
                            <div className="stat-item">11 Paragraphs</div>
                            <div className="stat-item">0:57 Reading time</div>
                            <div className="stat-item">1:35 Speaking time</div>
                        </div>

                        <div className="keywords-container">
                            <div className="keyword-header">Top keywords</div>
                            <div className="keyword-row">
                                <div className="keyword-type">1-word</div>
                                <div className="keyword-type">2-word</div>
                                <div className="keyword-type">3-word</div>
                            </div>
                            <div className="keyword-row">
                                <div className="keyword">các</div>
                                <div className="keyword">tóm</div>
                                <div className="keyword">tắt</div>
                                <div className="keyword">hiểu</div>
                                <div className="keyword">dung</div>
                            </div>
                        </div>
                    </div>

                    <div className='summary'>
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
                        <ReactMarkdown className="markdown-content">{summary}</ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TextSum;
