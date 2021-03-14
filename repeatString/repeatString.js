const repeatString = function(stringRepeat, numRepeat) {

        let i;
        let stringFinal = "";

        for(i = 0; i < numRepeat; i++){
            stringFinal = stringFinal + stringRepeat;
        }

        return stringFinal;
}

module.exports = repeatString
