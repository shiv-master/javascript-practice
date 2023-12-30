// console.log("content", document.querySelector("body div:first-of-type").style)
// document.querySelectorAll("body div").forEach(div => div.innerHTML = "divElement")

// const newArticle = document.createElement("article")
// newArticle.classList.add("article1")
// newArticle.setAttribute("id", "articleId")
// newArticle.innerHTML = "Hello, I am article"
// document.body.append(newArticle)
// console.log("newConsole", newArticle.className, newArticle.classList

// sort
// const sorting = ["a", "b", "z", "g", "A", "Z", "C", "F", "e"]
// console.log("sorting", sorting.sort())
// console.log("className", document.getElementsByClassName("box1")[0])

// Event capturing
// const grandParent = document.getElementById("grandParent")
// grandParent.addEventListener("click", ()=> console.log("grandParent clicked"), true)
// const parent = document.getElementById("parent")
// parent.addEventListener("click", (e)=> {e.stopPropagation(); console.log("parent clicked")}, true)
// const child = document.getElementById("child")
// child.addEventListener("click", ()=> console.log("child clicked"), true)

// hoisting
// console.log("value", hoisted)
// function hoisted() {
//     console.log("hello")
// }
// console.log("valueAfter", hoisted)

//shadowing
// var a = 10;
// let b = 20;
// const c = 30;
// {
//     var a = 40;
//     let b = 50;
//     const c = 60;
//     console.log("shadowing", a, b, c)
// }

// prototype
// let proto = {
//     name: "shivam",
//     job: "engineer"
// }
// let arr = []
// console.log("prototype", proto.__proto__, arr.__proto__)

//every function can use
// Function.prototype.shiv = () => {
//     console.log("this is shiv function")
// }
// const mishra = () => {
//     console.log("Hi")
// }
// console.log(mishra.shiv())

//myBind function
// const name = {
//     first: "shivam",
//     last: "mishra"
// }
// const nameFunction = function(city, state) {
//     console.log(this.first + " " + this.last + " " + "lives in " + city + ", " + state)
// }
// Function.prototype.myBind = function(...args) {
//     let obj = this
//     let params = args.slice(1)
//     return function(...args2) {
//         obj.apply(args[0], [params, ...args2])
//     }
// }
// console.log(nameFunction.bind(name, "satna", "mp")())
// console.log(nameFunction.myBind(name, "satna", "mp")())

// currying
// const multiply = function (x) {
//     return function (y) {
//         console.log(x * y)
//     }
// }
// multiply(2)(3)

//sum(1)(2)(3)(4)()
// const sum = function (a) {
//     return function (b) {
//         if(b) {
//             return sum(a+b)
//         }
//         return a
//     }
// }
// console.log(sum(1)(2)(3)(4)())

//testing
// const test = {
//     name: "shivam",
//     job: "engineer",
//     code: "javascript"
// }

// console.log("entries", Object.entries(test))
// console.log("keys", Object.keys(test))
// console.log("values", Object.values(test))

//conversion
// const stringVal = "4"
// const numberVal = +stringVal
// console.log(typeof(numberVal), typeof(stringVal))

//class
// class Employee {
//     constructor(name, DOB, salary) {
//         this.name = name,
//         this.DOB = DOB,
//         this.salary = salary
//     }
//     static getHighestSalary(emp) {
//         console.log("employee salary " + (emp.salary+1000))
//     }
//     addNum(a, b) {
//         console.log(a+b)
//     }
// }
// const emp1 = new Employee("shiv", "04-10-1998", 80000)
// emp1.addNum(2, 3)
// Employee.getHighestSalary(emp1)

//trail
// for(var i = 0; i <= 6; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

//practice
const customDiv = document.createElement("div");
customDiv.setAttribute("id", "digitalClock");
customDiv.classList.add("digital");
document.body.append(customDiv);
const timer = setInterval(()=> {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const digital = `${hour}:${minutes}:${seconds}`;
    document.getElementById("digitalClock").innerHTML = digital;
}, 1000)

// exam debouncing
// const keyPressed = function () {
//     console.log("fetching data")
// }

// const optimise = function (fn, delay) {
//     const context = this
//     const args = arguments
//     let timer
//     return function () {
//         clearTimeout(timer)
//         timer = setTimeout(() => {
//             fn.apply(context, args)
//         }, delay)
//     }
// }

// const optimisedKeyPress = optimise(keyPressed, 500)

// const arrayItem = [{
//     name: "shubham",
//     gender: "male"
// },
// {
//     name:"anshul",
//     gender: "male"
// },
// {
//     name: "priya",
//     gender: "female"
// }]
// const filteredArray = arrayItem.filter(item => item.gender === "male")
// console.log("filtered male", filteredArray)
// const mappedItems = arrayItem.map(item => item.name)
// console.log("mappedData", mappedItems)
// const findArray = arrayItem.find(item => item.name === "shubham")
// console.log("findData", findArray)
// arrayItem.forEach(item => console.log(item.name))
// const someArray = arrayItem.some(item => item.name === "priya")
// console.log("someArray", someArray)

// const newArray = [{
//     name: "bike",
//     price: 50000
// },
// {
//     name: "car",
//     price: 300000
// },
// {
//     name: "pen",
//     price: 5
// }]
// const sum = newArray.reduce((acc, item) => {
//     return acc + item.price
// }, 0)
// console.log("reduce", sum)

