
// Clicking on submit button the below function will be executed
function Function() {
// Getting the input from user
var ch1 = parseInt(document.getElementById("course1").value);
var ch2 = parseInt(document.getElementById("course2").value);
var lettergrade1 = document.getElementById("lettergrade1").value;
var lettergrade2 = document.getElementById("lettergrade2").value;
  
var number1=0,number2=0;
if(lettergrade1 == 'A'){
number1=4.0;
}
else if (lettergrade1 == 'B'){
number1=3.0;
}
else if (lettergrade1 == 'C'){
number1=2.0;
}
else if (lettergrade1 == 'D'){
number1=1.0;
}
else if (lettergrade1 == 'F'){
number1=0;
}
if(lettergrade2 == 'A'){
number2=4.0;
}
else if (lettergrade2 == 'B'){
number2=3.0;
}
else if (lettergrade2 == 'C'){
number2=2.0;
}
else if (lettergrade2 == 'D'){
number2=1.0;
}
else if (lettergrade2 == 'F'){
number2=0;
}

var total = ch1 * number1 + ch2 * number2;
var avg_GPA = total/(ch1+ch2);
// This will print the average GPA of the student
document.getElementById("GPA").innerHTML = "The average GPA is : "+avg_GPA.toFixed(2);
}
