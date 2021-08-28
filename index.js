

const premikas = { name: 'keka ferdousi', cars: { brand: 'toyota' } };
const { brand } = premikas.cars;
// console.log(brand);

const data = { result: [{ userName: { title: 'Mr.', name: "sakib khan" } }] }

// console.log(data.result.userName.name)
console.log(data.result[0].userName.name)
// console.log(data.result[1].userName.name)
// console.log(data.result.userName[0].name)


const p = [1, 2, 3];
// const q = p.find(n => Math.pow(n, 3));//1
// const q = p.filter(n => Math.pow(n, 3));//[1,2,3]
// const q = p.join(n => Math.pow(n, 3));
const q = p.map(n => Math.pow(n, 3));
// console.log(q);



const bondCode = ` I am Fake James bond . My new code is: 00${7 + 1 + 2}`

// console.log(bondCode);

// fetch(url).then(res => res.json()).then(data => console.log(data).catch(error => console.log(error))


// function async loadData(){

//    const res = await fetch(url); const data = await res.json(); console.log(data);

// }