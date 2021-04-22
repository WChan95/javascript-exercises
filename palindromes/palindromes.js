const palindromes = function(palindrome) {
    //  - A car, a man, a maraca.
    //Remove all white spaces, commas, apostrophes
    //return string after above removed
    let palindromeInitial = palindrome.toLowerCase()
                                        .replace(/[^\w\s]|_/g, "")
                                        .replace(/\s/g, "")
                                        .split("");

    let palindromeReverse = [];
    let i;

    for(i = palindromeInitial.length - 1; i >= 0; i--){
        palindromeReverse.push(palindromeInitial[i]);
    }

    let isPalindrome = true;
    for(i = 0; i < palindromeInitial.length; i++){
        if(palindromeInitial[i] != palindromeReverse[i]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

module.exports = palindromes
