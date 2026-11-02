// let a = +prompt("Enter your age");


// if(a <= 5){
//    alert ("your Ticket is Free");

// }
//  else if(a >=5 && a < 18 )
//     {
//      alert("your Ticket is 30 rupees");
//  }

//  else{
//     alert("your ticket is 100 rupees");
//  }

let age =  +prompt("Enter your age");

if(age <= 6){
    alert("your ticket is free baby");
}

else if(age >=6 && age < 18 ){
    alert("your ticket is 100 rupees");
}

if(age >=18 && age < 30){
    alert("your ticket is 200 rupees");
}

if(age >=30 && age <70 ){
    alert("your ticket is 500 rupees");
}

else{
    alert("you are also free");
}