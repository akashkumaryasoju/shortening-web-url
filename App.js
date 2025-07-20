import React, { useState } from 'react';
import './App.css';

function App() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = () => {
    // Dummy shortening logic
    if (longUrl.trim() !== '') {
      const dummyShort = 'https://short.ly/' + Math.random().toString(36).substring(7);
      setShortUrl(dummyShort);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h2>🔗 URL Shortener</h2>
      <input
        type="text"
        placeholder="Enter long URL"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        style={{ padding: '10px', width: '300px' }}
      />
      <br /><br />
      <button onClick={handleShorten} style={{ padding: '10px 20px' }}>
        Shorten URL
      </button>
      <br /><br />
      {shortUrl && (
        <div>
          <strong>Shortened URL:</strong>
          <p style={{ color: 'blue' }}>{shortUrl}</p>
        </div>
      )}
    </div>
  );
}

export default App;
