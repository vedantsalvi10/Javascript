// find vowel in the string....
function counter(string){
  for(character in string){
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      console.log("string has vowel.");
    }
    else{
      console.log("string has no vowel.");
    }
  }
}