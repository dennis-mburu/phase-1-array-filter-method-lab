// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];


function findMatching(array1, names){
    return array1.filter((elem) => elem.toLowerCase() === names.toLowerCase() )
}

function fuzzyMatch(array2, names2){
    return array2.filter((elem) => elem[0] === names2[0])
}

function matchName(array3, name3){
    return array3.filter((elem) => elem.name  === name3)
}







//Ignore
// function findMatching(array1, name){
//     function truthChecker(name){
//         return array1.indexOf(name === -1)
//     }
//     return array1.filter(truthChecker)
//     // return array1.filter(()=> array1.includes(name))
// }


// console.log(findMatching(drivers, 'bobby'))






    // console.log(array1.indexOf(name))
    
   
    // return array1.filter()