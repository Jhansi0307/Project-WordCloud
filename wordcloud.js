let wordCloud = ["Hello", "Folks", "Welcome", "To", "The", "World", "Trade", "Center", "Agilisium", "Awesome", "Graceful", "Industrious", "Legendary", "Inspire", "Sociable", "Imaginative", "United", "Magnificent"];
let wordsContainerEl = document.getElementById("wordsContainer");
let userInputEl = document.getElementById("userInput");
let errorMsgEl = document.getElementById("errorMsg");

let errorMsg = "Please enter a word";

function createAndAddWordToWordCloud(word) {

    let randomFontSize = Math.ceil(Math.random() * 80) + "px";
    let wordEl = document.createElement("span");

    wordEl.textContent = word;
    wordEl.style.fontSize = randomFontSize;
    wordEl.classList.add("m-3");

    wordsContainerEl.appendChild(wordEl);

}

for (let word of wordCloud) {
    createAndAddWordToWordCloud(word);
}

function onAddWordToWordCloud() {

    let userEnteredWord = userInputEl.value;
    if (userEnteredWord !== "") {
        userInputEl.value = "";
        errorMsgEl.textContent = "";
        createAndAddWordToWordCloud(userEnteredWord);
    } else {
        errorMsgEl.textContent = errorMsg;
    }

}