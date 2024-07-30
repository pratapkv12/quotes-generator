document.addEventListener('DOMContentLoaded', (event) => {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const newQuoteButton = document.getElementById('new-quote-button');

    const quotes = [
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Your time is limited, don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            text: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
            author: "Oprah Winfrey"
        }
        // Add more quotes as desired
    ];

    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    function displayRandomQuote() {
        const randomQuote = getRandomQuote();
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
    }

    newQuoteButton.addEventListener('click', displayRandomQuote);

    // Display an initial random quote
    displayRandomQuote();
});