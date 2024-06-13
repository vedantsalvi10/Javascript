/* Practice problem 1
   For a given array [85,97,44,37,76,60] find a average*/
 let marks = [85,97,44,37,76,60];
 let sum = 0;
 for(let mark of marks){
   sum += mark; 
 }
 let result = sum/marks.length;
 console.log(result);

 /* Practice problem 2
   For a given array [250,645,300,900,50] find 10% of 
   the elements and update the array*/
 let values =   [250,645,300,900,50];
 let offer = 0;
 for(let i=0;i<values.length;i++){
  offer = values[i]/10;
  values[i] = values[i] - offer;
  
 }

console.log(values);

/* Problem 3
    Array methods
    Create an array to store Bloomberg, Uber,Google, IBM, Netflix
    a. remove the first company
    b. remove uber and add ola
    c. add amazon at the end
    */
 let companies = ["Bloomberg", "Uber","Google", "IBM", "Netflix"];
 companies.splice(1,1,"OLA");
 console.log(companies);
 companies.shift();
 console.log(companies);
 companies.push("Amazon");
 console.log(companies);