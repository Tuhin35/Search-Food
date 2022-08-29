// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
// //   .then(json => console.log(json))


 const url = 'https://jsonplaceholder.typicode.com/todos/1'
const url2 = 'https://jsonplaceholder.typicode.com/user'

 function loadData(){
    fetch(url)
  .then(res => res.json())
  .then(json => console.log(json))
}
 function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/user')
  .then(res => res.json())
  .then(data => console.log(data))
}