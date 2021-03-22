const leapYears = function(inputYear) {
    if(inputYear % 4 == 0 && inputYear % 100 != 0){
        return true;
    }else if(inputYear % 100 == 0){
        if(inputYear % 400 == 0){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}

module.exports = leapYears
