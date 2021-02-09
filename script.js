document.addEventListener("DOMContentLoaded", function () {

    getRandomQuote();

    document.getElementById('new-quote').addEventListener('click', function () {
        getRandomQuote();
    });

});


function getRandomQuote() {

    let apiURL = 'https://type.fit/api/quotes';
    let quote = document.getElementById('text');
    let author = document.getElementById('author');
    let tweetThis = document.getElementById('tweet-quote');

    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            let randomNumber = Math.floor(Math.random() * 100);
            let quoteData = data[randomNumber];

            quote.innerText = quoteData.text;
            author.innerText = '-' + quoteData.author;
            tweetThis.setAttribute('href', "https://twitter.com/intent/tweet?text=" + quoteData.text + " - " + quoteData.author);

        });

}