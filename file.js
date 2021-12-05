let today =document.getElementById('today');
today.textContent=`Today is: ${ getDay()} `;

let time = document.getElementById('time');

time.textContent=`Time is: ${getTime()}`

function getTime(){
    let date = new Date();
    let d = date.getHours()
    let min = date.getMinutes()
    let sec = date.getSeconds()
    console.log(d)
    return `${d} : ${min} : ${sec}`
}

function getDay(){


    let date = new Date();
    let d=date.getDay()
    switch(d) {
        case 0:
          d="Sunday"
          break;
        case 1:
          d="Monday"
          break;
        case 2:
          d="Tuesday"
          break;
        case 3:
          d="Wednesday"
          break;
        case 4:
          d="Thursday"
          break;
        case 5:
          d="Friday"
          break;
        case 6:
          d="Saturday"
          break;
        
        default:
          // code block
      }

    return d;
}