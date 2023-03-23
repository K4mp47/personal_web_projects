import React from 'react';
import { useState } from 'react';
import './App.css';
//import Quotes from './components/Quotes.js';

//function App() {
//  return (
//    <div className="App">
//      <Quotes /> 
//    </div>
//  );
//}

function App () { 

  const [quote, setQuote] = useState('But did you know that if I buy a gun and shoot you in the foot it will cost less than your computer?');
  const [author, setAuthor] = useState('Campa');
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    getQuotes();
    setAnimate(true);
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    // there we have the code for change the background randomly;
    const color = "rgb(" + red + ", " + blue + ", " + green + ")";
    
    document.documentElement.style.setProperty('--general-color', color); 
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
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
          <i class="fa-solid fa-quote-left" style={{transition: "all 1s ease"}}></i>
          <p className={animate ? `kin`: null} style={{transition: "all 1s ease"}}>{quote}</p>  
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
            <button id="new-quote" onClick={handleClick}>New Quote</button>
          </div>
        </div>
      </div>
      <footer id="foot">
        by Campa
      </footer>
    </div>
  )
}

export default App; 
