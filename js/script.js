/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: `Sometimes I'll start a sentence and I don't even know where it's going. I just hope I find it along the way.`,
    source: `Michael Scott`,
    citation: `The Office`,
    year: 2009
  },
  {
    quote: `I talk a lot, so I've learned to just tune myself out...`,
    source: `Kelly Kapoor`,
    citation: `The Office`,
    year: 2010
  },
  {
    quote: `Oh, it is on, like a prawn who yawns at dawn.`,
    source: `Andy Bernard`,
    citation: `The Office`,
    year: 2009
  },
  {
    quote: `One day Michael came in and complained about a speed bump on the highway. I wonder who he ran over them.`,
    source: `Jim Halpert`,
    citation: `The Office`,
    year: 2008
  },
  {
    quote: `Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.`,
    source: `Dwight Schrute`,
    citation: `The Office`,
    year: 2008
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
  let randomNumber = Math.floor(Math.random() * quotes.length);

  return quotes[randomNumber];
};

/***
 * `printQuote` function
***/

function printQuote(){
  let randomQuote = getRandomQuote();
  let HTML = `<p class='quote'>${randomQuote.quote}</p><p class='source'>${randomQuote.source} `;
  
  if(randomQuote.citation){
    HTML += `<span class='citation'>${randomQuote.citation}</span> `;
  } if(randomQuote.year){
    HTML += `<span class='year'>${randomQuote.year}</span>`;
  }

  HTML += `</p>`;
  return document.getElementById('quote-box').innerHTML = HTML; 
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);