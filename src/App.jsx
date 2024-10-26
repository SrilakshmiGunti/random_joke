import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetchQuotes();
  }, []);
  
  function fetchQuotes() {
    axios.get('https://dummyjson.com/quotes')
      .then(res => {
        const quotes = res.data.quotes;
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex].quote);
        setAuthor(quotes[randomIndex].author);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }

  return (
    <div className="app-container">
      <div className="quote-card">
        <h1 className="title">Random Quote Generator</h1>
        <div className="quote-content">
          <p className="quote-text">{quote}</p>
          {author && <p className="quote-author">- {author}</p>}
        </div>
        <button className="quote-button" onClick={fetchQuotes}>Get Random Quote</button>
      </div>
    </div>
  );
}

export default App;
