const palindromes = function(palindrome) {
    //  - A car, a man, a maraca.
    //Remove all white spaces, commas, apostrophes
    //return string after above removed
    palindrome = palindrome.replace(/[^\w\s]|_/g, "")
                            .replace(/\s/g, "");

}

module.exports = palindromes
