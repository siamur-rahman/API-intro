// javascript object notation
//JSON
const user = { id: 11, name: 'Gorib Amir', job: 'actor' }//user ta hocche javascript er object

const stringified = JSON.stringify(user);//USER K JSON E Stringyfied korche
// console.log(stringified);
// console.log(user);

const shop = {
   name: 'Alia store',
   address: 'Ranbir road',
   profit: 10000,
   owner: {
      name: 'Alia Bhatt',
      professon: 'actor'
   },
   products: ['laptop', 'mobile', 'pepsi'],
   isExpensive: false
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);


const converted = JSON.parse(shopStringified);
// console.log(converted);