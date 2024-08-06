document.getElementById('summarizeBtn').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const summaryOutput = document.getElementById('summaryOutput');
    
    // Basic summarization logic (placeholder for actual algorithm)
    const sentences = inputText.split('. ');
    const summary = sentences.slice(0, Math.ceil(sentences.length / 2)).join('. ');

    summaryOutput.textContent = summary || 'Please enter text to summarize.';
});
