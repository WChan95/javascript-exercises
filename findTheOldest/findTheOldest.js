let findTheOldest = function(persons) {
    let i;
    let atAge = 0;
    let currentAge = 0;
    let oldestPerson = {};
    for(i = 0; i < persons.length; i++){
        let nextAge = persons[i].yearOfDeath - persons[i].yearOfBirth;
        if(currentAge > nextAge){
            currentAge = currentAge;
            atAge = atAge;
        }else{
            currentAge = nextAge;
            atAge = i;
        }
    }
    oldestPerson = persons[atAge];
    return oldestPerson;
}

module.exports = findTheOldest
