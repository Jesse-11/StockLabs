const API_KEY = 'PGAURJ6A9UXWDVJE';
const stockSymbol = 'AAPL'; // Replace with desired stock symbol

/*
fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
    const stockQuote = data['Global Quote'];
    const stockPrice = stockQuote['05. price'];
    document.getElementById('stock-quotes').innerHTML = `<h2>Real-Time Stock Quotes</h2><p><b>${stockSymbol}:</b> ${stockPrice}</p>`;
  })
  .catch(error => console.error(error));

*/