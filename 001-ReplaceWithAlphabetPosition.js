
function alphabetPosition(text) {
    let justLetters = text
        .toUpperCase()
        .split('')
        .filter(char => char.match(/[A-Z]/i));

    let result = justLetters
        .map(letter => letter.charCodeAt(0) - 64).
        join(' ');

    console.log(result);
    return result;
}




alphabetPosition("abcdEFg");
alphabetPosition("Ho!**la???");
alphabetPosition("Hola");
alphabetPosition("Hola");
alphabetPosition("se text??");