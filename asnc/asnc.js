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