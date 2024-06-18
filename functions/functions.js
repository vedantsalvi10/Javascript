// find vowel in the string....
function counter( s = "vedant"){
  let n = 0;
  for(character of s){
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      n++
    }
  }
   // argument in functions
   console.log(arguments[0]);

    return n;

}

// arrow function to perform same task 
const count = (string) =>{
  let n = 0;
  for(character of string){
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      n++
    }
    return n
  }
}

// iife immediatly invoked functions
(function vedant(string){
  console.log(string)
})("vedant")

 

// few array methods using function

//map
let arr = ["vedant","ram"," sham"," hans"];
let name = arr.map((val)=>{
  return val
});
console.log(name);

//filter
let nam = [];
let filter = arr.filter((val)=>{
  return val === "vedant" ? console.log("false"):nam += val;
});
console.log(nam);

//reduce
let reduce = arr.reduce((val)=>{
  return val + val;
})
console.log(reduce)

