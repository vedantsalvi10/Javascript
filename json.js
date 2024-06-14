let members = `[

{
 "name": "Vedant",
 "age":34,
 "duration":"1 year",
 "hobies":["driving","swiming","dancing","drawing"]
 },
 

 {
 "name": "Gacumoli",
 "age":25,
 "duration":"2 year",
 "hobies":["farming","swiming","dancing","football"]
 },


 {
 "name": "chirag",
 "age":40,
 "duration":"5 year",
 "hobies":["criket","browsing","dancing","chess"]
 }
 ]`
 console.log(JSON.parse(members));
 console.log(JSON.parse(members)[1].name);
 console.log(JSON.parse(members)[2].hobies[3]);