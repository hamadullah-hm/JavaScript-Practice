document.write('Total Subject 5 <br> Total Marks = 500 <br> <br>')


function sumMarks(Eng,Math,Urdu,islamyat,PStudy){
    var a = Eng + Math + Urdu + islamyat +PStudy;
     
    return a;
}

var total = sumMarks (35,100,100,100,100);
document.write('Obtained Marks = ' +total+ '<br>')