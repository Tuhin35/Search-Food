const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then( data => displayQuote(data))
}

const displayQuote = tuhin => {
    
     const blockQuote = document.getElementById('quote')
    console.log(quote);
     blockQuote.innerText = tuhin.quote;

}