/* Practice problem 1
   For a given array [85,97,44,37,76,60] find a average*/
 let marks = [85,97,44,37,76,60];
 let sum = 0;
 for(let mark of marks){
   sum += mark; 
 }
 let result = sum/marks.length;
 console.log(result);