//DOM

let quotesDom = document.querySelector(".quotes")
let authorDom = document.querySelector(".author")


// Response Data
let quotesData = []

function getQuotes() {
    return fetch("https://type.fit/api/quotes")
        .then(response => response.json())
        .then(data => {
            quotesData = data
            changeQuotesDOM()
        })
}

function changeQuotesDOM() {
    let lengthData = quotesData.length
    let randomQuotesIndex = Math.floor(Math.random() * lengthData)

    quotesDom.innerHTML = quotesData[randomQuotesIndex].text
    authorDom.innerHTML = quotesData[randomQuotesIndex].author

}

function shareTwitter() {
    console.log("Twitter da paylaşım yapmak için twitter hesabını bağlamalısın.")
}

