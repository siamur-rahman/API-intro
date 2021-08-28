fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   .then(json => console.log(json))

/*fetch('https://jsonplaceholder.typicode.com/todos/1')
   .then(response => response.json())
   // .then(json => console.log(json))
   // .then(json => console.log(json.userId))
   .then(json => console.log(json.title))

   .then(response => console.log('ami kichu ekta likhchi'))
*/

//..............1111
function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}


function loadData() {
   fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))
}


function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => console.log(data));
}
function loadPost() {
   fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => console.log(data));
}
/*

// loadPost();

*/

/*
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   console.log(data);
}*/

/*///shobgula user pete.........
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   for (const user of data) {
      console.log(user);
   }
   console.log(data);
}
*/
/*
// user theke sob nam pete............
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   for (const user of data) {
      console.log(user.name);
   }
}*/


/*
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   const ul = document.getElementById('users')
   for (const user of data) {
      console.log(user.name);
      const li = document.createElement('li');
      li.innerText = user.name;
      ul.appendChild(li)
   }
}*/

/*
function loadUsers() {
   fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => displayUsers(data));
}

function displayUsers(data) {
   const ul = document.getElementById('users')
   for (const user of data) {
      console.log(user.name);
      const li = document.createElement('li');
      li.innerText = `name: ${user.name};`
      ul.appendChild(li)
   }
}*/

// function loadUsers() {
//    fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(data => displayUsers(data));
// }

// function displayUsers(data) {
//    const ul = document.getElementById('users')
//    for (const user of data) {
//       console.log(user.name);
//       const li = document.createElement('li');
//       li.innerText = `name: ${user.name}   email: ${user.email}`;
//       ul.appendChild(li)
//    }
// }

