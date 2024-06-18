// trying different types of try and catch
let arr = ["vedant","ram","sham"];
arr.forEach((val)=>{
  try{
    if(val === "ram"){
      throw new error();
    }
    else{
      console.log(val);
    }

  }
  catch(error){
   console.log("ram has occured...");
  }
  // finally{
  //   console.log(val);
  // }
});