fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
// .then(json => console.log(json))

function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
   // .then(json => console.log(json))
}


function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
   // .then(data => console.log(data))
}


function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
   // .then(data => console.log(data));
}
function loadPost() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
   // .then(data => console.log(data));
}

///shobgula user pete.........
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data)); //display users k call korbe
}

function displayUsers(data) {
   //function er vitor kichu pete hole parameter dite hobe
   console.log(data);
}
//10 ta object k paicho...ekhon tader name dekhane parba?

//|||||||||||||||||||||||||||||||Module...5|||||||||||||||||||||||||||||

function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data)); //display users k call korbe
}

function displayUsers(data) { //function er vitor kichu pete hole parameter dite hobe
   for (const user of data) { //function e zehetu ekta array of objects ache tai loop chalaite hobe
      console.log(user.name);//user er name pailam..dekhaite hole
   }

}
//....................................................
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   const ul = document.getElementById('users')//html e ekta id ache 
   for (const user of data) {
      const li = document.createElement('li');//ekta li banailam
      li.innerText = user.name;//inner text set korlam
      ul.appendChild(li)//ul er append child hisebe li k dilam
   }
}