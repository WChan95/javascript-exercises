const ftoc = function(fTemp) {

  let cResult;
  convertedCelsius = (fTemp - 32) * (5/9);
  cResult = convertedCelsius;

  if(cResult == 0){
    return cResult;
  }else{
    return round(cResult, 1);
  }

}

const ctof = function(cTemp) {
  let fResult;
  convertedFahrenheit = (cTemp * (9/5)) + 32;
  fResult = convertedFahrenheit;
  if(fResult == 0){
    return fResult;
  }else{
    return round(fResult,1);
  }
}

module.exports = {
  ftoc,
  ctof
}

function round(value, precision){
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
