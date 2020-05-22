// var age = prompt("What is your age?");
//
// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }
//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
function checkDriverAge(age){
  var age = prompt("Enter your age:");
  if (age <18){
    return ("Sorry, you are too young to drive this car. Powering off");
  }else if (age > 18) {
    return ("Powering On. Enjoy the ride!");
  }else if (age == 18){
    return ("Congratulations on your first year of driving. Enjoy the ride!");
  }

}
// checkDriverAge();
//2. Create another function that does the same thing, assign it to checkDriverAge2 variable using Function Expression
var checkDriverAge2 =function (){
  var age = prompt("Enter you age");
  if (age < 18){
    return ("Sorry, you are too young to drive this car. Powering off");
  } else if (age > 18){
    return ("Powering On. Enjoy the ride!");
  } else if ( age == 18){
    return ("Congratulations on your first year of driving. Enjoy the ride!");
  }
}
checkDriverAge2();
