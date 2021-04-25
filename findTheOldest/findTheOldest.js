const findTheOldest = function(array) {
    

  return array.reduce(function(oldest,currentPerson){
    const oldestLived = yearsLived(oldest.yearOfDeath,oldest.yearOfBirth);
    const currentPersonLived = yearsLived(currentPerson.yearOfDeath, currentPerson.yearOfBirth);

    if(oldestLived > currentPersonLived){
      oldest = oldest;
    }else{
      oldest = currentPerson;
    }
    return oldest;
  });

  }

  const yearsLived = (death, birth) =>{
    let d = new Date();
    if(!death){
      death = new Date().getFullYear();
    }
      return death - birth;
  }
  module.exports = findTheOldest
  