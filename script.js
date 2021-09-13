var input = document.querySelector("#input-area")
var output = document.querySelector("#output-area")
var translateBtn = document.querySelector("#btn-translate")

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function translatedUrl(input) {
    return serverUrl + "?text=" + input
}

function errorHandler(error) {
    console.log("Error Ocurred: " + error)
}

translateBtn.addEventListener('click', () => {
    var inputTxt = input.value 

    fetch(translatedUrl(inputTxt))
    .then(response => response.json)
    .then(json => output.innerText = json.contents.translated)
    .catch(errorHandler)
})

