function processData(input) {
    let word = input.trim();
    if (word.toUpperCase() === word || (word[0] === word[0].toLowerCase() && word.slice(1).toUpperCase() === word.slice(1))) {
        word = word.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');
    }
    console.log(word);
}