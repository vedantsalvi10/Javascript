// promise 1 reject

// const promise = new Promise(function data(resolve,reject){ 
//   console.log("getting data1....");
//    setTimeout(()=>{
//        console.log("data1.");
//        reject("error");
//    }, 2000);
// });

// promise 2 resolve

// const promise2 = new Promise(function data(resolve,reject){ 
//   console.log("getting data1....");
//    setTimeout(()=>{
//        console.log("data1.");
//        resolve();
//    }, 2000);
// });
// promise2.then(()=>{
//   console.log("getting data2...")
//   setTimeout(() => {
//     console.log("data2.");
//        resolve();
//   }, 3000);
// });


//promise 3 reslove and reject
const input = parseInt( prompt("enter a number"));
const promise = new Promise((resolve,reject)=>{
 if(input === 2){
  resolve();
 }
 else{
  reject("number not same");
 }
});

promise.then(()=>{
  console.log("number same.");
})