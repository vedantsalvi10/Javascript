// practice problem 1
let n = prompt("enter a number: ");
if(n% 5 === 0){
  alert("divisible by 5");
}
else{
  alert("not divisible by 5");
}

//practice problem 2
let score = prompt("enter ur score: ");
if(score >=80   && score<=100){
    alert("congrats, A");
}
else if(score >=70   && score<=79){
  alert("congrats, B");
}
else if(score >=60   && score<=69){
  alert("congrats, C");
}
else if(score >=50   && score<=59){
  alert("congrats, D");
}
else {
  alert("fail, f");
}