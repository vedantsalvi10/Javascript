/* Practicing mapping using comapies as keys and thier price as value*/
 let map = new Map([["uber","$4324"]]); 
 map.set(["ola","$2131"],["blinkit", "$23424"]);
 console.log(map);
 map.forEach(element => {
   console.log(element);
 });

 /* Practicing set using numbers*/
 let arr = [1,2,3,4]
 let set = new Set(arr); 
 set.add(5)
 set.add(5)
 console.log(set);
 set.forEach(element => {
    console.log(element);
 });
 set.delete(2);
 console.log(set);

/* Practicing weak set */
 obj1 = {name:"vedant"};
 obj2 = null;
 let weakset =new WeakSet();
 weakset.add(obj1);
 //weakset.add(obj2); // shows that the object is annonymus.
 console.log(weakset);

 
 /* Practicing weak map */
 let weakmap = new WeakMap()
 weakmap.set(obj1,"vedant");
//  weakmap.set(obj2,"ram"); // asumes it is a garbage value
 //weakset.set("2","sha"); // only accepts objects.
 console.log(weakmap.get(obj1));
 console.log(weakmap);