for(let i =0;i<101;i++){
  if(i % 2 == 0){
    console.log("i ="+ i);
  }
  
}

// number game (Ask user to guess the number)

let n = 3;
let user = prompt("guess a number from 1-20");
while ( n !== user){
  user = prompt("guess a number from 1-20");
}
 alter("congrats");