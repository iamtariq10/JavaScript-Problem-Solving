// Today Problem

// let today =document.getElementById('today');
// today.textContent=`Today is: ${ getDay()} `;

// let time = document.getElementById('time');

// time.textContent=`Time is: ${getTime()}`

// function getTime(){
//     let date = new Date();
//     let d = date.getHours()
//     let min = date.getMinutes()
//     let sec = date.getSeconds()
//     console.log(d)
//     return `${d} : ${min} : ${sec}`;
// }

// function getDay(){


//     let date = new Date();
//     let d=date.getDay()
//     switch(d) {
//         case 0:
//           d="Sunday"
//           break;
//         case 1:
//           d="Monday"
//           break;
//         case 2:
//           d="Tuesday"
//           break;
//         case 3:
//           d="Wednesday"
//           break;
//         case 4:
//           d="Thursday"
//           break;
//         case 5:
//           d="Friday"
//           break;
//         case 6:
//           d="Saturday"
//           break;
        
//         default:

//       }

//     return d;
// }


// Today Problem
// let array = ['true','true','true']

// let check = (list) => list.every(item => list.indexOf(item) === 0);
// console.log(check(array))

// function myFunction(arr){

// for(let i=0;i<array.length;i++){
//   if (array[i] !== array[i+1]) {
//     console.log("true");

// }
// else{
//   console.log("False")
// }
//   }

  
    
  

// }

// myFunction(array)



// Today problem

// Return the percentage of a number


// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

let obj = {
    number:100,
    percentage:50
}

function myFunction(number,percentage) {
    let result = ( number * percentage ) / 100
console.log(result)
}

myFunction(obj.number,obj.percentage)




