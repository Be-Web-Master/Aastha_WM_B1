//28. Given a list of 8 individuals with their names and ages, please perform the
//   following tasks:
const persons = [
    { name: 'John', age: 45 },
    { name: 'Mary', age: 72 },
    { name: 'Robert', age: 28 },
    { name: 'Elizabeth', age: 59 },
    { name: 'William', age: 67 },
    { name: 'Patricia', age: 51 },
    { name: 'Michael', age: 75 },
    { name: 'Jennifer', age: 32 }
];
// Identify all the persons who are aged more than 60 using filter.
// Sort the names in ascending order based on their ages.
// Determine the individuals who are eligible to vote (age should be above 40).

// function moreThan60(persons){
//     for(let i=0;i<=persons.length-1;i++){
//     if(persons.age>60){
//         return persons
//     }
//     console.log(persons.name)
//    }
// }
// moreThan60(persons.filter())