const URL = "https://cat-fact.herokuapp.com/facts";

const api =async ()=>{
  const response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  console.log(data[0].text);
}
api()