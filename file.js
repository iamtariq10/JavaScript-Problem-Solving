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

// let obj = {
//     number:100,
//     percentage:50
// }

// function myFunction(number,percentage) {
//     let result = ( number * percentage ) / 100
// console.log(result)
// }

// myFunction(obj.number,obj.percentage)

// var Arr=[22,353,23,1,2,55,3,5];



// for(let i=0;i<Arr.length;i++){
//     for(let j=0;j<i;j++){
//         if(Arr[i]<Arr[j]){
          

//             let x= Arr[i];
//             Arr[i]=Arr[j]
//             Arr[j]=x


//         }
//     }
// }

// Arr.forEach(element=>console.log(element))
// for(const elemtn of Arr){
//     console.log(elemtn)
// }


// var Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (var i = 1; i < Arr.length; i++){
//     for (var j = 0; j < i; j++){
//         if (Arr[i] < Arr[j]) {
//           var x = Arr[i];
//           Arr[i] = Arr[j];
//           Arr[j] = x;
//         }
//     }

//     }

    






// let obj={
//     firstName:"Tariq",
//     lastName:"Salamat"

//     }
    
//     const {firstName}=obj
//     console.log(firstName)

// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen

// let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// for(let i=0;i<arr.length;i++){
//     if(i%2==0){
//         console.log(`${i} is even`)
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }


// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".


// for(let i=0;i<=100;i++){
//     if(i%3==0){
//         console.log(`${i} Fizz`)
//     }
//     else if(i%5==0){
//         console.log(`${i} Buzz`)
//     }
//     else if(i%3===0 && i%5===0){
//         console.log(`${i} FizzBuzz`)
//     }

// }