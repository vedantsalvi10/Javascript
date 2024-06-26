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
// const input = parseInt( prompt("enter a number"));
// const promise = new Promise((resolve,reject)=>{
//  if(input === 2){
//   resolve();
//  }
//  else{
//   reject("number not same");
//  }
// });

// promise.then(()=>{
//   console.log("number same.");
// })

//promise 4

// function promise(dataId){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log(`data: ${dataId}`);
//         resolve();
//     }, 2000)
//   });
// }
// const api = async ()=>{
//   await promise(2);
//   await promise(3);
//   await promise(4);
// }
// console.log(api());

//promise 5
// function promise(dataId, error){
//      return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//           if(!error){
//             console.log(`data: ${dataId}`);
//             resolve();
//           }
//           else{
//             reject(error = "limit reached");
//           }
//        }, 2000)
//       });
//   }

//   const api = async ()=>{
//     try {
//       await promise(1,false);
//       await promise(2,false);
//       await promise(3,false);
//       await promise(4,true);
//       await promise(5,false);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   console.log(api());


// promise 6

function promise(dataId, error){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
       if(!error){
         console.log(`data: ${dataId}`);
         resolve();
       }
       else{
         reject(error = "limit reached");
       }
    }, 2000)
   });
}
promise(1,false).then(()=>{
  console.log(`getting data2...`);
     promise(2,false).then(()=>{
      console.log(`getting data3...`);
      promise(3,true).then(()=>{
        console.log(`getting data4...`);
      }).catch((error)=>{
          console.log(error);
      }).finally(()=>{
           console.log("remaining data 4,5,6 ejected");
      });
      
     });
});

