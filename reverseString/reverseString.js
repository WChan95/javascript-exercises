const reverseString = function(stringToReverse) {

    let stringSplit = [];
    let stringReversed = "";
    let i;

    for(i = 0; i < stringToReverse.length; i++){
        stringSplit.push(stringToReverse.charAt(stringToReverse.length - i - 1))
    }

    for(i = 0; i < stringToReverse.length; i++){
        stringReversed = stringReversed + stringSplit[i];
    }

    return stringReversed;
}

module.exports = reverseString
