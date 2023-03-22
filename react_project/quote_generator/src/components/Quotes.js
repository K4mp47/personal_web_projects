import React, { useState } from 'react';

const Quotes = () => { 

  const [quote, setQuote] = useState('But did you know that if I buy a gun and shoot you in the foot it will cost less than your computer?');
  const [author, setAuthor] = useState('Campa');
  
  // trying to make test animation 
  const handleClick = () => {
    getQuotes();
    //setVisible("hidden");
  }

  const getQuotes = () => {
    const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
        console.log(randomQuote, randomNum);
      })
  }

  return(
    <div>
      <div id="quote-box">
        <div id="text">
          <i class="fa-solid fa-quote-left"></i>
          <p>{quote}</p>  
        </div>
        <div id="author">
          <p>- {author}</p>
        </div>
        <div id="buttons">
          <div class="social-media"> 
            <a href="https://www.instagram.com/campagnoloalberto5"><i class="icon fa-brands fa-instagram"></i></a>
            <a href="https://github.com/Hack-one-creator"><i class="icon fa-brands fa-github"></i></a>
          </div>
          <div id="div-quote">
            <button id="new-quote" onClick={ handleClick }>New Quote</button>
          </div>
        </div>
      </div>
      <footer id="foot">
        by campa
      </footer>
    </div>
  )
}

export default Quotes;
