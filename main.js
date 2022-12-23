// Question1
// const parent = {
// name :'vandana',
// age : '40',
// place : 'kathua',
// getPlace: function(){
//     return `heelo my name is ${this.name} i am ${this.age} years old. i live in ${this.place} `
// }
// }
// const child = {
// name : 'sahdev',
// age:20
// }
// // console.log(parent.__proto__);
// // console.log(parent.getPlace()); here i am accessing the getPlace function
// let child1 = Object.create(parent)//first approach
// // console.log(child1);

//Question 2

function Parent(){}
Parent.prototype.sayHello = function(){
    return 'Hi my name is nakul'
}
function Child() {}
 Child.prototype = new Parent();

 let child = new Child();//we need to create a object using Child() function and only then we can use the variables or functions inside Child()
 //we have created an instance of child object.
console.log( child.sayHello());
// console.log(Parent);


// Question 3:

// function Parent(){}
//here by using Array we are creating a Array object constructor
Array.prototype.addSum =  function(){
    let sum =0;

    for (let i = 0; i < this.length; i++) {
        // Add the current element to the sum
        sum += this[i];
      }
      return sum;
}



//Question 4

function getObjectProp(obj){
    let arr = [];
    
    for(let prop in obj){
        arr.push({
            // id: prop,
            value: obj[prop]//retrieving the values of the ids. which are inside obj1 object. both inherited and own.
        })
    }
    return arr;
}


const obj1 = {
    name:'nakul',
    age: '20'
}
console.log(getObjectProp(obj1));









// ********************                               TO RETREIVE DATA FROM ENTRIES USING FETCH AND PROMISE. CAUSE FETCH RETURNS A PROMISE
// fetch('https://api.publicapis.org/entries')
//   .then(response => response.json())
//   .then(data => {
//     let i =0;
//     let arr =[];
//     while(i !== data.entries.length){

   
//     // console.log(data.entries[i].API);
// arr.push(data.entries[i].API);
//     i++;
// }
// console.log(arr);
//   });
// //   console.log(arr);




















// new Promise((resolve,reject) => {
//     setTimeout( () => {
//         console.log('welcome to jammu and kashmir');
//         resolve();},3000
//         )})
//     .then(()=> {console.log(`my name is ${parent.name}`)})
