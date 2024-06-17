// find vowel in the string....
function counter(string){
  let n = 0;
  for(character of string){
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'){
      n++
    }
  }
    return n;

}