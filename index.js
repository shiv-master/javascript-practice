// const arr = [
//   {
//     name: "shivam",
//     age: 25,
//     gender: "male",
//   },
//   {
//     name: "shubham",
//     age: 26,
//     gender: "male",
//   },
//   {
//     name: "maate",
//     age: 52,
//     gender: "female",
//   },
//   {
//     name: "papaji",
//     age: 54,
//     gender: "male",
//   },
// ];

// const filterArr = arr.filter((entity) => {
//   return entity.age > 50;
// });
// console.log("filteredAge", filterArr);

// const mappedArr = arr.map((entity) => ({ ...entity, age: entity.age ** 2 }));
// console.log("mapped square of age", mappedArr);

// const findArr = arr.find((entity) => entity.age > 50);
// console.log("find maate logs", findArr);

// const newCreatedArr = [];
// arr.forEach((entity) => {
//   newCreatedArr.push({ ...entity, memberOfAFamily: true });
// });
// console.log("forEachArr", newCreatedArr);

// const someArr = arr.some((entity) => entity.name === "maate");
// console.log("maate found", someArr);

// const everyArr = arr.every((entity) => entity.age > 20);
// console.log("age greater than 20", everyArr);

// const sumOfAge = arr.reduce((acc, entity) => acc + entity.age, 0);
// console.log("sum of age", sumOfAge);

// const duplicateArr = [1, 2, 3, 2, 3, 1];
// const uniqueArr = [...new Set(duplicateArr)];
// console.log("uniqueArr", uniqueArr);

// const obj1 = {
//   name: "shivam",
//   age: 25,
//   gender: "male",
// };
// const { gender, ...obj2 } = obj1;
// obj2.age = 20;
// console.log("compare", obj1, obj2);

// const numArr = [1, 2, 3, 4, 5, 6];
// const [a, , b, ...restNum] = numArr;
// console.log("check", a, b, restNum);

// const sum = (a) => {
//   return (b) => {
//     console.log("sum is ", a + b);
//   };
// };
// sum(3)(4);

// const divEle = document.createElement('div')
// divEle.classList.add('divClass')
// divEle.setAttribute('id', 'divId')
// document.body.appendChild(divEle)
// setInterval(() => {
//     let time = new Date()
//     divEle.innerText = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()<9?`0${time.getSeconds()}`:time.getSeconds()}`
// }, 1000)

// divEle.addEventListener('click', () => console.log("time clicked"), false)

// const a = [1, 2, 3, 4, 5]
// const b = [6, ...a]
// console.log("b", b)
// const [c, ...d] = b
// console.log("d", d)

// const obj = {
//   name: "shivam",
//   age: 26
// }

// const obj2 = {
//   profession: "engineer"
// }

// const obj3 = {
//   ...obj,
//   ...obj2
// }

// console.log("obj3", obj3)

// for(let key in obj3) {
//   console.log('key', key, obj3[key])
// }

// for(let [key,value] of Object.entries(obj3)) {
//   console.log("pair", key, value)
// }

// for(let x of d) {
//   console.log("values", x)
// }

// const p = new Promise((resolve, reject) => {
//   let x = 2
//   if(x === 1)
//   resolve("x is 1")
//   else
//   reject("x is not 1")
// })

// p.then((val) => console.log(val), (rejectVal) => console.log(rejectVal))

// console.log('a')
// setTimeout(() => console.log("b"), 1000)
// setTimeout(() => console.log("c"), 0)
// setTimeout(() => console.log("d"), 1000)
// setTimeout(() => console.log("e"), 2000)
// console.log('f')

// const a = () => {
//     let x = 10
//     const b = () => {
//         console.log("value of x " + x)
//     }
//     return b
// }
// a()()

// const obj1 = {
//     name: "shivam",
//     nameFunc: function (city, state) {
//         console.log(`name is ${this.name} lives in ${city}, ${state}`)
//     }
// }

// const obj2 = {
//     name: "shiv"
// }

// obj1.nameFunc.bind(obj2, "satna")("mp")

// Function.prototype.shivBind = function (...args) {
//     let obj = this
//     let params = args.slice(1)
//     return function (...args2) {
//         obj.apply(args[0], [...params, ...args2])
//     }
// }
// obj1.nameFunc.shivBind(obj2, "satna")("mp");

// const obj = {
//     name: "shivam",
//     age: 26
// }

// console.log(obj['name'])

//filter map find forEach some every reduce
// const arr = [
//     {
//         name: "shivam",
//         age: 26
//     },
//     {
//         name: "shubham",
//         age: 28
//     },
//     {
//         name: "maate",
//         age: 53
//     }
// ]

// const filteredArr = arr.filter(entity => entity.name.startsWith('s'))
// console.log("filter", filteredArr)

// const mapArr = arr.map(entity => ({...entity, doubleAge: entity.age*2}))
// console.log("map", mapArr)

// const find = mapArr.find(entity => entity.name.startsWith('s'))
// console.log("find", find)

// const forEachArr = []
// mapArr.forEach(entity => {
//     forEachArr.push(entity.doubleAge)
// })
// console.log("forEach", forEachArr)

// const every = forEachArr.every(entity => entity%2 === 0)
// console.log("every", every)

// const sumOfDoubleAge = mapArr.reduce((acc, entity) => acc + entity.doubleAge, 0)
// console.log("reduce", sumOfDoubleAge)

// const arr = [2, 2, 3, 1, 3]
// const uniqueArr = [...new Set(arr)]
// console.log(uniqueArr)

// const primeNum = (n) => {
//     if (n === 1) {
//         return 'neither prime nor composite'
//     } else {
//         if (n < 1) {
//             return 'Please enter positive number'
//         } else {
//             for(let i = 2; i <= Math.sqrt(n); i++) {
//                 if (n % i === 0) {
//                     return 'composite number'
//                 }
//             }
//             return 'prime number'
//         }
//     }
// }
// console.log(primeNum(55))

// const faboNum = (n) => {
//     let a = 0, b = 1, next;
//     if (n < 2) {
//         return n
//     } else {
//         for (let i = 2; i <= n; i++) {
//             next = a + b;
//             a = b;
//             b = next;
//         }
//         return next
//     }
// }
// console.log(faboNum(10))

// const countChar = (str) => {
//     for (let i = 0; i < str.length; i++) {
//         let count = 0
//         for (let j = 0; j < str.length; j++) {
//             if (str[i] === str[j] && i > j) {
//                 break
//             }
//             if (str[i] === str[j]) {
//                 count++
//             }
//         }
//         if (count) {
//             console.log(`${str[i]} = ${count}`);
//         }
//     }
// }
// countChar('shivammishra')