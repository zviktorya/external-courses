function Hangman(initWord) {   
    let word;
    let guessedString;
    let errorsLeft;
    let errorChars;

    function init(initWord) {
        word = initWord;
        guessedString = '';
        for (let i = 0; i < word.length; i++) {
            guessedString += '_';
        }
        errorsLeft = 6;
        errorChars = [];
    }

    function openChar(char, index) {
        guessedString = guessedString.substr(0, index) + char + guessedString.substr(index + 1);
    }

    init(initWord);

    this.guess = function guess(char) {
        if (word.indexOf(char) !== -1) {
            Array.from(word.matchAll(new RegExp(`${char}`, 'g'))).forEach(function(match) {
                openChar(char, match.index);
            });
            console.log(guessedString);
        } else {
            errorChars.push(char);
            errorsLeft--;
            console.log(`wrong letter, errors left ${errorsLeft} | ${errorChars.join(',')}"`);
        }
        return this;
    }

    this.getGuessedString = function getGuessedString() {
        return guessedString;
    }

    this.getErrorsLeft = function getErrorsLeft() {
        return errorsLeft;
    }

    this.getWrongSymbols = function getWrongSymbols() {
        return errorChars;
    }

    this.getStatus = function getStatus() {
        return `${guessedString} | errors left ${errorsLeft}`;
    }

    this.startAgain = function startAgain(word) {
        init(word);
        return this;
    }    
}

module.exports = new Hangman('webpurple');