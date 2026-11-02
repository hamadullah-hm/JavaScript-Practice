let age = +prompt("Enter your Age");



if(age < 18){
    alert("Your Ticket is Free");
 
} else if(age >=18 && age < 25){
    alert("your ticket is 50 Rupees");
}

else if(age >=26 && age < 40){
    alert("your ticket is 100 Rupees");
}

else if (age >= 41 && age < 60){
    alert("your ticket is 150 Rupees");
}
else{
    alert("Za Mara Kor Kena");
}



