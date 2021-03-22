const sumAll = function(num1, num2) {

    let i;
    let finSum;
    let numDiff;
    let numAdd;
    let numFin

    if((num2 < 0 || num1 < 0)){ //For negative numbers scenario, will output ERROR
        return "ERROR";
    }else if(typeof(num1) == "string" || typeof(num2) == "string"){
        return "ERROR";
    }else if(typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    }else{
        if(num1 < num2){
            //num1 will be the starting number
            numDiff = num2 - num1;
            finSum = num1; //Initializes finSum
            numFin = 0;
            for(i = 0; i <= numDiff; i++){
                numAdd = finSum + i;
                numFin = numAdd + numFin;
            }
    
        }else if(num2 < num1){
            numDiff = num1 - num2;
            finSum = num2;
            numFin = 0;
            for(i = 0;i <= numDiff;i++){
                numAdd = finSum + i;
                numFin = numAdd + numFin;
            }
    
        }
        return numFin;
    
    
    }
    
}

module.exports = sumAll
