// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// quotes and other details stored inside objects, inside of an array.
var quotes = [
{quote: "For last year's words belong to last year's language And next year's words await another voice", src: "T.S Eliot", citation: "Four Quartets", year: 1943, tag: "Business"},
{quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams", src: "Dr.Suess", tag: "Romance"},
{quote: "Be yourself; everyone else is already taken", src: "Oscar Wilde", year: "19th Century", tag: "Motivation"},
{quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals", src: "J.K. Rowling", citation: "Harry Potter and the Goblet of Fire", year: "2000", tag: "Business"},
{quote: "No one can make you feel inferior without your consent", src: "Eleanor Roosevelt", citation: "This is My Story", year: 1939, tag: "Motivational"},
{quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that", src: "Martin Luther King Jr.", citation: "A Testament of Hope", year: 1986, tag: "Inspirational"},
{quote: "We accept the love we think we deserve", src: "Stephen Chbosky", citation: "The Perks of Being A Wallflower", year: 1999, tag: "Romance"},
];

//empty array used to store the objects
var usedQuotes = [0];

//sets timer for quote to be renewed if it hasn't been clicked within 30 seconds, which is 30,000 milliseconds
var intervalID = window.setInterval(printQuote, 30000);

//takes a random object from the array quotes
function getRandomQuote() {
    //Create the variable that will hold the random index.
    var rand;

	//If we've used all quotes, shift the first one out till there is only one left
	if (usedQuotes.length >= quotes.length) {
		while (usedQuotes.length>1) {
			usedQuotes.shift();
		}
	}

	//Generate a random number, if that number is not in the usedQuotes array, return that quote, else, keep looping until we get one. 
	do {
		rand = Math.floor(Math.random()*quotes.length);
		if (usedQuotes.indexOf(rand) === -1) {
			var quote = quotes[rand];

			//When we find a new quote, add its index to the usedQuotes array so we can keep track, then return the quote for printing.
			usedQuotes.push(rand);
			//console.log(usedQuotes);
			return quote;
		}
	} while (true);
}

//creates a random color hex code to be used for the background color
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
    //stops after six creating the hex code
    for (var i = 0; i < 6; i++ ) {
    	//adding random letters and numbers to color variable creating the random hex code
    	color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function printQuote() {
  

  var quoteRandom = getRandomQuote();

  //used to randomly change the color when either the button is selected or the time interval expires
  document.getElementById("body").style.backgroundColor = getRandomColor();
  
  //replaces text in HTML
  var quoteHTML = "<p class='quote'>" + quoteRandom.quote + "</p>";
  quoteHTML += "<p class='source'>" + quoteRandom.src; 

  //If there is no citation or year they are not added
  if(quoteRandom.citation) quoteHTML += "<span class='citation'>" + quoteRandom.citation + "</span>";
  if(quoteRandom.year) quoteHTML += "<span class='year'>" + quoteRandom.year + "</span>";
  quoteHTML += "</p>"; 

  document.getElementById("quote-box").innerHTML = quoteHTML;
  console.log(quoteRandom.quote);
}