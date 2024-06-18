// sum using recursion arrow function
const rec = (n)=>{
 if(n == 1){
  return 1;
 }
 else{
  return n + rec(n-1);
 }
}

// factorial using recurssion
function fac(n){
  if(n==1 || n==0){
    return 1;
  }
  else{
    return n * fac(n-1)
  }
};

