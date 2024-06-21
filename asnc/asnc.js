// using setTimeout and clearTimeout

const change = ()=>{
  document.querySelector('#chai')
           .innerHTML = "Coffee";
}
document.querySelector('#stop').addEventListener('click',function (){
   clearTimeout(weee);
   console.log("stopped");
})
const weee = setTimeout(change,5000);

// setInterval and clearInterval

//generating random colors.


//hexadecimal
const randomColor = function (){
  const hexa = "123456789ABCDEF"
  let color = "#"
for(i=0;i<6;i++){
  color += hexa[Math.floor(Math.random()*16)];
}
console.log(color);
return color
}
const startColorChanging = function (){
  document.body.style.backgroundColor = randomColor();
} 
let interval;
//start
document.querySelector('#istop').addEventListener('click',function (){
  clearInterval(interval);
  interval = null;
});
document.querySelector('#istart').addEventListener('click',function (){
if(!interval){
 interval = setInterval(startColorChanging,1000);
}
});